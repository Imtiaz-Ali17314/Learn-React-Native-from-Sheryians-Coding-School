import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const headerBg = isDark ? "#12121a" : "#2563eb";
  const headerTint = "#ffffff";

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: headerBg,
        },
        headerTintColor: headerTint,
        headerTitleStyle: {
          fontWeight: "700",
        },
        headerBackTitle: "Back",
      }}
    >
      {/* Root Tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Topics Stack Screens */}
      <Stack.Screen
        name="topics/fundamentals"
        options={{ title: "Topic 1: Fundamentals" }}
      />
      <Stack.Screen
        name="topics/styling"
        options={{ title: "Topic 2: Styling & Flexbox" }}
      />
      <Stack.Screen
        name="topics/scrollview"
        options={{ title: "Topic 3: ScrollView" }}
      />
      <Stack.Screen
        name="topics/flatlist"
        options={{ title: "Topic 4: FlatList" }}
      />
      <Stack.Screen
        name="topics/user-input"
        options={{ title: "Topic 5: User Input" }}
      />
      <Stack.Screen
        name="topics/stack-navigation"
        options={{ title: "Topic 6: Stack Navigation" }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{ title: "Item Detail (Stack Demo)" }}
      />
    </Stack>
  );
}
