import React from "react";
import { StyleSheet, View } from "react-native";
import { PADDING_INNER, SEPARATOR_WIDTH } from "../../../constants";
import { useDimensions } from "../../../../hooks/useDimensions";

interface SeparatorProps {
  isHorizontal?: boolean;
}

const Separator = ({ isHorizontal = true }: SeparatorProps) => {
  const { size, boxSize } = useDimensions();
  const width = size - PADDING_INNER * 2 - SEPARATOR_WIDTH * 2;
  return (
    <View
      style={[
        styles.separator,
        isHorizontal
          ? {
              width,
              height: SEPARATOR_WIDTH,
            }
          : {
              width: SEPARATOR_WIDTH,
              height: boxSize,
            },
      ]}
    />
  );
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "#8dc3ec",
  },
});
