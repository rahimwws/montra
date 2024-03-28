import { View, Text } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Colors from "../../utils/styles/Colors";
import ProgressBar from "react-native-progress/Bar";

const CustomProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [width, setWidth] = useState(0);

  const translationX = useSharedValue(0);
  const context = useSharedValue(0);
  const pan = Gesture.Pan();
  pan
    .onBegin(() => {
      context.value = translationX.value;
    })
    .onUpdate((e: any) => {
      if ((e.translationX + context.value).toFixed(2) >= 0) {
        if (
          progress <= 0.87 ||
          e.translationX + context.value < translationX.value
        ) {
          translationX.value = e.translationX + context.value;
          setProgress(translationX.value / width + 0.01);
        }
      }
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value }],
    };
  });
  return (
    <View
      style={{
        marginVertical: 30,
      }}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setWidth(width);
      }}
    >
      <ProgressBar
        animated={false}
        width={null}
        progress={progress}
        height={15}
        color={Colors.violet}
        unfilledColor="#EEE5FF"
        borderWidth={0}
        borderRadius={20}
      />
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[
            {
              width: 54,
              height: 30,
              borderRadius: 24,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.violet,
              borderWidth: 2,
              borderColor: Colors.light,
              position: "absolute",

              top: -7,
            },

            rStyle,
          ]}
        >
          <Text
            style={{
              fontFamily: "inter-m",
              color: Colors.light,
            }}
          >
            {progress === 0
              ? (progress * 100).toFixed(0)
              : (progress * 100 + 13).toFixed(0)}
            %
          </Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default CustomProgressBar;
