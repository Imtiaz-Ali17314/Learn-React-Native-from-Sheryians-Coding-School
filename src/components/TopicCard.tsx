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

  // Dynamic Theme Colors
  const colors = {
    cardBg: dark ? "#1e1e2d" : "#ffffff",
    borderColor: dark ? "#6366f1" : "#2563eb",
    title: dark ? "#ffffff" : "#0f172a",
    subtitle: dark ? "#818cf8" : "#1d4ed8",
    description: dark ? "#cbd5e1" : "#334155",
    badgeBg: dark ? "#312e81" : "#dbeafe",
    badgeText: dark ? "#c7d2fe" : "#1e40af",
    chipBg: dark ? "#27273a" : "#f1f5f9",
    chipBorder: dark ? "#373752" : "#cbd5e1",
    chipText: dark ? "#94a3b8" : "#475569",
    btnBg: dark ? "#4338ca" : "#2563eb",
    btnText: "#ffffff",
  };

  return (
    <Link href={topic.route as any} asChild>
      <Pressable
        style={({ pressed }) => [
          styles.cardContainer,
          {
            backgroundColor: colors.cardBg,
            borderColor: colors.borderColor,
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.98 : 1 }],
          },
        ]}
      >
        {/* Top Row: Icon + Topic Number Title + Badge */}
        <View style={styles.topRow}>
          <View style={[styles.iconBox, { backgroundColor: colors.badgeBg }]}>
            <Text style={styles.iconEmoji}>{topic.icon}</Text>
          </View>

          <View style={styles.headerTextGroup}>
            <Text style={[styles.topicTag, { color: colors.subtitle }]}>
              TOPIC #{topic.topicNumber}
            </Text>
            <Text style={[styles.cardTitle, { color: colors.title }]}>
              {topic.title}
            </Text>
          </View>

          <View style={[styles.statusBadge, { backgroundColor: colors.badgeBg }]}>
            <Text style={[styles.statusText, { color: colors.badgeText }]}>
              Ready
            </Text>
          </View>
        </View>

        {/* Subtitle & Description */}
        <Text style={[styles.subtitleText, { color: colors.subtitle }]}>
          {topic.subtitle}
        </Text>
        <Text style={[styles.descriptionText, { color: colors.description }]}>
          {topic.description}
        </Text>

        {/* Key Concepts Chips */}
        <View style={styles.conceptsRow}>
          {topic.keyConcepts.slice(0, 3).map((concept, index) => (
            <View
              key={index}
              style={[
                styles.conceptTag,
                {
                  backgroundColor: colors.chipBg,
                  borderColor: colors.chipBorder,
                },
              ]}
            >
              <Text style={[styles.conceptTagText, { color: colors.chipText }]}>
                • {concept}
              </Text>
            </View>
          ))}
        </View>

        {/* Footer Action Button Box */}
        <View style={[styles.actionBtn, { backgroundColor: colors.btnBg }]}>
          <Text style={[styles.actionBtnText, { color: colors.btnText }]}>
            Open Topic Demo ➔
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  // PRIMARY CARD CONTAINER BOX STYLING
  cardContainer: {
    width: "100%",
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    borderWidth: 2,
    borderStyle: "solid",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  iconEmoji: {
    fontSize: 22,
  },
  headerTextGroup: {
    flex: 1,
  },
  topicTag: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 12,
  },
  conceptsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 14,
  },
  conceptTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  conceptTagText: {
    fontSize: 11,
    fontWeight: "600",
  },
  actionBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtnText: {
    fontSize: 14,
    fontWeight: "700",
  },
});

export default TopicCard;
