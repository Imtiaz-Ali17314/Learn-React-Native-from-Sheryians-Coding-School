import { Topic } from "@/types";
import { useRouter } from "expo-router";
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
  const router = useRouter();
  const theme = useColorScheme();
  const dark = isDarkMode !== undefined ? isDarkMode : theme === "dark";

  // Elegant, subtle, modern UI border colors for light and dark themes
  const colors = {
    cardBg: dark ? "#181826" : "#ffffff",
    borderColor: dark ? "#2e2e42" : "#cbd5e1",
    title: dark ? "#f8fafc" : "#0f172a",
    subtitle: dark ? "#60a5fa" : "#2563eb",
    description: dark ? "#cbd5e1" : "#475569",
    badgeBg: dark ? "#1e293b" : "#eff6ff",
    badgeText: dark ? "#93c5fd" : "#1d4ed8",
    chipBg: dark ? "#222234" : "#f1f5f9",
    chipBorder: dark ? "#334155" : "#e2e8f0",
    chipText: dark ? "#94a3b8" : "#475569",
    btnBg: dark ? "#2563eb" : "#2563eb",
    btnText: "#ffffff",
  };

  return (
    <Pressable
      onPress={() => router.push(topic.route as any)}
      style={({ pressed }) => [
        styles.cardContainer,
        {
          backgroundColor: colors.cardBg,
          borderColor: colors.borderColor,
          opacity: pressed ? 0.9 : 1,
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
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderStyle: "solid",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
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
