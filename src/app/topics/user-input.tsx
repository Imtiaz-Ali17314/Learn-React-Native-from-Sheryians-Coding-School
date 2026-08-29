import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardTypeOptions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";

export default function UserInputTopicScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [keyboardType, setKeyboardType] =
    useState<KeyboardTypeOptions>("default");
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const colors = {
    bg: isDark ? "#0f0f17" : "#f8fafc",
    cardBg: isDark ? "#1e1e2d" : "#ffffff",
    cardBorder: isDark ? "#2d2d3f" : "#e2e8f0",
    text: isDark ? "#f8fafc" : "#0f172a",
    subText: isDark ? "#94a3b8" : "#64748b",
    inputBg: isDark ? "#12121a" : "#f1f5f9",
    inputBorder: isDark ? "#2d2d3f" : "#cbd5e1",
    chipBg: isDark ? "#2a2a3c" : "#e2e8f0",
    chipActiveBg: "#2563eb",
    chipText: isDark ? "#94a3b8" : "#475569",
    chipActiveText: "#ffffff",
    submitBtn: "#2563eb",
    outputBg: isDark ? "#1a1a28" : "#eff6ff",
    outputBorder: isDark ? "#2563eb" : "#bfdbfe",
  };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Input Required", "Please fill in Name and Email!");
      return;
    }
    Keyboard.dismiss();
    setSubmittedData({
      name,
      email,
      phone,
      bio,
      submittedAt: new Date().toLocaleTimeString(),
    });
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.bg }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        onTouchStart={Keyboard.dismiss}
      >
        <SectionHeader
          title="Topic 5: Handling User Input"
          description="Learn state binding with TextInput, single/multiline modes, keyboard types, and form submit handling."
          badge="Interactive Form"
        />

        {/* Keyboard Type Selector */}
        <View
          style={[
            styles.card,
            { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            ⌨️ Test Keyboard Types
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
            {[
              { label: "Default", type: "default" },
              { label: "Email", type: "email-address" },
              { label: "Numeric", type: "numeric" },
              { label: "Phone", type: "phone-pad" },
            ].map((k) => {
              const isActive = keyboardType === k.type;
              return (
                <Pressable
                  key={k.type}
                  onPress={() => setKeyboardType(k.type as KeyboardTypeOptions)}
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
                    {k.label}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Input Form Fields */}
        <View
          style={[
            styles.card,
            { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            📝 User Registration Form
          </Text>

          {/* Single Line Name Input */}
          <Text style={[styles.fieldLabel, { color: colors.subText }]}>
            Full Name (Single Line Input):
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
            placeholder="e.g. Ali Ahmed"
            placeholderTextColor={colors.subText}
            value={name}
            onChangeText={setName}
            returnKeyType="next"
          />

          {/* Email Input */}
          <Text style={[styles.fieldLabel, { color: colors.subText }]}>
            Email Address (Email Keyboard):
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
            placeholder="e.g. ali@example.com"
            placeholderTextColor={colors.subText}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
          />

          {/* Phone Input */}
          <Text style={[styles.fieldLabel, { color: colors.subText }]}>
            Phone Number (Dynamic Active Keyboard: {keyboardType}):
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
            placeholder="e.g. +92 300 1234567"
            placeholderTextColor={colors.subText}
            value={phone}
            onChangeText={setPhone}
            keyboardType={keyboardType}
            returnKeyType="next"
          />

          {/* Multiline Bio Input */}
          <Text style={[styles.fieldLabel, { color: colors.subText }]}>
            Short Bio (Multiline Input - 4 lines):
          </Text>
          <TextInput
            style={[
              styles.multilineInput,
              {
                backgroundColor: colors.inputBg,
                borderColor: colors.inputBorder,
                color: colors.text,
              },
            ]}
            placeholder="Tell us about yourself..."
            placeholderTextColor={colors.subText}
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          {/* Submit Button */}
          <Pressable
            onPress={handleSubmit}
            style={({ pressed }) => [
              styles.submitBtn,
              {
                backgroundColor: colors.submitBtn,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Text style={styles.submitBtnText}>Submit Input Form</Text>
          </Pressable>
        </View>

        {/* Submitted Data Preview */}
        {submittedData && (
          <View
            style={[
              styles.outputCard,
              {
                backgroundColor: colors.outputBg,
                borderColor: colors.outputBorder,
              },
            ]}
          >
            <Text style={[styles.outputTitle, { color: colors.text }]}>
              🎉 Form Submitted Successfully!
            </Text>
            <Text style={[styles.outputText, { color: colors.text }]}>
              Name: {submittedData.name}
            </Text>
            <Text style={[styles.outputText, { color: colors.text }]}>
              Email: {submittedData.email}
            </Text>
            <Text style={[styles.outputText, { color: colors.text }]}>
              Phone: {submittedData.phone || "N/A"}
            </Text>
            <Text style={[styles.outputText, { color: colors.text }]}>
              Bio: {submittedData.bio || "N/A"}
            </Text>
            <Text style={[styles.outputTime, { color: colors.subText }]}>
              Timestamp: {submittedData.submittedAt}
            </Text>
          </View>
        )}
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
    marginBottom: 10,
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
  fieldLabel: {
    fontSize: 13,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  multilineInput: {
    minHeight: 90,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  submitBtn: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  submitBtnText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  outputCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  outputTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  outputText: {
    fontSize: 14,
    marginBottom: 4,
  },
  outputTime: {
    fontSize: 11,
    marginTop: 8,
  },
});
