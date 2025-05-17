import {
  type HashtagSuggestion,
  SUGGESTED_HASHTAGS,
} from "@/components/HashtagDropdown";
import { useState } from "react";

export const useHashTagInput = (onHashtagChange: (hashtag: string) => void) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<HashtagSuggestion[]>([]);

  const handleInputChange = (text: string) => {
    setInputValue(text);
    onHashtagChange(text);

    if (text.trim()) {
      const searchTerm = text.toLowerCase();
      const filteredSuggestions = SUGGESTED_HASHTAGS.filter((hashtag) =>
        hashtag.tag.toLowerCase().includes(searchTerm)
      );
      setSuggestions(filteredSuggestions);
      setIsDropdownVisible(true);
    } else {
      setSuggestions([]);
      setIsDropdownVisible(false);
    }
  };

  const handleSelect = (tag: string) => {
    setInputValue(tag);
    onHashtagChange(tag);
    setSuggestions([]);
    setIsDropdownVisible(false);
  };

  return {
    inputValue,
    isDropdownVisible,
    suggestions,
    handleInputChange,
    handleSelect,
    setIsDropdownVisible,
  };
};
