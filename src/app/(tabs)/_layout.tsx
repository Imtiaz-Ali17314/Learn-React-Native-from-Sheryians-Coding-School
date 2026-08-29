import { Tabs } from "expo-router";
import { StyleSheet, Text, View, useColorScheme } from "react-native";

function TabBarIcon({ icon, focused }: { icon: string; focused: boolean }) {
  return (
    <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
      <Text style={{ fontSize: 18 }}>{icon}</Text>
    </View>
  );
}

export default function TabLayout() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    tabBarBg: isDark ? "#12121a" : "#ffffff",
    tabBarBorder: isDark ? "#222233" : "#e2e8f0",
    activeTint: isDark ? "#60a5fa" : "#2563eb",
    inactiveTint: isDark ? "#64748b" : "#94a3b8",
    headerBg: isDark ? "#1a1a2e" : "#2563eb",
    headerTint: "#ffffff",
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.activeTint,
        tabBarInactiveTintColor: colors.inactiveTint,
        tabBarStyle: {
          backgroundColor: colors.tabBarBg,
          borderTopColor: colors.tabBarBorder,
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerStyle: {
          backgroundColor: colors.headerBg,
        },
        headerTintColor: colors.headerTint,
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 18,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerTitle: "React Native Syllabus",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="📱" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerTitle: "Topic Playground",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="🔍" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Progress",
          headerTitle: "Course Progress",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="📊" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  focusedIconContainer: {
    transform: [{ scale: 1.15 }],
  },
});
