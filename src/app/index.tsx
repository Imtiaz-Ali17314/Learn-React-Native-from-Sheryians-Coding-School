import TopicCard from "@/components/TopicCard";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const insets = useSafeAreaInsets();
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");

  // Sample data for FlatList
  const sampleData = [
    "🍎 Apple",
    "🍌 Banana",
    "🍇 Grape",
    "🍊 Orange",
    "🍓 Strawberry",
    "🍉 Watermelon",
    "🍑 Peach",
    "🥝 Kiwi",
  ];

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
    inputBg: isDarkMode ? "#2a2a2a" : "#ffffff",
    inputBorder: isDarkMode ? "#444444" : "#cccccc",
    inputText: isDarkMode ? "#ffffff" : "#000000",
    flatListItem: isDarkMode ? "#2a2a2a" : "#f0f0f0",
    cardBg: isDarkMode ? "#1e1e1e" : "#ffffff",
  };

  // FlatList data render component (separate function to avoid nesting warning)
  const renderFlatListItem = ({ item }: { item: string }) => (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: colors.cardBg,
        borderRadius: 4,
        marginVertical: 2,
        marginHorizontal: 4,
      }}
    >
      <Text style={{ color: colors.text }}>{item}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            keyboardShouldPersistTaps="handled"
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
              <Text
                style={{ fontStyle: "italic", color: colors.textSecondary }}
              >
                Italic Text
              </Text>
            </TopicCard>

            {/* 2. View Component */}
            <TopicCard title="View Component" isDarkMode={isDarkMode}>
              <View style={styles.viewContainer}>
                <View
                  style={[styles.viewItem, { backgroundColor: colors.red }]}
                />
                <View
                  style={[styles.viewItem, { backgroundColor: colors.green }]}
                />
                <View
                  style={[styles.viewItem, { backgroundColor: colors.blue }]}
                />
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

            {/* 8. Flex Direction */}
            <TopicCard title="Flex Direction" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                flexDirection: row
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  gap: 5,
                }}
              >
                <View
                  style={{ width: 40, height: 40, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 40, height: 40, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 40, height: 40, backgroundColor: "blue" }}
                />
              </View>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                flexDirection: column (default)
              </Text>
              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  gap: 5,
                }}
              >
                <View
                  style={{ width: 40, height: 30, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 40, height: 30, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 40, height: 30, backgroundColor: "blue" }}
                />
              </View>
            </TopicCard>

            {/* 9. Justify Content */}
            <TopicCard title="Justify Content" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                flex-start (default)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  gap: 5,
                }}
              >
                <View
                  style={{ width: 30, height: 30, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "blue" }}
                />
              </View>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                center
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  gap: 5,
                }}
              >
                <View
                  style={{ width: 30, height: 30, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "blue" }}
                />
              </View>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                space-between
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <View
                  style={{ width: 30, height: 30, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "blue" }}
                />
              </View>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                space-around
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <View
                  style={{ width: 30, height: 30, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "blue" }}
                />
              </View>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                space-evenly
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <View
                  style={{ width: 30, height: 30, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 30, height: 30, backgroundColor: "blue" }}
                />
              </View>
            </TopicCard>

            {/* 10. Align Items */}
            <TopicCard title="Align Items" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                stretch (default)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "stretch",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  height: 80,
                  gap: 5,
                }}
              >
                <View style={{ width: 40, backgroundColor: "red" }} />
                <View style={{ width: 40, backgroundColor: "green" }} />
                <View style={{ width: 40, backgroundColor: "blue" }} />
              </View>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                center
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  height: 80,
                  gap: 5,
                }}
              >
                <View
                  style={{ width: 40, height: 40, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 40, height: 30, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 40, height: 50, backgroundColor: "blue" }}
                />
              </View>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                flex-end
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  height: 80,
                  gap: 5,
                }}
              >
                <View
                  style={{ width: 40, height: 40, backgroundColor: "red" }}
                />
                <View
                  style={{ width: 40, height: 30, backgroundColor: "green" }}
                />
                <View
                  style={{ width: 40, height: 50, backgroundColor: "blue" }}
                />
              </View>
            </TopicCard>

            {/* 11. Align Self */}
            <TopicCard title="Align Self" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                Individual item alignment
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  height: 100,
                  gap: 5,
                }}
              >
                <View
                  style={{ width: 40, height: 40, backgroundColor: "red" }}
                />
                <View
                  style={{
                    width: 40,
                    height: 30,
                    backgroundColor: "green",
                    alignSelf: "center",
                  }}
                />
                <View
                  style={{
                    width: 40,
                    height: 50,
                    backgroundColor: "blue",
                    alignSelf: "flex-end",
                  }}
                />
              </View>
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 5,
                  fontSize: 12,
                }}
              >
                🟢 Green: alignSelf: center | 🔵 Blue: alignSelf: flex-end
              </Text>
            </TopicCard>

            {/* 12. Align Content */}
            <TopicCard title="Align Content" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                alignContent: center (multiple rows)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignContent: "center",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  height: 150,
                  gap: 5,
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <View
                    key={item}
                    style={{
                      width: 40,
                      height: 30,
                      backgroundColor: `hsl(${item * 60}, 70%, 50%)`,
                      borderRadius: 4,
                    }}
                  />
                ))}
              </View>
            </TopicCard>

            {/* 13. Flex Wrap */}
            <TopicCard title="Flex Wrap" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                flexWrap: wrap
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  gap: 8,
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <View
                    key={item}
                    style={{
                      width: 50,
                      height: 35,
                      backgroundColor: `hsl(${item * 36}, 70%, 50%)`,
                      borderRadius: 4,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 10 }}>{item}</Text>
                  </View>
                ))}
              </View>
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 5,
                  fontSize: 12,
                }}
              >
                Items wrap to next line when space runs out
              </Text>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                flexWrap: nowrap (default)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  gap: 5,
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <View
                    key={item}
                    style={{
                      width: 60,
                      height: 30,
                      backgroundColor: `hsl(${item * 60}, 70%, 50%)`,
                      borderRadius: 4,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 10 }}>{item}</Text>
                  </View>
                ))}
              </View>
            </TopicCard>

            {/* 14. Flex Grow */}
            <TopicCard title="Flex Grow" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                flexGrow: 1 (item takes available space)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  height: 60,
                  gap: 5,
                }}
              >
                <View
                  style={{
                    width: 40,
                    backgroundColor: "red",
                    flexGrow: 0,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "green",
                    flexGrow: 1,
                  }}
                />
                <View
                  style={{
                    width: 40,
                    backgroundColor: "blue",
                    flexGrow: 0,
                  }}
                />
              </View>
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 5,
                  fontSize: 12,
                }}
              >
                🟢 Green grows to fill available space
              </Text>

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  marginBottom: 8,
                }}
              >
                flexGrow: 2 vs flexGrow: 1
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.flatListItem,
                  padding: 10,
                  borderRadius: 8,
                  height: 60,
                  gap: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    flexGrow: 1,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "green",
                    flexGrow: 2,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "blue",
                    flexGrow: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 5,
                  fontSize: 12,
                }}
              >
                🟢 Green takes 2x space than others
              </Text>
            </TopicCard>

            {/* 14. FlatList - Fixed with proper implementation */}
            <TopicCard title="FlatList (Grid View)" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                📱 Better performance than ScrollView
              </Text>
              <View
                style={{
                  backgroundColor: colors.flatListItem,
                  borderRadius: 8,
                  padding: 4,
                  maxHeight: 200,
                }}
              >
                <FlatList
                  data={sampleData}
                  renderItem={renderFlatListItem}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
                  numColumns={2}
                  columnWrapperStyle={{
                    justifyContent: "space-between",
                    gap: 4,
                  }}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false} // Disable FlatList scroll to prevent nesting warning
                />
              </View>
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 8,
                  fontSize: 12,
                }}
              >
                💡 Tip: numColumns creates grid layout
              </Text>
            </TopicCard>

            {/* 15. TextInput - Fixed with Keyboard handling */}
            <TopicCard title="TextInput" isDarkMode={isDarkMode}>
              <Text style={{ color: colors.textSecondary, marginBottom: 8 }}>
                ✏️ Single line input
              </Text>
              <TextInput
                placeholder="Type something..."
                placeholderTextColor={colors.textSecondary}
                style={{
                  borderWidth: 1,
                  borderColor: colors.inputBorder,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: colors.inputBg,
                  color: colors.inputText,
                  marginBottom: 8,
                }}
                value={text}
                onChangeText={setText}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
              {text ? (
                <Text style={{ color: colors.text }}>You typed: {text}</Text>
              ) : null}

              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 12,
                  marginBottom: 8,
                }}
              >
                📝 Multi-line input
              </Text>
              <TextInput
                placeholder="Write a long message..."
                placeholderTextColor={colors.textSecondary}
                style={{
                  borderWidth: 1,
                  borderColor: colors.inputBorder,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: colors.inputBg,
                  color: colors.inputText,
                  minHeight: 80,
                  textAlignVertical: "top",
                }}
                value={inputText}
                onChangeText={setInputText}
                multiline
                numberOfLines={4}
                keyboardType="default"
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 8,
                  fontSize: 12,
                }}
              >
                🔑 Keyboard types: default, email, numeric, phone-pad
              </Text>
            </TopicCard>

            {/* Extra space at bottom */}
            <View style={{ height: 40 }} />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};;

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
