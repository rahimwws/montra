import { View, Text } from "react-native";
import React from "react";
import Colors from "../../utils/styles/Colors";
import Global from "../../utils/styles/Global";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";
import { HandleHaptic } from "../../utils/features/HandleHaptic";

const ProfileHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: Global.pad20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop:20
      }}
    >
      <View
        style={{
          padding: 4,
          borderWidth: 1,
          borderColor: Colors.violet,
          borderRadius: 100,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: Colors.grey,
            borderRadius: 100,
          }}
        ></View>
      </View>
      <View
        style={{
          width: "65%",
        }}
      >
        <Text
          style={{
            fontFamily: "inter-m",
            color: Colors.grey,
          }}
        >
          Username
        </Text>
        <Text
          style={{
            fontFamily: "inter-sb",
            color: Colors.dark,
            fontSize: 20,
          }}
        >
          Rahym Hudaykuliew
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={HandleHaptic}>
        <Svg width="23" height="23" viewBox="0 0 23 23" fill="none">
          <Path
            d="M20.19 8.45998L8.18996 20.46C7.91385 20.7302 7.56733 20.9173 7.18996 21L3.64996 21.71C3.32767 21.7737 2.99465 21.7571 2.68033 21.6615C2.366 21.566 2.08005 21.3945 1.84775 21.1622C1.61545 20.9299 1.44395 20.6439 1.34841 20.3296C1.25287 20.0153 1.23623 19.6823 1.29996 19.36L1.99996 15.85C2.08263 15.4726 2.26975 15.1261 2.53996 14.85L14.38 2.99998C14.7665 2.60387 15.2285 2.28909 15.7385 2.07417C16.2486 1.85925 16.7965 1.74854 17.35 1.74854C17.9034 1.74854 18.4513 1.85925 18.9614 2.07417C19.4715 2.28909 19.9334 2.60387 20.32 2.99998C21.0089 3.75992 21.3796 4.75549 21.3554 5.78095C21.3312 6.80641 20.914 7.78338 20.19 8.50998V8.45998Z"
            stroke="#212325"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
