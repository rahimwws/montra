import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Back from "../../../assets/icons/Back";
import Colors from "../../../utils/styles/Colors";
import { useNavigation } from "@react-navigation/native";

const SettingHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation();
  const handleNavigateBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={handleNavigateBack} style={{ marginLeft: 20 }}>
        <Back color={Colors.dark} />
      </TouchableOpacity>

      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontFamily: "inter-sb",
          fontSize: 18,
          color: Colors.dark,
          marginRight: 52,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default SettingHeader;
