import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              color={focused ? "cornflowerblue" : "gray"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              color={focused ? "cornflowerblue" : "gray"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.navigate("/modal");
          },
        }}
        options={{
          title: "Add",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add"
              color={focused ? "cornflowerblue" : "gray"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="heart-outline"
              color={focused ? "cornflowerblue" : "gray"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="[username]"
        options={{
          title: "Username",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              color={focused ? "cornflowerblue" : "gray"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="following"
        options={{
          title: "Following",
          href: null,
        }}
      />
      <Tabs.Screen
        name="(posts)/[username]/posts/[postId]"
        options={{
          title: "Posts",
          href: null,
        }}
      />
    </Tabs>
  );
}
