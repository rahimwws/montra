import { View, Text, useWindowDimensions, StyleSheet, Image } from 'react-native'
import React from 'react'

type Props = {
  item: any
}

const OnBoardingItem = (props: Props) => {
  const width = useWindowDimensions()
  return (
    <View style={[styles.container, width]}>
      <Image source={props.item.image}/>
      <Text style={styles.text}>{props.item.title}</Text>
      <Text style = {styles.description}>Become your own money manager and make every cent count</Text>    
    </View>
  )
}

export default OnBoardingItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
    paddingHorizontal: 60,
  },
  text: {
    textAlign: "center",
    fontSize: 32,
    color: "#212325",
    fontFamily: "inter-b",
    marginBottom:17
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#91919F",
    fontFamily: "inter-m"
  }
})