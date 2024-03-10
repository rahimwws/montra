import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../utils/styles/Colors'

const CustomTabButton = ({ children }) => {
    return (
        <TouchableOpacity style={{
            top: -20,
            justifyContent: "center",
            alignContent: "center",
            // shadowOffset:{
            //     width:0,
            //     height:10
            // },
            // shadowColor:Colors.light,
            // shadowOpacity:1,
            // shadowRadius:0
        }}>
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: Colors.violet,
                alignItems:"center",
                justifyContent:"center"
            }}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default CustomTabButton