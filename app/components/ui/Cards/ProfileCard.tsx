import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../utils/styles/Colors";
import Global from "../../../utils/styles/Global";
import { HandleHapticLight } from "../../../utils/features/HandleHaptic";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

type Props = {
  icon: any;
  name: string;
  isLast: boolean;
  route:string
};
const ProfileCard = ({ icon, name, isLast,route}: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const HandleNavigation = () => {
    HandleHapticLight();
    navigation.navigate(route);
  };
  return (
    <TouchableOpacity
      style={{
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderBottomWidth: isLast ? 2 : 0,
        borderBottomColor: isLast ? "#f1f1fa" : "",
        paddingHorizontal: Global.pad20,
      }}
      activeOpacity={0.8}
      onPress={HandleNavigation}
    >
      <View
        style={{
          width: 52,
          height: 52,
          backgroundColor: Colors.violet20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
        }}
      >
        {icon}
      </View>
      <Text
        style={{
          fontFamily: "inter-m",
          color: Colors.dark,
          fontSize: 16,
        }}
      >
        {name === "ExportData" ? "Export data" : name}
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileCard;
