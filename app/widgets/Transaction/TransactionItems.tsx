import { View, Text, ScrollView } from "react-native";
import React from "react";
import Styles from "../../utils/styles/Styles";
import TransactionCard from "../../components/ui/Cards/TransactionCard";

type Props = {
  title: string;
  last: boolean;
};
const TransactionItems = ({ title, last }: Props) => {
  return (
    <View>
      <Text
        style={[
          Styles.title,
          {
            marginTop: 20,
          },
        ]}
      >
        {title}
      </Text>
      <View
        style={{
          marginBottom: last ? 150 : 0,
        }}
      >
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </View>
    </View>
  );
};

export default TransactionItems;
