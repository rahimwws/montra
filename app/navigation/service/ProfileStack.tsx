import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/stack/profile/Profile";
import SettingStack from "../user/SettingStack";

const ProfileStack = () => {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen component={Profile} name="Profile" />
      <ProfileStack.Screen component={SettingStack} name="SettingsStack" />
    </ProfileStack.Navigator>
  );
};

export default ProfileStack;
