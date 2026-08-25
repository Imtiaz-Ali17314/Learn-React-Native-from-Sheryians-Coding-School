import TopicCard from "@/components/TopicCard";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
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
      <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        {/* Header */}
        <View
          style={{
            padding: 20,
            backgroundColor: "#6200ee",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
            React Native Learning
          </Text>
        </View>

        {/* 1. Text Component */}
        <TopicCard title="Text Component">
          <Text>Hello World</Text>
          <Text style={{ fontWeight: "bold" }}>Bold Text</Text>
          <Text style={{ fontStyle: "italic" }}>Italic Text</Text>
        </TopicCard>

        {/* 2. View Component */}
        <TopicCard title="View Component">
          <View style={{ flexDirection: "row", gap: 5 }}>
            <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
            <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
            <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
          </View>
          <Text style={{ marginTop: 5 }}>View is a container</Text>
        </TopicCard>

        {/* 3. Image Component */}
        <TopicCard title="Image Component">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1519086588705-c935fdedcc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDM0MTR8MHwxfHNlYXJjaHwyfHxhZXN0aGV0aWMlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzg3NjUwNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
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
            style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
            onPress={() => Alert.alert("Touchable Pressed!")}
            underlayColor="darkblue"
          >
            <Text style={{ color: "white" }}>Press Me</Text>
          </TouchableHighlight>
        </TopicCard>

        {/* 6. Pressable Component */}
        <TopicCard title="Pressable Component">
          <Pressable
            style={{ backgroundColor: "green", padding: 10, borderRadius: 5 }}
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

export default index;
