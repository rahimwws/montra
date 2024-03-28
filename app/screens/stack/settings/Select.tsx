import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SelectedItem } from "../../../components/ui/Settings/SelectedItem";
import SettingHeader from "../../../components/ui/Header/SettingHeader";
import Global from "../../../utils/styles/Global";
import { useRoute } from "@react-navigation/native";

interface SelectItemProps {
  full: string;
  concise: string;
}

const Select = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const router: any = useRoute();
  const [items, setItems]: Array<any> = useState([{}]);
  useLayoutEffect(() => {
    if (router.params) {
      setItems(router.params?.item);
    }
  }, [router.params]);
  // const languages = [
  //   { full: "English (EN)", concise: "En" },
  //   { full: "Russian (RU)", concise: "RU" },
  // ];
  const handleSelect = (Item: string) => {
    setSelectedItem(Item);
  };

  return (
    <SafeAreaView style={{}}>
      <SettingHeader title="Language" />
      <View
        style={{
          paddingHorizontal: Global.pad20,
        }}
      >
        {items.map((currency: SelectItemProps) => (
          <SelectedItem
            key={currency.concise}
            currency={currency.full}
            onSelect={handleSelect}
            isSelected={selectedItem === currency.full}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Select;
