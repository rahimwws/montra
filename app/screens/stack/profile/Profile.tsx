import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import ProfileHeader from "../../../widgets/Profile/ProfileHeader";
import ProfileOptions from "../../../widgets/Profile/ProfileOptions";

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // paddingHorizontal: Global.pad20,
      }}
    >
      <ProfileHeader />
      <ProfileOptions />
    </SafeAreaView>
  );
};

export default Profile;
