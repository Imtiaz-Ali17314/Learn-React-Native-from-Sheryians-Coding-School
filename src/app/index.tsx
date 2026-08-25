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
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#c2bfbf",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>React Native Learning</Text>
        </View>

        {/* 1. Text Component */}
        <TopicCard title="Text Component">
          <Text>Hello World</Text>
          <Text style={{ fontWeight: "bold" }}>Bold Text</Text>
          <Text style={{ fontStyle: "italic" }}>Italic Text</Text>
        </TopicCard>

        {/* 2. View Component */}
        <TopicCard title="View Component">
          <View style={styles.viewContainer}>
            <View style={[styles.viewItem, { backgroundColor: "red" }]} />
            <View style={[styles.viewItem, { backgroundColor: "green" }]} />
            <View style={[styles.viewItem, { backgroundColor: "blue" }]} />
          </View>
          <Text style={{ marginTop: 5 }}>View is a container</Text>
        </TopicCard>

        {/* 3. Image Component */}
        <TopicCard title="Image Component">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1519086588705-c935fdedcc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDM0MTR8MHwxfHNlYXJjaHwyfHxhZXN0aGV0aWMlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzg3NjUwNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            }}
            style={styles.image}
          />
        </TopicCard>

        {/* 4. Button Component */}
        <TopicCard title="Button Component">
          <Button
            title="Click Me"
            onPress={() => Alert.alert("Button Pressed!")}
          />
        </TopicCard>

        {/* 5. Touchable Component */}
        <TopicCard title="Touchable Component">
          <TouchableHighlight
            style={[styles.button, { backgroundColor: "blue" }]}
            onPress={() => Alert.alert("Touchable Pressed!")}
            underlayColor="darkblue"
          >
            <Text style={{ color: "white" }}>Press Me</Text>
          </TouchableHighlight>
        </TopicCard>

        {/* 6. Pressable Component */}
        <TopicCard title="Pressable Component">
          <Pressable
            style={[styles.button, { backgroundColor: "green" }]}
            onPress={() => Alert.alert("Pressable Pressed!")}
          >
            <Text style={{ color: "white" }}>Press Me</Text>
          </Pressable>
        </TopicCard>

        {/* 7. Alert API */}
        <TopicCard title="Alert API">
          <Button
            title="Show Alert"
            onPress={() => Alert.alert("Alert Title", "This is an alert!")}
          />
        </TopicCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    padding: 20,
    backgroundColor: "#6200ee",
    marginBottom: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
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
