import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../utils/styles/Colors";
import CategoryPill from "../Pills/CategoryPill";
import ProgressBar from "react-native-progress/Bar";
import { HandleHapticWarning } from "../../../utils/features/HandleHaptic";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { BudgetCart } from "../../../utils/types/Cards";

const BudgetCard = ({
  isWarning,
  Category,
  Total,
  Expense,
  Progress,
  color,
}: BudgetCart) => {
  const remainNumber = Total - Expense <= 0 ? 0 : Total - Expense;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        marginVertical: 30,
      }}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("DetailBudget", {
          isWarning,
          Category,
          Total,
          Expense,
          Progress,
          color,
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CategoryPill title={Category} color={color} />
        {isWarning && (
          <TouchableOpacity
            style={{
              width: 33,
              height: 33,
              backgroundColor: Colors.red,
              borderRadius: 33,
              alignItems: "center",
              justifyContent: "center",
            }}
            activeOpacity={0.8}
            onPress={HandleHapticWarning}
          >
            <Text
              style={{
                fontFamily: "inter-sb",
                color: Colors.light,
                fontSize: 18,
              }}
            >
              !
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "inter-b",
            color: Colors.dark,
            marginVertical: 5,
          }}
        >
          Remaining ${remainNumber}
        </Text>
        <ProgressBar
          animated={false}
          width={null}
          progress={Progress}
          height={15}
          color={color}
          unfilledColor="#EEE5FF"
          borderWidth={0}
          borderRadius={20}
        />
        <Text
          style={{
            marginVertical: 5,
            fontFamily: "inter-m",
            color: Colors.grey,
            fontSize: 16,
          }}
        >
          ${Expense} of ${Total}
        </Text>
        {isWarning && (
          <Text
            style={{
              marginTop: 5,
              fontFamily: "inter-r",
              color: Colors.red,
            }}
          >
            You’ve exceed the limit!
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BudgetCard;
