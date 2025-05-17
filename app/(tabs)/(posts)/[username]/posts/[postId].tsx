import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Post() {
  const { postId, username } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        {username}님의 게시글 {postId}번 입니다.
      </Text>
    </View>
  );
}
