import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const index = () => {
  return (
    <View>
      <Text>Hello World</Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1519086588705-c935fdedcc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDM0MTR8MHwxfHNlYXJjaHwyfHxhZXN0aGV0aWMlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzg3NjUwNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        }}
        style={{ width: 200, height: 200 }}
      />

      {/* <Button title="Press Me" /> */}

      <TouchableHighlight
        style={{ backgroundColor: "green", padding: 10, borderRadius: 5 }}
        onPress={() => {
          Alert.alert("button pressed!!!");
        }}
      >
        <Text>Press Me</Text>
      </TouchableHighlight>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
