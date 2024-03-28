import { View, Text } from "react-native";
import React from "react";
import Colors from "../../utils/styles/Colors";
import Global from "../../utils/styles/Global";
import LargeButton from "../../components/ui/Buttons/LargeButton";
import { useNavigation } from "@react-navigation/native";
import BudgetCard from "../../components/ui/Cards/BudgetCard";

export default function BudgetMain() {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        backgroundColor: Colors.light,
        flex: 1,
        borderRadius: 24,
        paddingHorizontal: Global.pad20,
        // alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <BudgetCard
          isWarning={true}
          Category="Shopping"
          Total={1000}
          Expense={1200}
          Progress={1}
          color={Colors.yellow}
        />
        <BudgetCard
          isWarning={false}
          Category="Transportation"
          Total={700}
          Expense={350}
          Progress={0.7}
          color={Colors.blue}
        />
      </View>
      {/* <Text
        style={{
          width: 250,
          fontSize: 16,
          fontFamily: "inter-sb",
          color: Colors.grey,
          textAlign: "center",
        }}
      >
        You don’t have a budget. Let’s make one so you in control.
      </Text> */}
      <View
        style={{
          bottom: "20%",
          // position: "absolute",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <LargeButton
          color={Colors.light}
          bg={Colors.violet}
          text="Create a budget"
          functions={() => navigation.navigate("CreateBudget")}
        />
      </View>
    </View>
  );
}
