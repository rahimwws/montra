import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Introduction from "./navigation/user/Introduction";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Main() {
  const [fontsLoaded, fontError] = useFonts({
    "inter-b": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-m": require("./assets/fonts/Inter-Medium.ttf"),
    "inter-r": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-sb": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <NavigationContainer>
          <Introduction />
      </NavigationContainer>
  );
}
