import { Text, SafeAreaView, ScrollView, View, Animated } from "react-native";
import React, { useRef } from "react";
import Colors from "../../utils/styles/Colors";
import HomeHeader from "../../widgets/Home/HomeHeader";
import TopBar from "../../navigation/service/TopBar";
import Global from "../../utils/styles/Global";
import RecentItems from "../../widgets/Home/RecentItems";
import Styles from "../../utils/styles/Styles";
const Home = () => {
  return (
    <ScrollView
      style={{
        paddingTop: 50,
        backgroundColor: Colors.light,
      }}
      showsVerticalScrollIndicator = {false}
    >
      <HomeHeader />
      <Text
        style={[
          Styles.title,
          {
            marginHorizontal: Global.pad20,
            marginTop: 20,
          },
        ]}
      >
        Spend Frequency
      </Text>
      <TopBar />
      <RecentItems />
    </ScrollView>
  );
};

export default Home;
