import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '../../utils/styles/Colors'
import Header from '../../components/ui/Header/Header'
import HomeHeader from '../../widgets/Home/HomeHeader'
import TopBar from '../../navigation/service/TopBar'
const Home = () => {
  return (
    <SafeAreaView style = {{
        flex:1,
        backgroundColor:Colors.light
    }}>
        <HomeHeader/>
        <TopBar/>
    </SafeAreaView>
  )
}

export default Home