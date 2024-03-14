import { View, Text } from "react-native";
import React from "react";
import Colors from "../../utils/styles/Colors";
import Graphics from "../../components/assets/Graphics";

const Frequency = () => {
  return (
    <View
      style={{
        flex:1,
        alignItems: "center",
        backgroundColor: Colors.light,
      }}
    >
      <Graphics />
    </View>
  );
};

export default Frequency;
