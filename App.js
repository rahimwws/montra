import React from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Main from "./app/Main";
import { StatusBar } from "react-native";
import Colors from "./app/utils/styles/Colors";
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StatusBar backgroundColor={Colors.light}/>
        <Main/>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
