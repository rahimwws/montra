import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../utils/styles/Colors";
import { HandleHaptic } from "../../../utils/features/HandleHaptic";

interface Props {
  onPress: any;
  text: string;
  isActive: boolean;
}

const FilterPill = ({ text, onPress, isActive }: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isActive ? Colors.violet20 : Colors.light,
        width: 104,
        height: 42,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: isActive ? Colors.violet20 : "#f1f1fa",
      }}
      onPress={() => {
        onPress(!isActive);
        HandleHaptic();
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: isActive ? Colors.violet : Colors.dark,
          fontFamily: "inter-sb",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterPill;
