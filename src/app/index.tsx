// app/index.tsx
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

  const renderFlatListItem = ({ item }: { item: string }) => (
    <View style={[styles.flatListItem, { backgroundColor: colors.cardBg }]}>
      <Text style={{ color: colors.text }}>{item}</Text>
    </View>
  );

  const renderColorBox = (
    color: string,
    width: number = 40,
    height: number = 40,
  ) => <View style={{ width, height, backgroundColor: color }} />;

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={[
          styles.safeArea,
          {
            backgroundColor: colors.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <ScrollView
          style={[styles.scrollView, { backgroundColor: colors.background }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          // ScrollView ke ander tap karne par keyboard dismiss ho
          onTouchStart={Keyboard.dismiss}
        >
          {/* Header */}
          <View style={[styles.header, { backgroundColor: colors.headerBg }]}>
            <Text style={styles.headerText}>React Native Learning</Text>
            <Text style={[styles.subText, { color: colors.subText }]}>
              {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </Text>
          </View>

          {/* 1. Text Component */}
          <TopicCard title="Text Component" isDarkMode={isDarkMode}>
            <Text style={{ color: colors.text }}>Hello World</Text>
            <Text style={[styles.boldText, { color: colors.text }]}>
              Bold Text
            </Text>
            <Text style={[styles.italicText, { color: colors.textSecondary }]}>
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
            <Text style={[styles.hintText, { color: colors.textSecondary }]}>
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
              <Text style={styles.buttonText}>Press Me</Text>
            </TouchableHighlight>
          </TopicCard>

          {/* 6. Pressable Component */}
          <TopicCard title="Pressable Component" isDarkMode={isDarkMode}>
            <Pressable
              style={[styles.button, { backgroundColor: colors.buttonGreen }]}
              onPress={() => Alert.alert("Pressable Pressed!")}
            >
              <Text style={styles.buttonText}>Press Me</Text>
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
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              flexDirection: row
            </Text>
            <View
              style={[
                styles.flexRowContainer,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <View style={[styles.box, { backgroundColor: "red" }]} />
              <View style={[styles.box, { backgroundColor: "green" }]} />
              <View style={[styles.box, { backgroundColor: "blue" }]} />
            </View>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              flexDirection: column (default)
            </Text>
            <View
              style={[
                styles.flexColumnContainer,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <View style={[styles.smallBox, { backgroundColor: "red" }]} />
              <View style={[styles.smallBox, { backgroundColor: "green" }]} />
              <View style={[styles.smallBox, { backgroundColor: "blue" }]} />
            </View>
          </TopicCard>

          {/* 9. Justify Content */}
          <TopicCard title="Justify Content" isDarkMode={isDarkMode}>
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              flex-start (default)
            </Text>
            <View
              style={[
                styles.justifyStart,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              {renderColorBox("red", 30, 30)}
              {renderColorBox("green", 30, 30)}
              {renderColorBox("blue", 30, 30)}
            </View>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              center
            </Text>
            <View
              style={[
                styles.justifyCenter,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              {renderColorBox("red", 30, 30)}
              {renderColorBox("green", 30, 30)}
              {renderColorBox("blue", 30, 30)}
            </View>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              space-between
            </Text>
            <View
              style={[
                styles.justifyBetween,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              {renderColorBox("red", 30, 30)}
              {renderColorBox("green", 30, 30)}
              {renderColorBox("blue", 30, 30)}
            </View>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              space-around
            </Text>
            <View
              style={[
                styles.justifyAround,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              {renderColorBox("red", 30, 30)}
              {renderColorBox("green", 30, 30)}
              {renderColorBox("blue", 30, 30)}
            </View>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              space-evenly
            </Text>
            <View
              style={[
                styles.justifyEvenly,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              {renderColorBox("red", 30, 30)}
              {renderColorBox("green", 30, 30)}
              {renderColorBox("blue", 30, 30)}
            </View>
          </TopicCard>

          {/* 10. Align Items */}
          <TopicCard title="Align Items" isDarkMode={isDarkMode}>
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              stretch (default)
            </Text>
            <View
              style={[
                styles.alignStretch,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <View style={{ width: 40, backgroundColor: "red" }} />
              <View style={{ width: 40, backgroundColor: "green" }} />
              <View style={{ width: 40, backgroundColor: "blue" }} />
            </View>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              center
            </Text>
            <View
              style={[
                styles.alignCenter,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <View style={{ width: 40, height: 40, backgroundColor: "red" }} />
              <View
                style={{ width: 40, height: 30, backgroundColor: "green" }}
              />
              <View
                style={{ width: 40, height: 50, backgroundColor: "blue" }}
              />
            </View>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              flex-end
            </Text>
            <View
              style={[
                styles.alignEnd,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <View style={{ width: 40, height: 40, backgroundColor: "red" }} />
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
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              Individual item alignment
            </Text>
            <View
              style={[
                styles.alignSelfContainer,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <View style={{ width: 40, height: 40, backgroundColor: "red" }} />
              <View
                style={[styles.alignSelfCenter, { backgroundColor: "green" }]}
              />
              <View
                style={[styles.alignSelfEnd, { backgroundColor: "blue" }]}
              />
            </View>
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              🟢 Green: center | 🔵 Blue: flex-end
            </Text>
          </TopicCard>

          {/* 12. Align Content */}
          <TopicCard title="Align Content" isDarkMode={isDarkMode}>
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              alignContent: center (multiple rows)
            </Text>
            <View
              style={[
                styles.alignContentContainer,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <View
                  key={item}
                  style={[
                    styles.alignContentItem,
                    { backgroundColor: `hsl(${item * 60}, 70%, 50%)` },
                  ]}
                />
              ))}
            </View>
          </TopicCard>

          {/* 13. Flex Wrap */}
          <TopicCard title="Flex Wrap" isDarkMode={isDarkMode}>
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              flexWrap: wrap
            </Text>
            <View
              style={[
                styles.flexWrapContainer,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <View
                  key={item}
                  style={[
                    styles.wrapItem,
                    { backgroundColor: `hsl(${item * 36}, 70%, 50%)` },
                  ]}
                >
                  <Text style={styles.wrapItemText}>{item}</Text>
                </View>
              ))}
            </View>
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              Items wrap to next line when space runs out
            </Text>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              flexWrap: nowrap (default)
            </Text>
            <View
              style={[
                styles.flexNoWrapContainer,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <View
                  key={item}
                  style={[
                    styles.nowrapItem,
                    { backgroundColor: `hsl(${item * 60}, 70%, 50%)` },
                  ]}
                >
                  <Text style={styles.wrapItemText}>{item}</Text>
                </View>
              ))}
            </View>
          </TopicCard>

          {/* 14. Flex Grow */}
          <TopicCard title="Flex Grow" isDarkMode={isDarkMode}>
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              flexGrow: 1 (item takes available space)
            </Text>
            <View
              style={[
                styles.flexGrowContainer,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <View style={[styles.flexGrowZero, { backgroundColor: "red" }]} />
              <View
                style={[styles.flexGrowOne, { backgroundColor: "green" }]}
              />
              <View
                style={[styles.flexGrowZero, { backgroundColor: "blue" }]}
              />
            </View>
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              🟢 Green grows to fill available space
            </Text>

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              flexGrow: 2 vs flexGrow: 1
            </Text>
            <View
              style={[
                styles.flexGrowContainer,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <View style={[styles.flexGrowOne, { backgroundColor: "red" }]} />
              <View
                style={[styles.flexGrowTwo, { backgroundColor: "green" }]}
              />
              <View style={[styles.flexGrowOne, { backgroundColor: "blue" }]} />
            </View>
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              🟢 Green takes 2x space than others
            </Text>
          </TopicCard>

          {/* 15. FlatList */}
          <TopicCard title="FlatList (Grid View)" isDarkMode={isDarkMode}>
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              📱 Better performance than ScrollView
            </Text>
            <View
              style={[
                styles.flatListWrapper,
                { backgroundColor: colors.flatListItem },
              ]}
            >
              <FlatList
                data={sampleData}
                renderItem={renderFlatListItem}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              💡 Tip: numColumns creates grid layout
            </Text>
          </TopicCard>

          {/* 16. TextInput */}
          <TopicCard title="TextInput" isDarkMode={isDarkMode}>
            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              ✏️ Single line input
            </Text>
            <TextInput
              placeholder="Type something..."
              placeholderTextColor={colors.textSecondary}
              style={[
                styles.input,
                {
                  borderColor: colors.inputBorder,
                  backgroundColor: colors.inputBg,
                  color: colors.inputText,
                },
              ]}
              value={text}
              onChangeText={setText}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
            {text && (
              <Text style={{ color: colors.text }}>You typed: {text}</Text>
            )}

            <Text
              style={[styles.sectionLabel, { color: colors.textSecondary }]}
            >
              📝 Multi-line input
            </Text>
            <TextInput
              placeholder="Write a long message..."
              placeholderTextColor={colors.textSecondary}
              style={[
                styles.multilineInput,
                {
                  borderColor: colors.inputBorder,
                  backgroundColor: colors.inputBg,
                  color: colors.inputText,
                },
              ]}
              value={inputText}
              onChangeText={setInputText}
              multiline
              numberOfLines={4}
              keyboardType="default"
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              🔑 Keyboard types: default, email, numeric, phone-pad
            </Text>
          </TopicCard>

          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },

  // Header Styles
  header: {
    padding: 20,
    marginBottom: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subText: {
    marginTop: 4,
  },

  // Text Styles
  boldText: {
    fontWeight: "bold",
  },
  italicText: {
    fontStyle: "italic",
  },
  hintText: {
    marginTop: 5,
  },
  sectionLabel: {
    marginBottom: 8,
  },
  tipText: {
    marginTop: 5,
    fontSize: 12,
  },

  // View Component Styles
  viewContainer: {
    flexDirection: "row",
    gap: 5,
  },
  viewItem: {
    width: 50,
    height: 50,
  },

  // Image Styles
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },

  // Button Styles
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },

  // Flex Layout Styles
  flexRowContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    gap: 5,
  },
  flexColumnContainer: {
    flexDirection: "column",
    padding: 10,
    borderRadius: 8,
    gap: 5,
  },
  box: {
    width: 40,
    height: 40,
  },
  smallBox: {
    width: 40,
    height: 30,
  },

  // Justify Content Styles
  justifyStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 8,
    gap: 5,
  },
  justifyCenter: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    gap: 5,
  },
  justifyBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 8,
  },
  justifyAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderRadius: 8,
  },
  justifyEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    borderRadius: 8,
  },

  // Align Items Styles
  alignStretch: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 10,
    borderRadius: 8,
    height: 80,
    gap: 5,
  },
  alignCenter: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    height: 80,
    gap: 5,
  },
  alignEnd: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
    borderRadius: 8,
    height: 80,
    gap: 5,
  },

  // Align Self Styles
  alignSelfContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    height: 100,
    gap: 5,
  },
  alignSelfCenter: {
    width: 40,
    height: 30,
    alignSelf: "center",
  },
  alignSelfEnd: {
    width: 40,
    height: 50,
    alignSelf: "flex-end",
  },

  // Align Content Styles
  alignContentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    padding: 10,
    borderRadius: 8,
    height: 150,
    gap: 5,
  },
  alignContentItem: {
    width: 40,
    height: 30,
    borderRadius: 4,
  },

  // Flex Wrap Styles
  flexWrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 8,
    gap: 8,
  },
  wrapItem: {
    width: 50,
    height: 35,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapItemText: {
    color: "white",
    fontSize: 10,
  },
  flexNoWrapContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10,
    borderRadius: 8,
    gap: 5,
  },
  nowrapItem: {
    width: 60,
    height: 30,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  // Flex Grow Styles
  flexGrowContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    height: 60,
    gap: 5,
  },
  flexGrowZero: {
    width: 40,
    flexGrow: 0,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  flexGrowTwo: {
    flexGrow: 2,
  },

  // FlatList Styles
  flatListWrapper: {
    borderRadius: 8,
    padding: 4,
    maxHeight: 200,
  },
  flatListItem: {
    flex: 1,
    padding: 10,
    borderRadius: 4,
    marginVertical: 2,
    marginHorizontal: 4,
  },
  separator: {
    height: 4,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 4,
  },

  // TextInput Styles
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  multilineInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    minHeight: 80,
    textAlignVertical: "top",
  },

  // Spacing
  bottomSpacing: {
    height: 40,
  },
});

export default index;
