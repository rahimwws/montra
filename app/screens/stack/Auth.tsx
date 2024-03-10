import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utils/styles/Colors'
import LargeInput from '../../components/ui/Inputs/LargeInput'
import PasswordInput from '../../components/ui/Inputs/PasswordInput'
import LargeButton from '../../components/ui/Buttons/LargeButton'
import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'

const Auth = () => {
    const [isChecked, setChecked] = useState(false);

    const navigation: any = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: Colors.light, }}>
            <View style={{
                alignItems: "center",
                marginTop: "20%",
                gap: 24,
                marginBottom: 17
            }}>
                <LargeInput type="email-address" placeholder="Email" />
                <PasswordInput />
            </View>
            <View style={{
                alignItems: "center"
            }}>

                <View style={{
                    width: 320,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 27
                }}>
                    <Checkbox style={{
                        borderColor: Colors.violet,
                        width: 22,
                        height: 22,
                        borderRadius: 6
                    }}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? Colors.violet : undefined} />
                    <Text style={{
                        maxWidth: "95%",
                        fontFamily: "inter-m",
                        color: Colors.dark,
                        fontSize: 14
                    }}>
                        By logining, you agree to the <Text style={{
                            color: Colors.violet
                        }}>Terms of Service and Privacy Policy</Text>
                    </Text>
                </View>
                <LargeButton text='Login' bg={Colors.violet} color={Colors.light} functions={() => navigation.navigate("Service")} />
                <Text style={{
                    marginVertical: 15,
                    fontFamily: "inter-b",
                    color: Colors.grey,
                    fontSize: 14
                }}>Or</Text>
                <LargeButton text='Just Skip' bg={Colors.light} color={Colors.dark}  functions={() => navigation.navigate("Password")} />

            </View>

        </View >
    )
}

export default Auth