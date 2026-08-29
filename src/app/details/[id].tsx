import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

export default function ItemDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const { id, title, category, details } = params;

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    cardBg: isDark ? "#1e1e2d" : "#ffffff",
    cardBorder: isDark ? "#2d2d3f" : "#e2e8f0",
    text: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    paramBg: isDark ? "#1a1a28" : "#f1f5f9",
    paramText: isDark ? "#60a5fa" : "#2563eb",
    backBtn: "#2563eb",
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.bg }]}
      contentContainerStyle={styles.content}
    >
      <View
        style={[
          styles.card,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={styles.headerIcon}>📌</Text>
        <Text style={[styles.title, { color: colors.text }]}>
          {title || `Detail Screen for ${id}`}
        </Text>
        <Text style={[styles.category, { color: colors.subText }]}>
          Category: {category || "Standard Route"}
        </Text>

        <View style={[styles.paramBox, { backgroundColor: colors.paramBg }]}>
          <Text style={[styles.paramTitle, { color: colors.text }]}>
            📥 Received Dynamic Route Parameters (useLocalSearchParams):
          </Text>
          <Text style={[styles.paramText, { color: colors.paramText }]}>
            ID: {id}
          </Text>
          <Text style={[styles.paramText, { color: colors.paramText }]}>
            Title: {title}
          </Text>
          <Text style={[styles.paramText, { color: colors.paramText }]}>
            Category: {category}
          </Text>
        </View>

        <Text style={[styles.sectionHeading, { color: colors.text }]}>
          Detailed Description:
        </Text>
        <Text style={[styles.descriptionText, { color: colors.subText }]}>
          {details ||
            "This screen demonstrates dynamic route parameters received from the parent Stack screen using the useLocalSearchParams hook in Expo Router."}
        </Text>

        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.backBtn,
            { backgroundColor: colors.backBtn, opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <Text style={styles.backBtnText}>⬅️ Pop Screen (router.back())</Text>
        </Pressable>
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
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
  },
  headerIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
  },
  category: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: "600",
  },
  paramBox: {
    padding: 14,
    borderRadius: 12,
    marginVertical: 16,
  },
  paramTitle: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
  },
  paramText: {
    fontSize: 13,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
  },
  backBtn: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  backBtnText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
});
