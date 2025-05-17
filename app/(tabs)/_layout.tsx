import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

export default function TabsLayout() {
  const router = useRouter();
  const isLoggedIn = true;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
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
              if (isLoggedIn) {
                router.navigate("/modal");
              } else {
                openLoginModal();
              }
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
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              if (!isLoggedIn) {
                openLoginModal();
              } else {
                router.navigate("/activity");
              }
            },
          }}
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
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              if (!isLoggedIn) {
                openLoginModal();
              } else {
                router.navigate("/[username]");
              }
            },
          }}
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
          name="(posts)/[username]/posts/[postId]"
          options={{
            title: "Posts",
            href: null,
          }}
        />
      </Tabs>
      <Modal
        visible={isLoginModalOpen}
        transparent={true}
        animationType="slide"
        // onRequestClose={closeLoginModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <Text>Login Modal</Text>
            <TouchableOpacity onPress={closeLoginModal}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
