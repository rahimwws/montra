import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../utils/styles/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const PasswordInput = () => {
    // State variable to hold the password 
    const [password, setPassword] = useState('');

    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TextInput
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                keyboardType="visible-password"
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
            <MaterialCommunityIcons
                name={showPassword ? 'eye' : "eye-off"}
                size={24}
                color="#aaa"
                style={{ marginLeft: 10, opacity: 1, position: "absolute", end: 10 }}
                onPress={toggleShowPassword}

            />
        </View>
    )
}

export default PasswordInput