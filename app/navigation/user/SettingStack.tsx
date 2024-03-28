import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../../screens/stack/settings/Setting";
import Select from "../../screens/stack/settings/Select";

const SettingStack = () => {
  const SettingStack = createStackNavigator();
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingStack.Screen component={Setting} name="Setting" />
      <SettingStack.Screen component={Select} name="Select" />
    </SettingStack.Navigator>
  );
};

export default SettingStack;
