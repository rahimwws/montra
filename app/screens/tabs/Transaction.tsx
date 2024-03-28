import { View, Text, ScrollView } from "react-native";
import React, { useRef } from "react";
import Colors from "../../utils/styles/Colors";
import Global from "../../utils/styles/Global";
import TransactionHeader from "../../widgets/Transaction/TransactionHeader";
import TransactionItems from "../../widgets/Transaction/TransactionItems";
import bottomSheetModal from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModal";
import FilterBottomSheet from "../../components/ui/BottomSheet/FilterBottomSheet";

const Transaction = () => {
  const bottomRef = useRef<bottomSheetModal>(null);
  const HandleOpenBottom = () => bottomRef.current?.present();
  const HandleCloseBottom = () => bottomRef.current?.close();
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.light,
          paddingTop: Global.pad50,
          paddingHorizontal: Global.pad20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <TransactionHeader openBottom={HandleOpenBottom} />
        <TransactionItems title="Today" last={false} />
        <TransactionItems title="Yesterday" last={true} />
      </ScrollView>
      <FilterBottomSheet ref={bottomRef} close={HandleCloseBottom} />
    </>
  );
};

export default Transaction;
