import React from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  PLAYER_SYMBOLS,
  PlayerSymbols,
} from "../../../../storage/useGameConfig/Models";
import { useGameConfig } from "../../../../storage/useGameConfig";

type SymbolOptionsProps = {
  onSelect: (symbol: PlayerSymbols) => void;
  playerSymbolToFilter?: PlayerSymbols;
};

const SymbolOptions = ({
  onSelect,
  playerSymbolToFilter,
}: SymbolOptionsProps) => {
  const data = PLAYER_SYMBOLS.filter(
    (symbol) => symbol !== playerSymbolToFilter,
  );
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)} style={styles.item}>
          <Text style={styles.symbol}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default SymbolOptions;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  item: {
    padding: 10,
    marginHorizontal: 6,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
  },
  symbol: {
    fontSize: 28,
  },
});
