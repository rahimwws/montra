import { View, Text, Switch, Button, Dimensions } from "react-native";
import React, { forwardRef, useEffect, useMemo, useState } from "react";
import Colors from "../../../utils/styles/Colors";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomProgressBar from "../../../shared/ui/CustomProgressBar";
import LargeButton from "../Buttons/LargeButton";
import { useNavigation } from "@react-navigation/native";
import { Path, Svg } from "react-native-svg";
type Props = {
  goBack: Function;
};
const BudgetSheet = forwardRef<BottomSheetModal, Props>(({ goBack }, ref) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const snapPoints = isEnabled ? ["40%"] : ["30%"];

  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      enablePanDownToClose={false}
      enableHandlePanningGesture={false}
      handleIndicatorStyle={{
        backgroundColor: Colors.light,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.light,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
            borderWidth: 1,
            borderColor: "#f1f1fa",
            padding: 10,
            marginBottom: 20,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "inter-m",
              fontSize: 18,
              color: Colors.grey,
            }}
          >
            Category
          </Text>
          <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <Path
              d="M16.006 19.9101L16.006 19.91L15.9941 19.9101C14.8079 19.9242 13.6642 19.4694 12.8117 18.6447L7.18028 12.9534C7.10459 12.8595 7.06528 12.7412 7.06995 12.6204C7.07481 12.4945 7.12698 12.3751 7.21603 12.2861C7.30508 12.197 7.42444 12.1449 7.55028 12.14C7.67078 12.1354 7.78871 12.1744 7.88249 12.2497L13.5265 17.8937L13.5264 17.8938L13.5359 17.9028C14.2011 18.534 15.0831 18.8858 16 18.8858C16.917 18.8858 17.799 18.534 18.4642 17.9028L18.4643 17.9029L18.4736 17.8937L24.1176 12.2497C24.2114 12.1744 24.3293 12.1354 24.4498 12.14C24.5756 12.1449 24.695 12.197 24.784 12.2861C24.8731 12.3751 24.9253 12.4945 24.9301 12.6204C24.9348 12.7412 24.8955 12.8595 24.8198 12.9534L19.1884 18.6447C18.3359 19.4694 17.1922 19.9242 16.006 19.9101Z"
              fill="black"
              stroke="#91919F"
            />
          </Svg>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "inter-m",
                fontSize: 18,
                color: Colors.dark,
              }}
            >
              Receive Alert
            </Text>
            <Text
              style={{
                width: 200,
                fontFamily: "inter-r",
                fontSize: 14,
                color: Colors.grey,
              }}
            >
              Receive alert when it reaches some point.
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#EEE5FF", true: Colors.blue }}
            thumbColor={"#fff"}
            ios_backgroundColor="#EEE5FF"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        {isEnabled && <CustomProgressBar />}
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <LargeButton
            text="Continue"
            bg={Colors.violet}
            color={Colors.light}
            functions={goBack}
          />
        </View>
      </View>
    </BottomSheetModal>
  );
});
export default BudgetSheet;
