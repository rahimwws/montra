import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import Colors from "../../../utils/styles/Colors";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import DetailInfo from "../../../widgets/Budget/DetailInfo";
import LargeButton from "../../../components/ui/Buttons/LargeButton";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Back from "../../../assets/icons/Back";
import Trash from "../../../assets/icons/Trash";
import { HandleHaptic } from "../../../utils/features/HandleHaptic";
import DeleteSheet from "../../../components/ui/BottomSheet/DeleteSheet";

const DetailBudget = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const snapPoints = useMemo(() => ["30%"], []);
  const ModalRef = useRef<BottomSheetModal>(null);
  const deleteRef = useRef<BottomSheetModal>(null);
  const route = useRoute();
  const { Total, Expense, Category, color, isWarning, Progress }: any =
    route.params;
  useEffect(() => {
    ModalRef.current.present();
  }, []);
  const handleNavigateBack = () => {
    ModalRef.current.forceClose();
    navigation.goBack();
  };
  const DeleteOpen = () => {
    HandleHaptic();
    ModalRef.current.forceClose();
    deleteRef.current.present();
  };
  const DeleteClose = () => {
    deleteRef.current.forceClose();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.light,
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          marginBottom: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={handleNavigateBack} style={{}}>
          <Back color={Colors.dark} />
        </TouchableOpacity>
        <Text
          style={{ fontFamily: "inter-r", fontSize: 18, color: Colors.dark }}
        >
          Detail Budget
        </Text>
        <TouchableOpacity activeOpacity={0.8} onPress={DeleteOpen}>
          <Trash color={Colors.dark} />
        </TouchableOpacity>
      </View>
      <DetailInfo
        data={{ Total, Expense, Category, color, isWarning, Progress }}
      />
      <BottomSheetModal
        ref={ModalRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        enableHandlePanningGesture={false}
        handleIndicatorStyle={{
          backgroundColor: Colors.light,
        }}
      >
        <View
          style={{
            height: "90%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <LargeButton
            text="Edit"
            bg={Colors.violet}
            color={Colors.light}
            functions={() => navigation.navigate("CreateBudget", { Expense })}
          />
        </View>
      </BottomSheetModal>
      <DeleteSheet ref={deleteRef} close={DeleteClose} />
    </SafeAreaView>
  );
};

export default DetailBudget;
