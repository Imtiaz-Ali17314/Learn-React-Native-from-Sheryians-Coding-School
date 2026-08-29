import { Topic } from "@/types";
import { Link } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

interface TopicCardProps {
  topic: Topic;
  isDarkMode?: boolean;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, isDarkMode }) => {
  const theme = useColorScheme();
  const dark = isDarkMode !== undefined ? isDarkMode : theme === "dark";

  const colors = {
    cardBg: dark ? "#1e1e2d" : "#ffffff",
    border: dark ? "#2d2d3f" : "#e2e8f0",
    title: dark ? "#f8fafc" : "#0f172a",
    subtitle: dark ? "#94a3b8" : "#64748b",
    description: dark ? "#cbd5e1" : "#334155",
    badgeBg: dark ? "#1e3a8a" : "#eff6ff",
    badgeText: dark ? "#93c5fd" : "#1d4ed8",
    conceptBg: dark ? "#2a2a3c" : "#f1f5f9",
    conceptText: dark ? "#94a3b8" : "#475569",
    arrow: dark ? "#60a5fa" : "#2563eb",
  };

  return (
    <Link href={topic.route as any} asChild>
      <Pressable
        style={({ pressed }) => [
          styles.card,
          {
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
            transform: [{ scale: pressed ? 0.98 : 1 }],
            opacity: pressed ? 0.9 : 1,
          },
        ]}
      >
        <View style={styles.topRow}>
          <View
            style={[styles.iconContainer, { backgroundColor: colors.badgeBg }]}
          >
            <Text style={styles.icon}>{topic.icon}</Text>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={[styles.topicNumber, { color: colors.badgeText }]}>
              Topic #{topic.topicNumber}
            </Text>
            <Text style={[styles.title, { color: colors.title }]}>
              {topic.title}
            </Text>
          </View>
          <View style={styles.arrowContainer}>
            <Text style={[styles.arrow, { color: colors.arrow }]}>➔</Text>
          </View>
        </View>

        <Text style={[styles.subtitle, { color: colors.subtitle }]}>
          {topic.subtitle}
        </Text>
        <Text style={[styles.description, { color: colors.description }]}>
          {topic.description}
        </Text>

        <View style={styles.conceptsContainer}>
          {topic.keyConcepts.slice(0, 3).map((concept, index) => (
            <View
              key={index}
              style={[
                styles.conceptChip,
                { backgroundColor: colors.conceptBg },
              ]}
            >
              <Text style={[styles.conceptText, { color: colors.conceptText }]}>
                • {concept}
              </Text>
            </View>
          ))}
          {topic.keyConcepts.length > 3 && (
            <View
              style={[
                styles.conceptChip,
                { backgroundColor: colors.conceptBg },
              ]}
            >
              <Text style={[styles.conceptText, { color: colors.conceptText }]}>
                +{topic.keyConcepts.length - 3} more
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 30,
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderColor: "#ffffff",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 22,
  },
  headerTitleContainer: {
    flex: 1,
  },
  topicNumber: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 2,
  },
  arrowContainer: {
    paddingLeft: 8,
  },
  arrow: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  conceptsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  conceptChip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  conceptText: {
    fontSize: 11,
    fontWeight: "500",
  },
});

export default TopicCard;
