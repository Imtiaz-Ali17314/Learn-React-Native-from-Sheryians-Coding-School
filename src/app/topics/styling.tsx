import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import {
  FlexStyle,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

export default function StylingTopicScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  // Interactive Flexbox State
  const [direction, setDirection] = useState<FlexStyle["flexDirection"]>("row");
  const [justify, setJustify] =
    useState<FlexStyle["justifyContent"]>("space-between");
  const [align, setAlign] = useState<FlexStyle["alignItems"]>("center");
  const [wrap, setWrap] = useState<FlexStyle["flexWrap"]>("wrap");

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    cardBg: isDark ? "#1e1e2d" : "#ffffff",
    cardBorder: isDark ? "#2d2d3f" : "#e2e8f0",
    text: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    chipBg: isDark ? "#1a1a28" : "#e2e8f0",
    chipActiveBg: "#2563eb",
    chipText: isDark ? "#94a3b8" : "#475569",
    chipActiveText: "#ffffff",
    boxBg: isDark ? "#222233" : "#f1f5f9",
  };

  const renderOptionSelector = (
    label: string,
    options: string[],
    currentValue: string | undefined,
    onSelect: (val: any) => void
  ) => (
    <View style={styles.selectorGroup}>
      <Text style={[styles.selectorLabel, { color: colors.subText }]}>
        {label}: <Text style={{ color: colors.text, fontWeight: "700" }}>{currentValue}</Text>
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
        {options.map((opt) => {
          const isActive = currentValue === opt;
          return (
            <Pressable
              key={opt}
              onPress={() => onSelect(opt)}
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
                {opt}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SectionHeader
        title="Topic 2: Styling & Flexbox"
        description="Master React Native layouts, StyleSheet best practices, and interactive Flexbox properties."
        badge="Layout Engine"
      />

      {/* Best Practices Note */}
      <View
        style={[
          styles.card,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          💡 Styling Rule of Thumb
        </Text>
        <Text style={[styles.bodyText, { color: colors.subText }]}>
          1. <Text style={{ fontWeight: "700", color: colors.text }}>StyleSheet.create</Text>: Hamesha primary choice honi chahiye performance & memory efficiency ke liye.
        </Text>
        <Text style={[styles.bodyText, { color: colors.subText }]}>
          2. <Text style={{ fontWeight: "700", color: colors.text }}>Inline Styles</Text>: Sirf dynamic values (jaise theme colors ya state calculations) ke liye use karein.
        </Text>
        <Text style={[styles.bodyText, { color: colors.subText }]}>
          3. <Text style={{ fontWeight: "700", color: colors.text }}>Raw JS Objects</Text>: Render ke waqt naye objects recreate karti hain, isliye inhen pass na karein.
        </Text>
      </View>

      {/* Interactive Flexbox Playground */}
      <View
        style={[
          styles.card,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          🎛️ Interactive Flexbox Playground
        </Text>

        {renderOptionSelector(
          "flexDirection",
          ["row", "column"],
          direction,
          setDirection
        )}

        {renderOptionSelector(
          "justifyContent",
          [
            "flex-start",
            "center",
            "flex-end",
            "space-between",
            "space-around",
            "space-evenly",
          ],
          justify,
          setJustify
        )}

        {renderOptionSelector(
          "alignItems",
          ["flex-start", "center", "flex-end", "stretch"],
          align,
          setAlign
        )}

        {renderOptionSelector(
          "flexWrap",
          ["nowrap", "wrap"],
          wrap,
          setWrap
        )}

        {/* Live Interactive Box */}
        <Text style={[styles.previewLabel, { color: colors.text }]}>
          Live Flexbox Result:
        </Text>
        <View
          style={[
            styles.previewBox,
            {
              backgroundColor: colors.boxBg,
              flexDirection: direction,
              justifyContent: justify,
              alignItems: align,
              flexWrap: wrap,
            },
          ]}
        >
          <View style={[styles.flexItem, { backgroundColor: "#ef4444" }]}>
            <Text style={styles.itemText}>1</Text>
          </View>
          <View style={[styles.flexItem, { backgroundColor: "#10b981" }]}>
            <Text style={styles.itemText}>2</Text>
          </View>
          <View style={[styles.flexItem, { backgroundColor: "#3b82f6" }]}>
            <Text style={styles.itemText}>3</Text>
          </View>
          <View style={[styles.flexItem, { backgroundColor: "#8b5cf6" }]}>
            <Text style={styles.itemText}>4</Text>
          </View>
        </View>
      </View>

      {/* Flex Grow Demo */}
      <View
        style={[
          styles.card,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          📏 Flex Grow & Distribution
        </Text>
        <Text style={[styles.hintText, { color: colors.subText }]}>
          Item 2 has <Text style={{ fontWeight: "700" }}>flexGrow: 2</Text> (takes double available space), while Item 1 & 3 have <Text style={{ fontWeight: "700" }}>flexGrow: 1</Text>.
        </Text>
        <View style={[styles.flexGrowRow, { backgroundColor: colors.boxBg }]}>
          <View style={[styles.growBox, { flexGrow: 1, backgroundColor: "#f59e0b" }]}>
            <Text style={styles.itemText}>grow: 1</Text>
          </View>
          <View style={[styles.growBox, { flexGrow: 2, backgroundColor: "#10b981" }]}>
            <Text style={styles.itemText}>grow: 2</Text>
          </View>
          <View style={[styles.growBox, { flexGrow: 1, backgroundColor: "#3b82f6" }]}>
            <Text style={styles.itemText}>grow: 1</Text>
          </View>
        </View>
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
  card: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 4,
  },
  hintText: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
  selectorGroup: {
    marginBottom: 12,
  },
  selectorLabel: {
    fontSize: 13,
    marginBottom: 6,
  },
  chipRow: {
    flexDirection: "row",
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 6,
  },
  chipText: {
    fontSize: 12,
    fontWeight: "600",
  },
  previewLabel: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 8,
  },
  previewBox: {
    height: 180,
    borderRadius: 12,
    padding: 10,
  },
  flexItem: {
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  itemText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 13,
  },
  flexGrowRow: {
    flexDirection: "row",
    height: 50,
    borderRadius: 10,
    padding: 4,
    gap: 4,
  },
  growBox: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
