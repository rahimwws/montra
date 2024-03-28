import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Budget from "../../screens/tabs/Budget";
import CreateBudget from "../../screens/stack/budget/CreateBudget";
import DetailBudget from "../../screens/stack/budget/DetailBudget";

const BudgetStack = () => {
  const BudgetStack = createStackNavigator();
  return (
    <BudgetStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <BudgetStack.Screen component={Budget} name="BudgetStack" />
      <BudgetStack.Screen
        component={CreateBudget}
        name="CreateBudget"
      />
      <BudgetStack.Screen
        component={DetailBudget}
        name="DetailBudget"
       
      />
    </BudgetStack.Navigator>
  );
};

export default BudgetStack;
