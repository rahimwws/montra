import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DayExpence from './../../screens/tobTabs/DayExpence';
import Colors from '../../utils/styles/Colors';
import Global from '../../utils/styles/Global';
const TopNavigator = createMaterialTopTabNavigator();
export default function TopNav() {
  return (
    <TopNavigator.Navigator
      screenOptions={{
        tabBarStyle: styles.containerStyle,
        tabBarIndicatorStyle: styles.indicator,
        tabBarActiveTintColor: Colors.yellow,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      <TopNavigator.Screen name='Today' component={DayExpence} options={{
       
       
      }} />
      <TopNavigator.Screen name='Week' component={DayExpence} />
      <TopNavigator.Screen name='Month' component={DayExpence} />
      <TopNavigator.Screen name='Year' component={DayExpence} />
    </TopNavigator.Navigator>
  );
}

const styles = StyleSheet.create({

  indicator: {
    backgroundColor: "#FCEED4",
    position: 'absolute',
    zIndex: -1,
    bottom: '15%',
    height: '70%',
    borderRadius:16
  },
  containerStyle: {
    marginTop:10,
    marginHorizontal:Global.pad20,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.light,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 16,
    borderColor:"#FCFCFC",
    borderWidth:1,
  },
});