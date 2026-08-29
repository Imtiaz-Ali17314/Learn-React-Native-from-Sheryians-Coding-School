import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface FruitItem {
  id: string;
  name: string;
  emoji: string;
  category: string;
}

const SAMPLE_FRUITS: FruitItem[] = [
  { id: "1", name: "Apple", emoji: "🍎", category: "Tree Fruit" },
  { id: "2", name: "Banana", emoji: "🍌", category: "Tropical" },
  { id: "3", name: "Grape", emoji: "🍇", category: "Berry" },
  { id: "4", name: "Orange", emoji: "🍊", category: "Citrus" },
  { id: "5", name: "Strawberry", emoji: "🍓", category: "Berry" },
  { id: "6", name: "Watermelon", emoji: "🍉", category: "Melon" },
  { id: "7", name: "Peach", emoji: "🍑", category: "Stone Fruit" },
  { id: "8", name: "Kiwi", emoji: "🥝", category: "Exotic" },
  { id: "9", name: "Pineapple", emoji: "🍍", category: "Tropical" },
  { id: "10", name: "Mango", emoji: "🥭", category: "Tropical" },
  { id: "11", name: "Cherry", emoji: "🍒", category: "Stone Fruit" },
  { id: "12", name: "Avocado", emoji: "🥑", category: "Berry" },
];

export default function FlatListTopicScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const [columns, setColumns] = useState<number>(2);
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    cardBg: isDark ? "#1e1e2d" : "#ffffff",
    cardBorder: isDark ? "#2d2d3f" : "#e2e8f0",
    text: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    gridItemBg: isDark ? "#1a1a28" : "#f1f5f9",
    selectedBorder: "#2563eb",
    chipBg: isDark ? "#2a2a3c" : "#e2e8f0",
    chipActiveBg: "#2563eb",
    chipText: isDark ? "#94a3b8" : "#475569",
    chipActiveText: "#ffffff",
  };

  const renderFruitCard = ({ item }: { item: FruitItem }) => {
    const isSelected = selectedFruit === item.name;
    return (
      <Pressable
        onPress={() => setSelectedFruit(item.name)}
        style={[
          styles.fruitCard,
          {
            backgroundColor: colors.gridItemBg,
            borderColor: isSelected ? colors.selectedBorder : colors.cardBorder,
            borderWidth: isSelected ? 2 : 1,
          },
        ]}
      >
        <Text style={styles.fruitEmoji}>{item.emoji}</Text>
        <Text style={[styles.fruitName, { color: colors.text }]}>
          {item.name}
        </Text>
        <Text style={[styles.fruitCategory, { color: colors.subText }]}>
          {item.category}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <FlatList
        key={`grid-cols-${columns}`}
        data={SAMPLE_FRUITS}
        numColumns={columns}
        keyExtractor={(item) => item.id}
        renderItem={renderFruitCard}
        columnWrapperStyle={columns > 1 ? styles.columnWrapper : undefined}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerSection}>
            <SectionHeader
              title="Topic 4: FlatList & Grid Layouts"
              description="Learn virtualized list rendering, numColumns grid layouts, keyExtractor, and ItemSeparatorComponent."
              badge="Virtualized List"
            />

            {/* Performance Tip Card */}
            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: colors.cardBg,
                  borderColor: colors.cardBorder,
                },
              ]}
            >
              <Text style={[styles.infoTitle, { color: colors.text }]}>
                ⚡ FlatList vs ScrollView
              </Text>
              <Text style={[styles.infoText, { color: colors.subText }]}>
                •{" "}
                <Text style={{ fontWeight: "700", color: colors.text }}>
                  ScrollView
                </Text>{" "}
                renders ALL items in memory immediately (heavy for 100+ items).
              </Text>
              <Text style={[styles.infoText, { color: colors.subText }]}>
                •{" "}
                <Text style={{ fontWeight: "700", color: colors.text }}>
                  FlatList
                </Text>{" "}
                virtualizes & renders only visible items on screen.
              </Text>
            </View>

            {/* Grid Columns Controller */}
            <View style={styles.controlsRow}>
              <Text style={[styles.controlLabel, { color: colors.text }]}>
                Grid Layout (numColumns):
              </Text>
              <View style={styles.chipRow}>
                {[1, 2, 3].map((col) => {
                  const isActive = columns === col;
                  return (
                    <Pressable
                      key={col}
                      onPress={() => setColumns(col)}
                      style={[
                        styles.chip,
                        {
                          backgroundColor: isActive
                            ? colors.chipActiveBg
                            : colors.chipBg,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.chipText,
                          {
                            color: isActive
                              ? colors.chipActiveText
                              : colors.chipText,
                          },
                        ]}
                      >
                        {col} {col === 1 ? "Column" : "Cols"}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {selectedFruit && (
              <View style={styles.selectedBanner}>
                <Text style={styles.selectedText}>
                  Selected:{" "}
                  <Text style={{ fontWeight: "700" }}>{selectedFruit}</Text>
                </Text>
              </View>
            )}
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
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  headerSection: {
    marginBottom: 16,
  },
  infoCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 4,
  },
  controlsRow: {
    marginBottom: 12,
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  chipRow: {
    flexDirection: "row",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
  },
  selectedBanner: {
    backgroundColor: "#dbeafe",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  selectedText: {
    color: "#1e40af",
    fontSize: 13,
    textAlign: "center",
  },
  fruitCard: {
    flex: 1,
    margin: 4,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  fruitEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  fruitName: {
    fontSize: 14,
    fontWeight: "700",
  },
  fruitCategory: {
    fontSize: 11,
    marginTop: 2,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  separator: {
    height: 4,
  },
});
