import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDimensions } from "../../../../hooks/useDimensions";

interface TTTHeaderProps {
  onPressConfig: TouchableOpacityProps["onPress"];
}

const TTTHeader = ({ onPressConfig }: TTTHeaderProps) => {
  const { size, isPortrait } = useDimensions();

  return (
    <View
      style={[
        styles.textViewContainer,
        !isPortrait && {
          maxWidth: size / 3,
          ...styles.textViewLandscape,
        },
      ]}
    >
      <Text style={styles.text}>It's your time!</Text>
      <TouchableOpacity onPress={onPressConfig}>
        <Ionicons name="options" size={24} color={"#e4effa"} />
      </TouchableOpacity>
    </View>
  );
};

export default TTTHeader;

const styles = StyleSheet.create({
  textViewContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  textViewLandscape: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: "#e4effa",
    fontSize: 24,
    textAlign: "center",
  },
});
