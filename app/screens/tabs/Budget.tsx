import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Colors from "../../utils/styles/Colors";
import BudgetHeader from "../../widgets/Budget/BudgetHeader";
import BudgetMain from "../../widgets/Budget/BudgetMain";

const Budget = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.blue,
        paddingTop: 50,
      }}
    >
      <BudgetHeader />
      <BudgetMain/>
    </View>
  );
};

export default Budget;
