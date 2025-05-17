import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";

export interface HashtagSuggestion {
  id: string;
  tag: string;
  count: number;
}

// 더미 데이터 (실제로는 API에서 가져올 수 있음)
export const SUGGESTED_HASHTAGS: HashtagSuggestion[] = [
  { id: "1", tag: "threads", count: 1000 },
  { id: "2", tag: "tech", count: 800 },
  { id: "3", tag: "coding", count: 600 },
  { id: "4", tag: "reactnative", count: 400 },
  { id: "5", tag: "typescript", count: 300 },
];

interface HashtagDropdownProps {
  suggestions?: HashtagSuggestion[];
  onSelect: (hashtag: string) => void;
  visible: boolean;
  style?: StyleProp<ViewStyle>;
}

export const HashtagDropdown: React.FC<HashtagDropdownProps> = ({
  suggestions = SUGGESTED_HASHTAGS,
  onSelect,
  visible,
  style,
}) => {
  if (!visible || suggestions.length === 0) return null;
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <TouchableOpacity
            style={styles.suggestionItem}
            onPress={() => onSelect(item.item.tag)}
          >
            <Text style={styles.tagText}>{item.item.tag}</Text>
            <Text style={styles.countText}>{item.item.count}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: 200,
    zIndex: 1000,
    width: 150,
  },
  list: {
    padding: 8,
  },
  suggestionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tagText: {
    fontSize: 14,
    color: "#000",
  },
  countText: {
    fontSize: 12,
    color: "#8e8e93",
  },
});
