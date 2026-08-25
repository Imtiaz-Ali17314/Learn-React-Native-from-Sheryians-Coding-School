import TopicCard from "@/components/TopicCard";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const insets = useSafeAreaInsets();
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  const colors = {
    background: isDarkMode ? "#121212" : "#f5f5f5",
    headerBg: isDarkMode ? "#1a1a2e" : "#6200ee",
    headerText: "#ffffff",
    subText: isDarkMode ? "#b0b0b0" : "#e0d5ff",
    text: isDarkMode ? "#ffffff" : "#000000",
    textSecondary: isDarkMode ? "#b0b0b0" : "#666666",
    red: "#ff4444",
    green: isDarkMode ? "#4caf50" : "green",
    blue: isDarkMode ? "#64b5f6" : "blue",
    buttonBlue: isDarkMode ? "#4a6fa5" : "blue",
    buttonGreen: isDarkMode ? "#2e7d32" : "green",
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            padding: 20,
            backgroundColor: colors.headerBg,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: colors.headerText,
            }}
          >
            React Native Learning
          </Text>
          <Text style={{ color: colors.subText, marginTop: 4 }}>
            {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Text>
        </View>

        {/* 1. Text Component */}
        <TopicCard title="Text Component" isDarkMode={isDarkMode}>
          <Text style={{ color: colors.text }}>Hello World</Text>
          <Text style={{ fontWeight: "bold", color: colors.text }}>
            Bold Text
          </Text>
          <Text style={{ fontStyle: "italic", color: colors.textSecondary }}>
            Italic Text
          </Text>
        </TopicCard>

        {/* 2. View Component */}
        <TopicCard title="View Component" isDarkMode={isDarkMode}>
          <View style={styles.viewContainer}>
            <View style={[styles.viewItem, { backgroundColor: colors.red }]} />
            <View
              style={[styles.viewItem, { backgroundColor: colors.green }]}
            />
            <View style={[styles.viewItem, { backgroundColor: colors.blue }]} />
          </View>
          <Text style={{ marginTop: 5, color: colors.textSecondary }}>
            View is a container
          </Text>
        </TopicCard>

        {/* 3. Image Component */}
        <TopicCard title="Image Component" isDarkMode={isDarkMode}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1519086588705-c935fdedcc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDM0MTR8MHwxfHNlYXJjaHwyfHxhZXN0aGV0aWMlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzg3NjUwNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            }}
            style={styles.image}
          />
        </TopicCard>

        {/* 4. Button Component */}
        <TopicCard title="Button Component" isDarkMode={isDarkMode}>
          <Button
            title="Click Me"
            onPress={() => Alert.alert("Button Pressed!")}
            color={colors.headerBg}
          />
        </TopicCard>

        {/* 5. Touchable Component */}
        <TopicCard title="Touchable Component" isDarkMode={isDarkMode}>
          <TouchableHighlight
            style={[styles.button, { backgroundColor: colors.buttonBlue }]}
            onPress={() => Alert.alert("Touchable Pressed!")}
            underlayColor={isDarkMode ? "#1a237e" : "darkblue"}
          >
            <Text style={{ color: "white" }}>Press Me</Text>
          </TouchableHighlight>
        </TopicCard>

        {/* 6. Pressable Component */}
        <TopicCard title="Pressable Component" isDarkMode={isDarkMode}>
          <Pressable
            style={[styles.button, { backgroundColor: colors.buttonGreen }]}
            onPress={() => Alert.alert("Pressable Pressed!")}
          >
            <Text style={{ color: "white" }}>Press Me</Text>
          </Pressable>
        </TopicCard>

        {/* 7. Alert API */}
        <TopicCard title="Alert API" isDarkMode={isDarkMode}>
          <Button
            title="Show Alert"
            onPress={() => Alert.alert("Alert Title", "This is an alert!")}
            color={colors.headerBg}
          />
        </TopicCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    gap: 5,
  },
  viewItem: {
    width: 50,
    height: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
});

export default index;
