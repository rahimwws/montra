import { View, Text } from "react-native";
import React from "react";
import Colors from "../../utils/styles/Colors";
import Global from "../../utils/styles/Global";
import ProfileCard from "../../components/ui/Cards/ProfileCard";
import Wallet from "../../assets/icons/Wallet";
import Settings from "../../assets/icons/Settings";
import Export from "../../assets/icons/Export";
import LogOut from "../../assets/icons/LogOut";

const ProfileOptions = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.light,
        marginHorizontal: Global.pad20,
        borderRadius: 30,
        marginTop: 20,
      }}
    >
      <ProfileCard icon={<Wallet />} name="Wallet" isLast={true} route="" />
      <ProfileCard
        icon={<Settings />}
        name="Setting"
        isLast={true}
        route="SettingsStack"
      />
      <ProfileCard icon={<Export />} name="ExportData" isLast={true} route="" />
      <ProfileCard icon={<LogOut />} name="Logout" isLast={false} route="" />
    </View>
  );
};

export default ProfileOptions;
