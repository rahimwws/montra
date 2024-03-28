import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Global from "../../utils/styles/Global";
import { Path, Svg } from "react-native-svg";
import Colors from "../../utils/styles/Colors";
import { HandleHapticLight } from "../../utils/features/HandleHaptic";
import Styles from "../../utils/styles/Styles";
import Arrow from "../../assets/icons/Arrow";

interface Props {
  openBottom: any;
}

const TransactionHeader = ({ openBottom }: Props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={Styles.title}>Transactions</Text>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderColor: "#f1f1fa",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={()=>{
            HandleHapticLight(),
            openBottom()
          }}
        >
          <Svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <Path
              d="M27 8.5H5C4.86739 8.5 4.74022 8.44732 4.64645 8.35355C4.55268 8.25978 4.5 8.13261 4.5 8C4.5 7.86739 4.55268 7.74022 4.64645 7.64645C4.74022 7.55268 4.86739 7.5 5 7.5H27C27.1326 7.5 27.2598 7.55268 27.3536 7.64645C27.4473 7.74021 27.5 7.86739 27.5 8C27.5 8.13261 27.4473 8.25979 27.3536 8.35355C27.2598 8.44732 27.1326 8.5 27 8.5Z"
              fill="black"
              stroke="#212325"
            />
            <Path
              d="M23 17H9C8.73478 17 8.48043 16.8946 8.29289 16.7071C8.10536 16.5196 8 16.2652 8 16C8 15.7348 8.10536 15.4804 8.29289 15.2929C8.48043 15.1054 8.73478 15 9 15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17Z"
              fill="black"
            />
            <Path
              d="M19 25H13C12.7348 25 12.4804 24.8946 12.2929 24.7071C12.1054 24.5196 12 24.2652 12 24C12 23.7348 12.1054 23.4804 12.2929 23.2929C12.4804 23.1054 12.7348 23 13 23H19C19.2652 23 19.5196 23.1054 19.7071 23.2929C19.8946 23.4804 20 23.7348 20 24C20 24.2652 19.8946 24.5196 19.7071 24.7071C19.5196 24.8946 19.2652 25 19 25Z"
              fill="black"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          height: 48,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: Colors.violet20,
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontFamily: "inter-sb",
            color: Colors.violet,
          }}
        >
          See your financial report
        </Text>
        <Arrow/>
      </View>
    </View>
  );
};

export default TransactionHeader;
