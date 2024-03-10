import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../utils/styles/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const LargeInput = ({ type, placeholder }: { type: any, placeholder: string }) => {
    return (
        <TextInput

            placeholder={placeholder}
            keyboardType={type}
            style={{
                width: 340,
                height: 56,
                borderWidth: 1,
                borderRadius: 16,
                borderColor: "#F1F1FA",
                fontFamily: "inter-r",
                fontSize: 16,
                color: Colors.grey,
                paddingHorizontal: 16
            }}
        />

    )
}

export default LargeInput