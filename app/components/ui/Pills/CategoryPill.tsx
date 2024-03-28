import { View, Text } from "react-native";
import React from "react";
import Colors from "../../../utils/styles/Colors";

type Props = {
  title: string;
  color: string;
};
const CategoryPill = ({ title, color }: Props) => {
  return (
    <View
      style={{
        // width:"",
        // height: 33,
        padding: 8,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: "#f1f1fa",
        flexDirection: "row",
        gap: 7,
      }}
    >
      <View
        style={{
          width: 15,
          height: 15,
          backgroundColor: color,
          borderRadius: 30,
        }}
      ></View>
      <Text
        style={{
          fontFamily: "inter-m",
          color: Colors.dark,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CategoryPill;
