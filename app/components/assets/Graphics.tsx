import { View, Text } from "react-native";
import React from "react";
import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";

const Graphics = () => {
  return (
    <Svg width="375" height="186" viewBox="0 0 375 186" fill="none">
      <Path
        d="M51.6989 117.105C24.9299 117.105 12.5989 136.054 1 136.054V185.5H376V127.178C310.64 127.178 320.222 16 289.459 16C256.68 16 225.559 127.178 198.181 127.178C175.488 127.178 167.645 97.1588 146.743 97.1588C117.215 97.1588 116.485 156 92.2782 156C75.6363 156 74.1235 117.105 51.6989 117.105Z"
        fill="url(#paint0_linear_826_295)"
      />
      <Path
        d="M1 136.054C12.5989 136.054 24.9299 117.105 51.6989 117.105C74.1235 117.105 75.6363 156 92.2782 156C116.485 156 117.215 97.1588 146.743 97.1588C167.645 97.1588 175.488 127.178 198.181 127.178C225.559 127.178 256.68 16 289.459 16C320.222 16 310.64 127.178 376 127.178"
        stroke="#7F3DFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_826_295"
          x1="188.5"
          y1="16"
          x2="188.5"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8B50FF" stopOpacity="0.24" />
          <Stop offset="1" stopColor="#8B50FF" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Graphics;
