import { View, Text, StyleSheet, useWindowDimensions, Animated } from 'react-native'
import React from 'react'
import Colors from '../../../utils/styles/Colors'

const OnBoardingPagination = ({ data, scrollX }: any) => {
    const { width }: any = useWindowDimensions()
    return (
        <View style={{ flexDirection: "row", height: 10, marginBottom: 70 }}>
            {
                data.map((item, key: any) => {
                    const inputRange = [(key - 1) * width, key * width, (key + 1) * width]

                    const dotsWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: "clamp"
                    })
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    })
                    return <Animated.View style={[styles.dot, { width: dotsWidth, opacity }]} key={key} />
                })
            }
        </View>
    )
}


export default OnBoardingPagination

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.violet,
        marginHorizontal: 8
    }
})