import { View, Text } from "react-native";
import React from "react";
import { BudgetCart } from "../../utils/types/Cards";
import { Path, Svg } from "react-native-svg";
import ProgressBar from "react-native-progress/Bar";
import Colors from "../../utils/styles/Colors";
import Global from "../../utils/styles/Global";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HandleHapticWarning } from "../../utils/features/HandleHaptic";

const DetailInfo = ({ data }: { data: BudgetCart }) => {
  const remain = data.Total - data.Expense <= 0 ? 0 : data.Total - data.Expense;
  return (
    <View
      style={{
        alignItems: "center",
        paddingHorizontal: Global.pad20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          height: 64,
          borderColor: "#f1f1fa",
          borderWidth: 1,
          borderRadius: 24,
          padding: 16,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: "#fceed4",
          }}
        >
          <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
            <Path
              d="M19.25 15H5.75H5.435L6.035 18C6.2079 18.847 6.66813 19.6083 7.33782 20.155C8.00751 20.7017 8.84551 21.0002 9.71 21H15.29C16.1545 21.0002 16.9925 20.7017 17.6622 20.155C18.3319 19.6083 18.7921 18.847 18.965 18L19.565 15H19.25ZM11.75 18.75C11.75 18.9489 11.671 19.1397 11.5303 19.2803C11.3897 19.421 11.1989 19.5 11 19.5C10.8011 19.5 10.6103 19.421 10.4697 19.2803C10.329 19.1397 10.25 18.9489 10.25 18.75V17.25C10.25 17.0511 10.329 16.8603 10.4697 16.7197C10.6103 16.579 10.8011 16.5 11 16.5C11.1989 16.5 11.3897 16.579 11.5303 16.7197C11.671 16.8603 11.75 17.0511 11.75 17.25V18.75ZM14.75 18.75C14.75 18.9489 14.671 19.1397 14.5303 19.2803C14.3897 19.421 14.1989 19.5 14 19.5C13.8011 19.5 13.6103 19.421 13.4697 19.2803C13.329 19.1397 13.25 18.9489 13.25 18.75V17.25C13.25 17.0511 13.329 16.8603 13.4697 16.7197C13.6103 16.579 13.8011 16.5 14 16.5C14.1989 16.5 14.3897 16.579 14.5303 16.7197C14.671 16.8603 14.75 17.0511 14.75 17.25V18.75Z"
              fill="#FCAC12"
            />
            <Path
              d="M19.25 7.5H17.75V6.75C17.75 6.25754 17.653 5.76991 17.4645 5.31494C17.2761 4.85997 16.9999 4.44657 16.6517 4.09835C16.3034 3.75013 15.89 3.47391 15.4351 3.28545C14.9801 3.097 14.4925 3 14 3H11C10.0054 3 9.05161 3.39509 8.34835 4.09835C7.64509 4.80161 7.25 5.75544 7.25 6.75V7.5H5.75C5.15326 7.5 4.58097 7.73705 4.15901 8.15901C3.73705 8.58097 3.5 9.15326 3.5 9.75V11.25C3.5 11.8467 3.73705 12.419 4.15901 12.841C4.58097 13.2629 5.15326 13.5 5.75 13.5H19.25C19.8467 13.5 20.419 13.2629 20.841 12.841C21.2629 12.419 21.5 11.8467 21.5 11.25V9.75C21.5 9.15326 21.2629 8.58097 20.841 8.15901C20.419 7.73705 19.8467 7.5 19.25 7.5ZM8.75 6.75C8.75 6.15326 8.98705 5.58097 9.40901 5.15901C9.83097 4.73705 10.4033 4.5 11 4.5H14C14.5967 4.5 15.169 4.73705 15.591 5.15901C16.0129 5.58097 16.25 6.15326 16.25 6.75V7.5H8.75V6.75Z"
              fill="#FCAC12"
            />
          </Svg>
        </View>
        <Text
          style={{
            fontFamily: "inter-sb",
            fontSize: 16,
            color: Colors.dark,
          }}
        >
          {data.Category}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "inter-b",
          fontSize: 24,
          color: Colors.dark,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Remaining
      </Text>
      <Text
        style={{
          fontFamily: "inter-b",
          fontSize: 64,
          color: Colors.dark,
        }}
      >
        ${remain}
      </Text>
      <View
        style={{
          width: "100%",
          marginVertical: 20,
        }}
      >
        <ProgressBar
          animated={false}
          width={null}
          progress={data.Progress}
          height={15}
          color={data.color}
          unfilledColor="#EEE5FF"
          borderWidth={0}
          borderRadius={20}
        />
      </View>
      {data.isWarning && (
        <TouchableOpacity
          style={{
            backgroundColor: Colors.red,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
            paddingHorizontal: 16,
            borderRadius: 40,
          }}
          onPress={HandleHapticWarning}
          activeOpacity={1}
        >
          <TouchableOpacity
            style={{
              width: 33,
              height: 33,
              backgroundColor: Colors.light,
              borderRadius: 33,
              alignItems: "center",
              justifyContent: "center",
            }}
            activeOpacity={0.8}
          >
            <Text
              style={{
                fontFamily: "inter-sb",
                color: Colors.red,
                fontSize: 18,
              }}
            >
              !
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: Colors.light,
              fontFamily:"inter-r"
            }}
          >
            You’ve exceed the limit
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DetailInfo;
