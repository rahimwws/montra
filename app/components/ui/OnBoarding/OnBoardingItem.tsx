import { View, Text, useWindowDimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../../utils/styles/Colors'

type Props = {
  item: any
}

const OnBoardingItem = (props: Props) => {
  const width = useWindowDimensions()
  return (
    <View style={[styles.container, width]}>
      <Image source={props.item.image}/>
      <Text style={styles.text}>{props.item.title}</Text>
      <Text style = {styles.description}>{props.item.description}</Text>    
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
    color: Colors.dark,
    fontFamily: "inter-b",
    marginBottom:17
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.grey,
    fontFamily: "inter-m"
  }
})