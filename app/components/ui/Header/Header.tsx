import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import NotifiactionSvg from '../../../assets/icons/NotifiactionSvg'
import Colors from '../../../utils/styles/Colors'
import HeaderAva from './HeaderAva'
import Global from '../../../utils/styles/Global'
import ChangePills from '../Pills/ChangePills'

const Header = () => {
    return (
        <View style={{
            
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: Global.pad20,
            paddingVertical:10
        }}>
            <HeaderAva />
            <ChangePills />
            <NotifiactionSvg color={Colors.violet} />
        </View>
    )
}

export default Header