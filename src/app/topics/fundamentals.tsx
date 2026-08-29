import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useColorScheme,
} from "react-native";

export default function FundamentalsTopicScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const [pressCount, setPressCount] = useState(0);
  const [lastAction, setLastAction] = useState<string>("None");

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    cardBg: isDark ? "#1e1e2d" : "#ffffff",
    cardBorder: isDark ? "#2d2d3f" : "#e2e8f0",
    text: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    redBox: "#ef4444",
    greenBox: "#22c55e",
    blueBox: "#3b82f6",
    touchableBg: isDark ? "#3b82f6" : "#2563eb",
    pressableBg: isDark ? "#10b981" : "#059669",
    actionBox: isDark ? "#1a1a28" : "#f1f5f9",
  };

  const handleAlertDemo = () => {
    setLastAction("Triggered Alert API");
    Alert.alert(
      "Alert API Demo",
      "React Native Alert component triggered successfully!",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => setLastAction("Clicked OK on Alert") },
      ]
    );
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SectionHeader
        title="Topic 1: Fundamental Components"
        description="Learn and experiment with Text, View, Image, Button, Touchables, Pressable, and Alert."
        badge="Core Basics"
      />

      {/* 1. Text Component */}
      <View
        style={[
          styles.demoCard,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          1. Text Component
        </Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          Standard typography: Hello World!
        </Text>
        <Text style={[styles.boldText, { color: colors.text }]}>
          Bold Styling: fontWeight: "700"
        </Text>
        <Text style={[styles.italicText, { color: colors.subText }]}>
          Italic Styling: fontStyle: "italic"
        </Text>
      </View>

      {/* 2. View Component */}
      <View
        style={[
          styles.demoCard,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          2. View Component
        </Text>
        <Text style={[styles.hintText, { color: colors.subText }]}>
          View is the core layout container equivalent to a div.
        </Text>
        <View style={styles.viewRow}>
          <View style={[styles.colorBox, { backgroundColor: colors.redBox }]} />
          <View style={[styles.colorBox, { backgroundColor: colors.greenBox }]} />
          <View style={[styles.colorBox, { backgroundColor: colors.blueBox }]} />
        </View>
      </View>

      {/* 3. Image Component */}
      <View
        style={[
          styles.demoCard,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          3. Image Component
        </Text>
        <View style={styles.imageRow}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
            }}
            style={styles.image}
          />
          <View style={styles.imageDetails}>
            <Text style={[styles.bodyText, { color: colors.text }]}>
              Remote Image URI Loading
            </Text>
            <Text style={[styles.hintText, { color: colors.subText }]}>
              Styles: borderRadius: 12, resizeMode: "cover"
            </Text>
          </View>
        </View>
      </View>

      {/* 4. Button Component */}
      <View
        style={[
          styles.demoCard,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          4. Button Component
        </Text>
        <Text style={[styles.hintText, { color: colors.subText }]}>
          Built-in basic button with native styling.
        </Text>
        <Button
          title={`Click Me (Count: ${pressCount})`}
          onPress={() => {
            setPressCount((c) => c + 1);
            setLastAction("Pressed Native Button");
          }}
          color="#2563eb"
        />
      </View>

      {/* 5. TouchableHighlight vs Pressable */}
      <View
        style={[
          styles.demoCard,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          5. TouchableHighlight vs Pressable
        </Text>
        <TouchableHighlight
          style={[styles.customBtn, { backgroundColor: colors.touchableBg }]}
          underlayColor="#1d4ed8"
          onPress={() => {
            setPressCount((c) => c + 1);
            setLastAction("Pressed TouchableHighlight");
          }}
        >
          <Text style={styles.btnText}>TouchableHighlight (Underlay Color)</Text>
        </TouchableHighlight>

        <Pressable
          style={({ pressed }) => [
            styles.customBtn,
            {
              backgroundColor: colors.pressableBg,
              opacity: pressed ? 0.7 : 1,
              marginTop: 10,
            },
          ]}
          onPress={() => {
            setPressCount((c) => c + 1);
            setLastAction("Pressed Pressable");
          }}
        >
          <Text style={styles.btnText}>Pressable (Flexible State Handling)</Text>
        </Pressable>
      </View>

      {/* 6. Alert API */}
      <View
        style={[
          styles.demoCard,
          { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          6. Alert API
        </Text>
        <Button title="Trigger Alert API" onPress={handleAlertDemo} color="#7c3aed" />
      </View>

      {/* Interactive Status Footer */}
      <View style={[styles.statusCard, { backgroundColor: colors.actionBox }]}>
        <Text style={[styles.statusTitle, { color: colors.text }]}>
          ⚡ Interactive State
        </Text>
        <Text style={[styles.statusBody, { color: colors.subText }]}>
          Total Presses: <Text style={{ fontWeight: "700", color: colors.text }}>{pressCount}</Text>
        </Text>
        <Text style={[styles.statusBody, { color: colors.subText }]}>
          Last Action: <Text style={{ fontWeight: "700", color: colors.text }}>{lastAction}</Text>
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
  demoCard: {
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
    fontSize: 14,
    marginBottom: 4,
  },
  boldText: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },
  italicText: {
    fontSize: 14,
    fontStyle: "italic",
  },
  hintText: {
    fontSize: 12,
    marginBottom: 10,
  },
  viewRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  colorBox: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  imageDetails: {
    flex: 1,
  },
  customBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  statusCard: {
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  statusTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  statusBody: {
    fontSize: 13,
    marginTop: 2,
  },
});
