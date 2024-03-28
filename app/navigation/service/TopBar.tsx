import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import Colors from "../../utils/styles/Colors";
import Global from "../../utils/styles/Global";
import Frequency from "../../widgets/Home/Frequency";
const TopNavigator = createMaterialTopTabNavigator();
export default function TopNav() {
  return (
      <TopNavigator.Navigator
        style={{ minHeight: 240 }}
        screenOptions={{
          swipeEnabled: false,
          tabBarStyle: styles.containerStyle,
          tabBarIndicatorStyle: styles.indicator,
          tabBarActiveTintColor: Colors.yellow,
          tabBarInactiveTintColor: Colors.grey,
          tabBarContentContainerStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarLabelStyle: {
            fontFamily: "inter-m",
            fontSize: 14,
            textTransform: "none",
          },
        }}
      >
        <TopNavigator.Screen name="Today" component={Frequency} />
        <TopNavigator.Screen name="Week" component={Frequency} />
        <TopNavigator.Screen name="Month" component={Frequency} />
        <TopNavigator.Screen name="Year" component={Frequency} />
      </TopNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: "#FCEED4",
    height: "100%",
    borderRadius: 16,
  },
  containerStyle: {
    marginTop: 20,
    marginHorizontal: Global.pad20,
    backgroundColor: Colors.light,
    width: "auto",
    borderRadius: 50,
    borderColor: "#f1f1fa",
    borderWidth: 1,
    height: 34,
    shadowColor: "#FCEED4",
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
