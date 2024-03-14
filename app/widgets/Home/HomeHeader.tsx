import { View, Text, Vibration } from "react-native";
import React from "react";
import Header from "../../components/ui/Header/Header";
import Colors from "../../utils/styles/Colors";
import Tracker from "../../components/ui/Tracker/Tracker";
import Global from "../../utils/styles/Global";
import Income from "../../components/assets/Income";
import Expense from "../../components/assets/Expense";
import { HandleHaptic } from "../../utils/features/HandleHaptic";
const HomeHeader = () => {
  return (
    <View>
      <Header />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "inter-m",
            fontSize: 14,
            color: Colors.grey,
          }}
        >
          Account Balance
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontFamily: "inter-b",
            fontSize: 40,
            color: Colors.dark,
          }}
        >
          $9400
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: Global.pad20,
          // alignItems:"center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Tracker icon={<Income />} functions={HandleHaptic} type="income" />
        <Tracker icon={<Expense />} functions={HandleHaptic} type="expense" />
      </View>
    </View>
  );
};

export default HomeHeader;
