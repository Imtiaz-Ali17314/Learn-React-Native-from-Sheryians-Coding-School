import TopicCard from "@/components/TopicCard";
import { TOPICS } from "@/constants/topics";
import { FlatList, StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    headerBg: isDark ? "#1e1e2d" : "#ffffff",
    headerBorder: isDark ? "#2d2d3f" : "#e2e8f0",
    title: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    statCard: isDark ? "#1a1a28" : "#eff6ff",
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
          <View style={[styles.statBox, { backgroundColor: colors.statCard }]}>
            <Text style={[styles.statNumber, { color: colors.statValue }]}>
              7 / 7
            </Text>
            <Text style={[styles.statText, { color: colors.statLabel }]}>
              Topics Ready
            </Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: colors.statCard }]}>
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
    gap: 20,
  },
  headerSection: {
    marginBottom: 16,
  },
  welcomeCard: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    marginBottom: 20,
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
    fontWeight: "700",
  },
});
