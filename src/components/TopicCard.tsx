import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  useColorScheme,
} from "react-native";

interface TopicCardProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  style?: ViewStyle;
  isDarkMode?: boolean;
}

const TopicCard = ({
  title,
  children,
  description,
  style,
  isDarkMode,
}: TopicCardProps) => {
  const theme = useColorScheme();
  const dark = isDarkMode !== undefined ? isDarkMode : theme === "dark";

  const colors = {
    cardBg: dark ? "#1e1e1e" : "#ffffff",
    border: dark ? "#333333" : "#e0e0e0",
    headerBorder: dark ? "#2a2a2a" : "#f0f0f0",
    title: dark ? "#ffffff" : "#1a1a1a",
    description: dark ? "#b0b0b0" : "#666",
    content: dark ? "#b0b0b0" : "#666",
    footerBorder: dark ? "#2a2a2a" : "#f0f0f0",
    badgeBg: dark ? "#1a3a1a" : "#e8f5e9",
    badgeText: dark ? "#81c784" : "#2e7d32",
    shadow: dark ? "#000000" : "#000000",
  };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.cardBg,
          borderColor: colors.border,
          shadowColor: colors.shadow,
        },
        style,
      ]}
    >
      <View style={[styles.header, { borderBottomColor: colors.headerBorder }]}>
        <Text style={[styles.title, { color: colors.title }]}>📚 {title}</Text>
        {description && (
          <Text style={[styles.description, { color: colors.description }]}>
            {description}
          </Text>
        )}
      </View>

      <View style={styles.content}>{children}</View>

      <View style={[styles.footer, { borderTopColor: colors.footerBorder }]}>
        <Text
          style={[
            styles.badge,
            {
              backgroundColor: colors.badgeBg,
              color: colors.badgeText,
            },
          ]}
        >
          Component
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
    borderWidth: 1,
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    minHeight: 80,
    paddingVertical: 8,
  },
  footer: {
    borderTopWidth: 1,
    paddingTop: 8,
    marginTop: 8,
    alignItems: "flex-end",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "600",
  },
});

export default TopicCard;
