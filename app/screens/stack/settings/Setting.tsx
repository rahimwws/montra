import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Colors from "../../../utils/styles/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Back from "../../../assets/icons/Back";
import { useNavigation } from "@react-navigation/native";
import SettingCard from "../../../components/ui/Cards/SettingCard";
import Global from "../../../utils/styles/Global";
import SettingHeader from "../../../components/ui/Header/SettingHeader";

const Setting = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.light,
      }}
    >
      <SettingHeader title="Settings"/>
      <View
        style={{
          paddingHorizontal: Global.pad20,
          marginTop: 20,
        }}
      >
        <SettingCard title="Currency" isDefault={true} defaultText="USD" />
        <SettingCard title="Language" isDefault={true} defaultText="English" />
        <SettingCard title="Theme" isDefault={true} defaultText="Dark" />
        <SettingCard
          title="Security"
          isDefault={true}
          defaultText="Fingerprint"
        />
        <SettingCard
          title="Notification"
          isDefault={false}
          defaultText="Notification"
        />
        <SettingCard title="About" isDefault={false} defaultText="About" />
      </View>
    </SafeAreaView>
  );
};

export default Setting;
