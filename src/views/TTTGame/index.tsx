import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useDimensions } from "../../hooks/useDimensions";
import Board from "../../components/atomic/organisms/Board";
import TTTHeader from "../../components/atomic/organisms/TTTHeader";
import TTTFooter from "../../components/atomic/organisms/TTTFooter";

const TTTGame = () => {
  const { isPortrait } = useDimensions();
  return (
    <SafeAreaView
      style={[styles.safeAreaView, !isPortrait && styles.safeAreaLandscape]}
    >
      <TTTHeader onPressConfig={() => {}} />
      <Board />
      <TTTFooter />
    </SafeAreaView>
  );
};

export default TTTGame;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#164a76",
    flex: 1,
  },
  safeAreaLandscape: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textViewContainer: {
    justifyContent: "center",
  },
  text: {
    color: "#e4effa",
    fontSize: 24,
    textAlign: "center",
  },
});
