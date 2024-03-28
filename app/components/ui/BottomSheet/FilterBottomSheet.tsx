import { View, Text, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import Colors from "../../../utils/styles/Colors";
import Global from "../../../utils/styles/Global";
import Styles from "../../../utils/styles/Styles";
import { FilterBy, SortBy } from "../../../utils/data/Filters";
import LargeButton from "../Buttons/LargeButton";
import Arrow from "../../../assets/icons/Arrow";
import LittlePill from "../Pills/LIttlePill";
import FilterRow from "../Filter/FilterRow";

interface Props {
  close: Function;
}
type Ref = BottomSheetModal;
const FilterBottomSheet = forwardRef<Ref, Props>(({ close }, ref) => {
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const snapPoints = useMemo(() => ["60%"], []);
  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      backdropComponent={renderBackDrop}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.light,
          paddingHorizontal: Global.pad20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={Styles.title}>Filter Transaction</Text>
          <LittlePill text="Reset" functions={""} />
        </View>
        <View>
          <Text
            style={[
              Styles.title,
              {
                marginBottom: 15,
              },
            ]}
          >
            Filter By
          </Text>
          <FilterRow data={FilterBy} />
        </View>
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <Text
            style={[
              Styles.title,
              {
                marginBottom: 15,
              },
            ]}
          >
            Sort By
          </Text>
          <FilterRow data={SortBy} />
        </View>
        <Text style={[Styles.title, { marginBottom: 20 }]}>Category</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "inter-m",
              color: Colors.dark,
            }}
          >
            Choose Category
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "inter-m",
                color: Colors.grey,
              }}
            >
              0 selected
            </Text>
            <Arrow />
          </View>
        </TouchableOpacity>
        <LargeButton
          color={Colors.light}
          bg={Colors.violet}
          text="Apply"
          functions={close}
        />
      </View>
    </BottomSheetModal>
  );
});

export default FilterBottomSheet;
