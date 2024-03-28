import { View, Text } from "react-native";
import React from "react";
import Global from "../../utils/styles/Global";
import Styles from "../../utils/styles/Styles";
import Colors from "../../utils/styles/Colors";
import TransactionCard from "../../components/ui/Cards/TransactionCard";
import LittlePill from "../../components/ui/Pills/LIttlePill";

const RecentItems = () => {
  return (
    <View
      style={{
        marginBottom: 150,
        flex: 1,
        paddingHorizontal: Global.pad20,
        backgroundColor: Colors.light,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={Styles.title}>Recent Transaction</Text>
        <LittlePill text="See All" functions={""} />
      </View>
      <View>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </View>
    </View>
  );
};

export default RecentItems;
