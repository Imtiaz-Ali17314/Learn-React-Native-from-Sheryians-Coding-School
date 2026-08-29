import SectionHeader from "@/components/SectionHeader";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

interface DemoItem {
  id: string;
  title: string;
  category: string;
  badgeColor: string;
  details: string;
}

const DEMO_ITEMS: DemoItem[] = [
  {
    id: "react-native-intro",
    title: "React Native Overview",
    category: "Architecture",
    badgeColor: "#2563eb",
    details: "Native bridges, JavaScript engine (Hermes), and cross-platform UI rendering.",
  },
  {
    id: "expo-router-v57",
    title: "Expo Router File-based Routing",
    category: "Navigation",
    badgeColor: "#7c3aed",
    details: "Directory structure mapping directly to screen stacks and tab layouts.",
  },
  {
    id: "state-management",
    title: "State & Data Flow",
    category: "React Hooks",
    badgeColor: "#059669",
    details: "Unidirectional data flow using useState, useEffect, and React context.",
  },
];

export default function StackNavigationTopicScreen() {
  const router = useRouter();
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    cardBg: isDark ? "#1e1e2d" : "#ffffff",
    cardBorder: isDark ? "#2d2d3f" : "#e2e8f0",
    text: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    itemBg: isDark ? "#1a1a28" : "#f1f5f9",
    btnBg: "#2563eb",
  };

  const handleNavigateToDetail = (item: DemoItem) => {
    router.push({
      pathname: "/details/[id]",
      params: {
        id: item.id,
        title: item.title,
        category: item.category,
        details: item.details,
      },
    });
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SectionHeader
        title="Topic 6: Stack Navigation"
        description="Learn screen stack hierarchy, route pushing, back buttons, dynamic route parameters, and header customization."
        badge="Stack Router"
      />

      {/* Concept Explanation Card */}
      <View
        style={[
          styles.card,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          📚 Stack Navigation Concepts
        </Text>
        <Text style={[styles.bodyText, { color: colors.subText }]}>
          1. <Text style={{ fontWeight: "700", color: colors.text }}>Stack Push</Text>: Naye screen ko stack k upar push karta hai with back gesture support.
        </Text>
        <Text style={[styles.bodyText, { color: colors.subText }]}>
          2. <Text style={{ fontWeight: "700", color: colors.text }}>Dynamic Parameters</Text>: {"router.push({ pathname: '/details/[id]', params: {...} })"} se parameters pass hotay hain.
        </Text>
        <Text style={[styles.bodyText, { color: colors.subText }]}>
          3. <Text style={{ fontWeight: "700", color: colors.text }}>Stack Layout</Text>: `src/app/_layout.tsx` file root stack headers aur screen options define karti hai.
        </Text>
      </View>

      {/* Interactive Stack Navigation Push Demo */}
      <Text style={[styles.sectionHeading, { color: colors.text }]}>
        👉 Tap an Item to Push Dynamic Route (/details/[id])
      </Text>

      {DEMO_ITEMS.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => handleNavigateToDetail(item)}
          style={({ pressed }) => [
            styles.itemCard,
            {
              backgroundColor: colors.cardBg,
              borderColor: colors.cardBorder,
              opacity: pressed ? 0.8 : 1,
              transform: [{ scale: pressed ? 0.98 : 1 }],
            },
          ]}
        >
          <View style={styles.itemHeader}>
            <Text style={[styles.itemTitle, { color: colors.text }]}>
              {item.title}
            </Text>
            <View style={[styles.badge, { backgroundColor: item.badgeColor }]}>
              <Text style={styles.badgeText}>{item.category}</Text>
            </View>
          </View>

          <Text style={[styles.itemSub, { color: colors.subText }]}>
            ID: {item.id}
          </Text>

          <View style={styles.pushActionRow}>
            <Text style={[styles.pushText, { color: colors.btnBg }]}>
              Push Screen ➔
            </Text>
          </View>
        </Pressable>
      ))}
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
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 6,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },
  itemCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "700",
  },
  itemSub: {
    fontSize: 12,
    marginTop: 4,
  },
  pushActionRow: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  pushText: {
    fontSize: 13,
    fontWeight: "700",
  },
});
