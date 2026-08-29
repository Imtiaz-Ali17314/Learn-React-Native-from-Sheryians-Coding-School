import TopicCard from "@/components/TopicCard";
import { TOPICS } from "@/constants/topics";
import { TopicCategory } from "@/types";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES: { label: string; value: TopicCategory | "all" }[] = [
  { label: "All Topics", value: "all" },
  { label: "Basics", value: "fundamentals" },
  { label: "Styling", value: "styling" },
  { label: "Lists & Scroll", value: "scrollview" },
  { label: "Inputs", value: "input" },
  { label: "Navigation", value: "navigation" },
];

export default function ExploreScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    TopicCategory | "all"
  >("all");

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    inputBg: isDark ? "#1e1e2d" : "#ffffff",
    inputBorder: isDark ? "#2d2d3f" : "#cbd5e1",
    inputText: isDark ? "#ffffff" : "#000000",
    placeholder: isDark ? "#64748b" : "#94a3b8",
    chipBg: isDark ? "#1a1a28" : "#e2e8f0",
    chipActiveBg: isDark ? "#2563eb" : "#2563eb",
    chipText: isDark ? "#94a3b8" : "#475569",
    chipActiveText: "#ffffff",
    emptyText: isDark ? "#94a3b8" : "#64748b",
  };

  const filteredTopics = TOPICS.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.keyConcepts.some((c) =>
        c.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "all" ||
      topic.category === selectedCategory ||
      (selectedCategory === "scrollview" && topic.category === "flatlist");

    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.header}>
        <TextInput
          style={[
            styles.searchInput,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.inputBorder,
              color: colors.inputText,
            },
          ]}
          placeholder="🔍 Search topics or key concepts..."
          placeholderTextColor={colors.placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <FlatList
          horizontal
          data={CATEGORIES}
          keyExtractor={(item) => item.value}
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
          contentContainerStyle={styles.categoryContainer}
          renderItem={({ item }) => {
            const isActive = selectedCategory === item.value;
            return (
              <Pressable
                onPress={() => setSelectedCategory(item.value)}
                style={[
                  styles.categoryChip,
                  {
                    backgroundColor: isActive
                      ? colors.chipActiveBg
                      : colors.chipBg,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    {
                      color: isActive ? colors.chipActiveText : colors.chipText,
                    },
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      <FlatList
        data={filteredTopics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TopicCard topic={item} isDarkMode={isDark} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyView}>
            <Text style={[styles.emptyText, { color: colors.emptyText }]}>
              No topics found matching "{searchQuery}".
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  searchInput: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  categoryList: {
    marginTop: 12,
    maxHeight: 40,
  },
  categoryContainer: {
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "600",
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  emptyView: {
    padding: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    textAlign: "center",
  },
});
