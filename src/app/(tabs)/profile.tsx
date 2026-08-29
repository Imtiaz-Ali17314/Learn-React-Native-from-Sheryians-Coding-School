import { TOPICS } from "@/constants/topics";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

export default function ProfileScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    cardBg: isDark ? "#181826" : "#ffffff",
    cardBorder: isDark ? "#2e2e42" : "#cbd5e1",
    title: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    accent: isDark ? "#60a5fa" : "#2563eb",
    progressBg: isDark ? "#222234" : "#e2e8f0",
    progressFill: isDark ? "#22c55e" : "#16a34a",
  };

  const totalTopics = TOPICS.length;
  const completedTopics = TOPICS.filter((t) => t.status === "completed").length;
  const progressPercent = Math.round((completedTopics / totalTopics) * 100);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.profileCard,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🎓</Text>
        </View>
        <Text style={[styles.userName, { color: colors.title }]}>
          Imtiaz's Student
        </Text>
        <Text style={[styles.userRole, { color: colors.subText }]}>
          React Native Beginner to Pro Roadmap
        </Text>

        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={[styles.progressTitle, { color: colors.title }]}>
              Course Completion
            </Text>
            <Text style={[styles.progressPercent, { color: colors.accent }]}>
              {progressPercent}%
            </Text>
          </View>
          <View style={[styles.progressBar, { backgroundColor: colors.progressBg }]}>
            <View
              style={[
                styles.progressFill,
                {
                  backgroundColor: colors.progressFill,
                  width: `${progressPercent}%`,
                },
              ]}
            />
          </View>
        </View>
      </View>

      <Text style={[styles.sectionHeading, { color: colors.title }]}>
        📋 Syllabus Topics Checklist
      </Text>

      {TOPICS.map((topic) => (
        <View
          key={topic.id}
          style={[
            styles.checkItem,
            { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
          ]}
        >
          <Text style={styles.checkIcon}>✅</Text>
          <View style={styles.checkTextContainer}>
            <Text style={[styles.checkTitle, { color: colors.title }]}>
              Topic #{topic.topicNumber}: {topic.title}
            </Text>
            <Text style={[styles.checkSub, { color: colors.subText }]}>
              {topic.subtitle}
            </Text>
          </View>
        </View>
      ))}

      <View
        style={[
          styles.infoCard,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.infoTitle, { color: colors.title }]}>
          💡 Key Learning Principle
        </Text>
        <Text style={[styles.infoBody, { color: colors.subText }]}>
          "React Native code hamesha cleanly structured aur modular hona chahiye.
          StyleSheet.create best practice hai performance ke liye, inline style sirf dynamic values ke liye use karein."
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  profileCard: {
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    borderWidth: 1.5,
    marginBottom: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
  },
  userRole: {
    fontSize: 13,
    marginTop: 4,
  },
  progressSection: {
    width: "100%",
    marginTop: 20,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: "700",
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 5,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  checkItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    marginBottom: 10,
  },
  checkIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  checkTextContainer: {
    flex: 1,
  },
  checkTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  checkSub: {
    fontSize: 12,
    marginTop: 2,
  },
  infoCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    marginTop: 16,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },
  infoBody: {
    fontSize: 13,
    lineHeight: 19,
    fontStyle: "italic",
  },
});
