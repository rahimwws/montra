import { View, Text } from 'react-native'
import React from 'react'
import NotifiactionSvg from '../../../assets/icons/NotifiactionSvg'
import Colors from '../../../utils/styles/Colors'
import HeaderAva from './HeaderAva'
import ChangeButton from '../Buttons/ChangeButton'
import Global from '../../../utils/styles/Global'

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
            <ChangeButton />
            <NotifiactionSvg color={Colors.violet} />
        </View>
    )
}

export default Header