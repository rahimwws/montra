import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../utils/styles/Colors'

const HeaderAva = () => {
    return (
        <View style={{
            width: 40,
            height: 40,
            backgroundColor: Colors.light,
            borderRadius: 20,
            alignItems:"center",
            justifyContent:"center",
            borderColor:Colors.violet,
            borderWidth:1
        }}>
            <View style={{
                width: 33,
                height: 33,
                backgroundColor: Colors.grey,
                borderRadius: 20,
            }}></View>
        </View>
    )
}

export default HeaderAva