import React, { useMemo } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDimensions } from "../../../../hooks/useDimensions";
import { useGameRound } from "../../../../storage/useGameRound";

interface TTTHeaderProps {
  onPressConfig: TouchableOpacityProps["onPress"];
  onPressBack: TouchableOpacityProps["onPress"];
}

const TTTHeader = ({ onPressConfig, onPressBack }: TTTHeaderProps) => {
  const { size, isPortrait } = useDimensions();
  const { winner, turn } = useGameRound();

  const title = useMemo(() => {
    if (winner && winner !== "draw") {
      return `${winner[0].toUpperCase() + winner.slice(1)} Win 🎉`;
    }
    if (winner === "draw") return "It's a draw!";
    return `${turn[0].toUpperCase() + turn.slice(1)}'s turn`;
  }, [turn, winner]);

  return (
    <View
      style={[
        styles.textViewContainer,
        !isPortrait && {
          maxWidth: size / 3,
          ...styles.textViewLandscape,
        },
        Platform.OS === "android" && {
          paddingTop: 48,
        },
      ]}
    >
      <TouchableOpacity onPress={onPressBack}>
        <Ionicons name="chevron-back" size={24} color={"#e4effa"} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
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
