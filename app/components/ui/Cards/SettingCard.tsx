import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../utils/styles/Colors";
import Arrow from "../../../assets/icons/Arrow";
import { HandleHapticLight } from "../../../utils/features/HandleHaptic";
import {
  NavigationContainerProps,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

interface Props {
  isDefault: boolean;
  title: string;
  defaultText: string;
}

const SettingCard = ({ isDefault, title, defaultText }: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const HandleRoute = () => {
    HandleHapticLight();
    navigation.navigate(title,{});
  };
  return (
    <TouchableOpacity
      style={{
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      activeOpacity={0.8}
      onPress={HandleRoute}
    >
      <Text
        style={{
          fontSize: 16,
          color: Colors.dark,
          fontFamily: "inter-sb",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        {isDefault && (
          <Text
            style={{
              fontSize: 14,
              color: Colors.grey,
              fontFamily: "inter-sb",
            }}
          >
            {defaultText}
          </Text>
        )}
        <Arrow />
      </View>
    </TouchableOpacity>
  );
};

export default SettingCard;
