import {
  View,
  Text,
  FlatList,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "../../utils/styles/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";

const BudgetHeader = () => {
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const flatListRef = useRef<FlatList>(null);
  const scrollToNextItem = () => {
    if (flatListRef.current && currentIndex < month.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };
  const scrollToBackItem = () => {
    if (flatListRef.current && currentIndex > 0) {
      flatListRef.current.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };
  const { width } = Dimensions.get("screen");
  const month = [
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
  ];
  return (
    <View
      style={{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 10,
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={scrollToBackItem}>
            <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <Path
                d="M19.41 25.4898C19.1462 25.486 18.8946 25.3782 18.71 25.1898L13.05 19.5398C12.5844 19.0753 12.2149 18.5236 11.9629 17.9161C11.7108 17.3087 11.5811 16.6575 11.5811 15.9998C11.5811 15.3421 11.7108 14.6909 11.9629 14.0835C12.2149 13.476 12.5844 12.9242 13.05 12.4598L18.71 6.80979C18.9013 6.64597 19.1474 6.56036 19.399 6.57008C19.6507 6.5798 19.8895 6.68414 20.0676 6.86223C20.2457 7.04032 20.35 7.27906 20.3597 7.53074C20.3694 7.78242 20.2838 8.02849 20.12 8.21979L14.46 13.8798C13.8982 14.4423 13.5826 15.2048 13.5826 15.9998C13.5826 16.7948 13.8982 17.5573 14.46 18.1198L20.12 23.7798C20.3062 23.9672 20.4108 24.2206 20.4108 24.4848C20.4108 24.749 20.3062 25.0024 20.12 25.1898C20.0274 25.2843 19.9169 25.3595 19.7951 25.4109C19.6732 25.4624 19.5423 25.4892 19.41 25.4898Z"
                fill="#FCFCFC"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <FlatList
         initialNumToRender={7}
          scrollEnabled={false}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={flatListRef}
          snapToAlignment="center"
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          data={month}
          renderItem={({ item }) => (
            <View
              style={{
                width: width,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "inter-sb",
                  fontSize: 22,
                  color: Colors.light,
                }}
              >
                {item}
              </Text>
            </View>
          )}
        />
        <View
          style={{
            position: "absolute",
            right: 20,
          }}
        >
          <TouchableOpacity onPress={scrollToNextItem} style={{}}>
            <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <Path
                d="M12.59 25.4898C12.4577 25.4892 12.3268 25.4624 12.205 25.4109C12.0831 25.3595 11.9726 25.2843 11.88 25.1898C11.6938 25.0024 11.5892 24.749 11.5892 24.4848C11.5892 24.2206 11.6938 23.9672 11.88 23.7798L17.54 18.1198C18.1018 17.5573 18.4174 16.7948 18.4174 15.9998C18.4174 15.2048 18.1018 14.4423 17.54 13.8798L11.88 8.21979C11.7162 8.02849 11.6306 7.78242 11.6403 7.53074C11.65 7.27906 11.7544 7.04032 11.9325 6.86223C12.1106 6.68414 12.3493 6.5798 12.601 6.57008C12.8526 6.56036 13.0987 6.64597 13.29 6.80979L19 12.4598C19.4657 12.9242 19.8351 13.476 20.0872 14.0835C20.3392 14.6909 20.469 15.3421 20.469 15.9998C20.469 16.6575 20.3392 17.3087 20.0872 17.9161C19.8351 18.5236 19.4657 19.0753 19 19.5398L13.34 25.1898C13.2428 25.2892 13.1258 25.3672 12.9967 25.4189C12.8675 25.4705 12.729 25.4947 12.59 25.4898Z"
                fill="#FCFCFC"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BudgetHeader;
