import { View, Text } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import Colors from "../../../utils/styles/Colors";
import Global from "../../../utils/styles/Global";
import SmallButton from "../Buttons/SmallButton";

interface Props {
  close: Function;
}
type Ref = BottomSheetModal;

const DeleteSheet = forwardRef<Ref, Props>(({ close }, ref) => {
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const snapPoints = useMemo(() => ["25%"], []);
  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      backdropComponent={renderBackDrop}
      
    >
      <View
        style={{
          alignItems: "center",
          paddingTop: 10,
          paddingHorizontal: Global.pad20,
        }}
      >
        <Text
          style={{
            fontFamily: "inter-sb",
            fontSize: 18,
            color: Colors.dark,
          }}
        >
          Remove this budget?
        </Text>
        <Text
          style={{
            fontFamily: "inter-m",
            color: Colors.grey,
            fontSize: 16,
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          Are you sure do you wanna remove this budget?
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          <SmallButton
            bg={Colors.violet20}
            text="No"
            color={Colors.violet}
            functions={() => {}}
          />
          <SmallButton
            bg={Colors.violet}
            text="Yes"
            color={Colors.light}
            functions={() => {}}
          />
        </View>
      </View>
    </BottomSheetModal>
  );
});

export default DeleteSheet;
