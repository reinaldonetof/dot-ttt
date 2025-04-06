import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useDimensions } from "../../../../hooks/useDimensions";

const TTTBox = (props: TouchableOpacityProps) => {
  const { boxSize } = useDimensions();

  return (
    <TouchableOpacity
      style={[styles.box, { height: boxSize, width: boxSize }]}
      {...props}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default TTTBox;

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
});
