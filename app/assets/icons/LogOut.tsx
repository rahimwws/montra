import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const LogOut = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M19 8V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V25C5 25.5304 5.21071 26.0391 5.58579 26.4142C5.96086 26.7893 6.46957 27 7 27H17C17.5304 27 18.0391 26.7893 18.4142 26.4142C18.7893 26.0391 19 25.5304 19 25V24"
        stroke="#FD3C4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 16H26.83"
        stroke="#FD3C4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.5901 11.7598L26.4101 14.5898C26.7826 14.9645 26.9917 15.4714 26.9917 15.9998C26.9917 16.5281 26.7826 17.035 26.4101 17.4098L23.5901 20.2398"
        stroke="#FD3C4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LogOut;
