import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScrollViewTopicScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const insets = useSafeAreaInsets();
  const [showIndicator, setShowIndicator] = useState(true);
  const [inputText, setInputText] = useState("");

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    cardBg: isDark ? "#1e1e2d" : "#ffffff",
    cardBorder: isDark ? "#2d2d3f" : "#e2e8f0",
    text: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    chipBg: isDark ? "#2a2a3c" : "#e0e7ff",
    chipText: isDark ? "#a5b4fc" : "#4338ca",
    inputBg: isDark ? "#12121a" : "#f1f5f9",
    inputBorder: isDark ? "#2d2d3f" : "#cbd5e1",
  };

  const sampleItems = Array.from({ length: 15 }, (_, i) => `Scroll Item #${i + 1}`);

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.bg }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          {
            paddingBottom: insets.bottom + 32,
          },
        ]}
        showsVerticalScrollIndicator={showIndicator}
        keyboardShouldPersistTaps="handled"
        onTouchStart={Keyboard.dismiss}
      >
        <SectionHeader
          title="Topic 3: ScrollView & Keyboards"
          description="Explore vertical & horizontal scrolling, scroll indicators, safe areas, and keyboard dismiss gesture handling."
          badge="Scrolling UI"
        />

        {/* Indicator Toggle Control */}
        <View
          style={[
            styles.card,
            { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
          ]}
        >
          <View style={styles.switchRow}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Show Vertical Scroll Indicator
            </Text>
            <Switch
              value={showIndicator}
              onValueChange={setShowIndicator}
              trackColor={{ false: "#767577", true: "#2563eb" }}
            />
          </View>
          <Text style={[styles.hintText, { color: colors.subText }]}>
            showsVerticalScrollIndicator control: {showIndicator ? "ON" : "OFF"}
          </Text>
        </View>

        {/* Horizontal ScrollView Demo */}
        <View
          style={[
            styles.card,
            { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            ↔️ Horizontal ScrollView Demo
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
            contentContainerStyle={styles.horizontalContainer}
          >
            {sampleItems.slice(0, 8).map((item, idx) => (
              <View
                key={idx}
                style={[
                  styles.horizontalCard,
                  { backgroundColor: colors.chipBg },
                ]}
              >
                <Text style={styles.cardEmoji}>🖼️</Text>
                <Text style={[styles.chipText, { color: colors.chipText }]}>
                  {item}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Keyboard Dismiss Test */}
        <View
          style={[
            styles.card,
            { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            ⌨️ Keyboard Dismiss Test
          </Text>
          <Text style={[styles.hintText, { color: colors.subText }]}>
            Tap outside the text input onto the ScrollView to dismiss the keyboard automatically (`Keyboard.dismiss`).
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.inputBg,
                borderColor: colors.inputBorder,
                color: colors.text,
              },
            ]}
            placeholder="Focus here to open keyboard, tap outside to dismiss..."
            placeholderTextColor={colors.subText}
            value={inputText}
            onChangeText={setInputText}
          />
        </View>

        {/* Vertical Scroll List Items */}
        <View
          style={[
            styles.card,
            { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            📜 Vertical Scroll Items List
          </Text>
          {sampleItems.map((item, idx) => (
            <Pressable
              key={idx}
              style={({ pressed }) => [
                styles.listItem,
                {
                  backgroundColor: pressed
                    ? colors.chipBg
                    : colors.inputBg,
                },
              ]}
              onPress={() => Keyboard.dismiss()}
            >
              <Text style={[styles.itemText, { color: colors.text }]}>
                📌 {item}
              </Text>
              <Text style={[styles.hintText, { color: colors.subText }]}>
                Sub-item detail text
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
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
    marginBottom: 6,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hintText: {
    fontSize: 12,
    marginTop: 2,
    lineHeight: 18,
  },
  horizontalScroll: {
    marginTop: 8,
  },
  horizontalContainer: {
    gap: 10,
  },
  horizontalCard: {
    width: 110,
    height: 90,
    borderRadius: 12,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardEmoji: {
    fontSize: 22,
    marginBottom: 4,
  },
  chipText: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    marginTop: 8,
  },
  listItem: {
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  itemText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
