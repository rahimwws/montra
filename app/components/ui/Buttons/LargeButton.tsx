import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../utils/styles/Colors'

type Props = {
    color: string,
    bg: string
    text: string,
    functions: any
}

const LargeButton = ({ color, bg, text, functions }: Props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: bg,
            width: 340,
            height: 56,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: bg === "#FFF" ? "#F1F1FA" : bg
        }}
            onPress={functions}>

            <Text style={{
                color: color,
                fontFamily: "inter-sb",
                fontSize: 18
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default LargeButton