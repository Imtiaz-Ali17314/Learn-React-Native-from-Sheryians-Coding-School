import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface TopicCardProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  style?: ViewStyle;
}

const TopicCard = ({ title, children, description, style }: TopicCardProps) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.header}>
        <Text style={styles.title}>📚 {title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>

      <View style={styles.content}>{children}</View>

      <View style={styles.footer}>
        <Text style={styles.badge}>Component</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  content: {
    minHeight: 80,
    paddingVertical: 8,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 8,
    marginTop: 8,
    alignItems: "flex-end",
  },
  badge: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "600",
  },
});

export default TopicCard;
