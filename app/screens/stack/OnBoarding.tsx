import { View, Text, SafeAreaView, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import Slides from "../../utils/ui/Slides";
import OnBoardingItem from "../../components/ui/OnBoarding/OnBoardingItem";
import OnBoardingPagination from "../../components/ui/OnBoarding/OnBoardingPagination";

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center",backgroundColor:"#fff" }}>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item: any) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <OnBoardingPagination data={Slides} scrollX={scrollX} />
    </SafeAreaView>
  );
};

export default OnBoarding;