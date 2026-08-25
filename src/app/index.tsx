import { Button, Image, StyleSheet, Text, View } from "react-native";

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

      <Button title="Press Me" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
