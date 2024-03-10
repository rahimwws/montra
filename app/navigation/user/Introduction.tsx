import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../screens/stack/OnBoarding';
import Auth from '../../screens/stack/Auth';
import Colors from '../../utils/styles/Colors';
import { Ionicons } from '@expo/vector-icons';
import Service from '../service/Service';
import Back from '../../assets/icons/Back';

const Stack = createStackNavigator();
const Introduction = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShadowVisible: false, // applied here
      headerLeftContainerStyle:{
        paddingLeft:10
      }
    }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} options={{
        headerShown:false
      }} />
      <Stack.Screen name="Auth" component={Auth} options={{
        headerTitle:"Login",
        headerTitleStyle:{
          fontFamily:"inter-sb",
          fontSize:18
        },
        headerBackTitleVisible:false,
        headerBackImage:(color:any)=>{
          return <Back color = ""/>
        }
      }} />
       <Stack.Screen name="Service" component={Service} options={{
        headerShown:false,
        gestureEnabled:false
      }} />
    </Stack.Navigator>
  )
}

export default Introduction