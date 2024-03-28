import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Colors from "../../../utils/styles/Colors";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation, useRoute } from "@react-navigation/native";
import Back from "../../../assets/icons/Back";
import { TextInput } from "react-native-gesture-handler";
import BudgetSheet from "../../../components/ui/BottomSheet/BudgetSheet";

const CreateBudget = () => {
  let title = "Create Budget";
  const navigation = useNavigation(); // Import and use useNavigation hook
  const route: any = useRoute();

  const [currentText, setCurrentText] = useState(""); // State to store the current input value

  const handleInputChange = (text: string) => {
    // Check if the user is deleting a character
    if (text.length < currentText.length) {
      setCurrentText(text);
      return;
    } else {
      if (text.length > 0 && text.charAt(0) !== "$") {
        setCurrentText("$" + text);
      } else {
        setCurrentText(text);
      }
    }
  };
  const bottomRef = useRef<BottomSheetModal>(null);

  if (route.params) {
    title = "Edit Budget";
  }
  useEffect(() => {
    bottomRef.current.present();
  }, []); // Add navigation to dependency array

  const handleNavigateBack = () => {
    bottomRef.current.forceClose();
    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.blue,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleNavigateBack}
          style={{
            position: "absolute",
            left: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Back color={Colors.light} />
        </TouchableOpacity>
        <Text
          style={{ fontFamily: "inter-r", fontSize: 18, color: Colors.light }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          marginTop: "70%",
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "inter-sb",
            fontSize: 18,
            color: Colors.light,
            opacity: 0.6,
          }}
        >
          How much do yo want to spend?
        </Text>
        <TextInput
          maxLength={5}
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="$0"
          placeholderTextColor={Colors.light}
          style={{
            fontSize: 64,
            marginTop: 20,
            fontFamily: "inter-sb",
            color: Colors.light,
          }}
          onChangeText={handleInputChange}
          value={currentText}
        />
      </View>
      <BudgetSheet ref={bottomRef} goBack={handleNavigateBack} />
    </SafeAreaView>
  );
};

export default CreateBudget;
