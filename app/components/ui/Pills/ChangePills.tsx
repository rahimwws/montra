import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../../utils/styles/Colors";
import { HandleHapticLight } from "../../../utils/features/HandleHaptic";

const ChangePills = () => {
  const [index, setIndex] = useState(0);
  const data = ["USD", "TMT"];
  const HandleChange = () => {
    HandleHapticLight();
    if (index === 0) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  };
  return (
    <TouchableOpacity
      style={{
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#F1F1FA",
        paddingHorizontal: 30,
      }}
      onPress={HandleChange}
    >
      <Text
        style={{
          fontFamily: "inter-m",
          color: Colors.green,
          fontSize: 18,
        }}
      >
        {data[index]}
      </Text>
    </TouchableOpacity>
  );
};

export default ChangePills;
