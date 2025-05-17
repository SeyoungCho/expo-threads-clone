import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Modal() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>I&apos;m a Modal</Text>
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={{
          backgroundColor: "lightgray",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "blue", fontWeight: "bold" }}>Close</Text>
      </Pressable>
    </View>
  );
}
