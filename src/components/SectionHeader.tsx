import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  badge,
}) => {
  const theme = useColorScheme();
  const dark = theme === "dark";

  const colors = {
    title: dark ? "#f8fafc" : "#0f172a",
    description: dark ? "#94a3b8" : "#64748b",
    badgeBg: dark ? "#312e81" : "#e0e7ff",
    badgeText: dark ? "#a5b4fc" : "#4338ca",
    border: dark ? "#1e293b" : "#f1f5f9",
  };

  return (
    <View style={[styles.container, { borderBottomColor: colors.border }]}>
      <View style={styles.titleRow}>
        <Text style={[styles.title, { color: colors.title }]}>{title}</Text>
        {badge && (
          <View style={[styles.badge, { backgroundColor: colors.badgeBg }]}>
            <Text style={[styles.badgeText, { color: colors.badgeText }]}>
              {badge}
            </Text>
          </View>
        )}
      </View>
      {description && (
        <Text style={[styles.description, { color: colors.description }]}>
          {description}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
  },
  description: {
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },
});

export default SectionHeader;
