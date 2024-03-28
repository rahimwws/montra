import { View, Text } from "react-native";
import React, { useState } from "react";
import FilterPill from "./FilterPill";

const FilterRow = ({ data }: { data: Array<string> }) => {
  const [filterBy, setFilterBy] = useState(null);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        flexWrap:"wrap"
      }}
    >
      {data.map((item, key) => {
        return (
          <FilterPill
            text={item}
            onPress={() => setFilterBy(item)}
            isActive={item === filterBy}
            key={key}
          />
        );
      })}
    </View>
  );
};

export default FilterRow;
