import React from "react";
import { StyleSheet, View } from "react-native";
import { useDimensions } from "../../../../hooks/useDimensions";
import TTTRow from "../TTTRow";
import Separator from "../../atoms/Separator";
import { PADDING_INNER, SEPARATOR_WIDTH } from "../../../constants";
import { useGameRound } from "../../../../storage/useGameRound";

const Board = () => {
  const { size } = useDimensions();
  const { winner } = useGameRound();

  return (
    <View
      style={{
        ...styles.board,
        height: size,
        width: size,
      }}
      pointerEvents={!!winner ? "none" : undefined}
    >
      <TTTRow rowIndex={1} />
      <Separator />
      <TTTRow rowIndex={4} />
      <Separator />
      <TTTRow rowIndex={7} />
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  board: {
    padding: PADDING_INNER,
    borderWidth: SEPARATOR_WIDTH,
    borderColor: "#16578e",
  },
});
