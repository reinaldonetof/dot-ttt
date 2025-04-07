import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { PlayerSymbols } from "../../../../storage/useGameConfig/Models";

type PlayerSymbolButtonProps = {
  player: string;
  symbol?: PlayerSymbols;
  onPress: () => void;
};

const PlayerSymbolButton = ({
  player,
  symbol,
  onPress,
}: PlayerSymbolButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>
        {player}: {symbol}
      </Text>
    </TouchableOpacity>
  );
};

export default PlayerSymbolButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
