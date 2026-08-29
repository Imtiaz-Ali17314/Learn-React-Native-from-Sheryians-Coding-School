import TopicCard from "@/components/TopicCard";
import { TOPICS } from "@/constants/topics";
import React from "react";
import { FlatList, StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    headerBg: isDark ? "#181826" : "#ffffff",
    headerBorder: isDark ? "#2e2e42" : "#cbd5e1",
    title: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    statCard: isDark ? "#222234" : "#f1f5f9",
    statBorder: isDark ? "#334155" : "#e2e8f0",
    statValue: isDark ? "#60a5fa" : "#2563eb",
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
        ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
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
  cardSeparator: {
    height: 14,
  },
  headerSection: {
    marginBottom: 12,
  },
  welcomeCard: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 1.5,
    borderStyle: "solid",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
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
    borderWidth: 1,
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
