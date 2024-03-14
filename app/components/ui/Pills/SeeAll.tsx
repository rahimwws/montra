import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../utils/styles/Colors";
import { HandleHaptic } from "../../../utils/features/HandleHaptic";

const SeeAll = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.violet20,
        width: 78,
        height: 32,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={HandleHaptic}
    >
      <Text
        style={{
          fontSize: 14,
          color: Colors.violet,
          fontFamily: "inter-sb",
        }}
      >
        See All
      </Text>
    </TouchableOpacity>
  );
};

export default SeeAll;
