import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../utils/styles/Colors'

const Tracker = ({ icon, functions, type }) => {
    return (
        <TouchableOpacity style={{
            height: 80,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: type === "income" ? Colors.green : Colors.red,
            gap: 10,
            borderRadius: 28,
            paddingHorizontal: 15
        }}
        activeOpacity={0.7}
        onPress={functions}>
            <View style={{
                width: 48,
                height: 48,
                borderRadius: 16,
                backgroundColor: Colors.light,
                alignItems: "center",
                justifyContent: "center"
            }}>
                {icon}
            </View>
            <View>
                <Text style={{
                    fontFamily: "inter-m",
                    color: Colors.light,
                    fontSize: 14,
                    textTransform:"capitalize"
                }}>
                    {type}
                </Text>
                <Text style={{
                    fontFamily: "inter-b",
                    color: Colors.light,
                    fontSize: 22
                }}>$5000</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Tracker