import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HandleHapticLight } from "../../../utils/features/HandleHaptic";

type Props = {
  color: string;
  bg: string;
  text: string;
  functions: any;
};

const SmallButton = ({ color, bg, text, functions }: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bg,
        width: 160,
        height: 56,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: bg === "#FFF" ? "#F1F1FA" : bg,
      }}
      onPress={() => {
        functions();
        HandleHapticLight();
      }}
    >
      <Text
        style={{
          color: color,
          fontFamily: "inter-sb",
          fontSize: 18,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
