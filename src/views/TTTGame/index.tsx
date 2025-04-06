import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import TTTRow from "../../components/atomic/organisms/TTTRow";
import { useDimensions } from "../../hooks/useDimensions";
import { PADDING_INNER, SEPARATOR_WIDTH } from "../../components/constants";
import Separator from "../../components/atomic/atoms/Separator";

// import { Container } from './styles';

const TTTGame = () => {
  const { size, isPortrait } = useDimensions();
  return (
    <SafeAreaView
      style={[styles.safeAreaView, !isPortrait && styles.safeAreaLandscape]}
    >
      <View
        style={[
          styles.textViewContainer,
          !isPortrait && {
            maxWidth: size / 3,
          },
        ]}
      >
        <Text style={styles.text}>It's your time!</Text>
      </View>
      <View
        style={{
          ...styles.board,
          height: size,
          width: size,
        }}
      >
        <TTTRow rowIndex={1} />
        <Separator />
        <TTTRow rowIndex={4} />
        <Separator />
        <TTTRow rowIndex={7} />
      </View>
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
  board: {
    padding: PADDING_INNER,
    borderWidth: SEPARATOR_WIDTH,
    borderColor: "#16578e",
  },
});
