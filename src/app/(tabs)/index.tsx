import TopicCard from "@/components/TopicCard";
import { TOPICS } from "@/constants/topics";
import React from "react";
import { FlatList, StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#0a0a12" : "#e2e8f0",
    headerBg: isDark ? "#1a1a27" : "#ffffff",
    headerBorder: isDark ? "#4f46e5" : "#2563eb",
    title: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    statCard: isDark ? "#242438" : "#eff6ff",
    statBorder: isDark ? "#4f46e5" : "#93c5fd",
    statValue: isDark ? "#818cf8" : "#1d4ed8",
    statLabel: isDark ? "#94a3b8" : "#1e40af",
  };

  const renderHeader = () => (
    <View style={styles.headerSection}>
      <View
        style={[
          styles.welcomeCard,
          {
            backgroundColor: colors.headerBg,
            borderColor: colors.headerBorder,
          },
        ]}
      >
        <Text style={[styles.welcomeTitle, { color: colors.title }]}>
          Imtiaz's Coding School 🚀
        </Text>
        <Text style={[styles.welcomeSub, { color: colors.subText }]}>
          Learn React Native Course Syllabus & Hands-on Implementation
        </Text>

        <View style={styles.statsRow}>
          <View
            style={[
              styles.statBox,
              {
                backgroundColor: colors.statCard,
                borderColor: colors.statBorder,
              },
            ]}
          >
            <Text style={[styles.statNumber, { color: colors.statValue }]}>
              7 / 7
            </Text>
            <Text style={[styles.statText, { color: colors.statLabel }]}>
              Topics Ready
            </Text>
          </View>

          <View
            style={[
              styles.statBox,
              {
                backgroundColor: colors.statCard,
                borderColor: colors.statBorder,
              },
            ]}
          >
            <Text style={[styles.statNumber, { color: colors.statValue }]}>
              100%
            </Text>
            <Text style={[styles.statText, { color: colors.statLabel }]}>
              Structured
            </Text>
          </View>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.title }]}>
        📚 Learning Topics
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <FlatList
        data={TOPICS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TopicCard topic={item} isDarkMode={isDark} />
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  headerSection: {
    marginBottom: 12,
  },
  welcomeCard: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 2,
    borderStyle: "solid",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: "800",
  },
  welcomeSub: {
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  statBox: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "800",
  },
  statText: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 6,
  },
});
