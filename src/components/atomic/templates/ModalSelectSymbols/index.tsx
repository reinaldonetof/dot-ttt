import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PlayerSymbols } from "../../../../storage/useGameConfig/Models";
import PlayerSymbolButton from "../../molecules/PlayerSymbolButton";
import SymbolOptions from "../../organisms/SymbolOptions";
import { useGameConfig } from "../../../../storage/useGameConfig";

interface ModalSelectSymbolsProps {
  onClose: () => void;
  visible: boolean;
}

const ModalSelectSymbols = ({ visible, onClose }: ModalSelectSymbolsProps) => {
  const { player1Symbol, player2Symbol, setPlayer1Symbol, setPlayer2Symbol } =
    useGameConfig();
  const [selectingPlayer, setSelectingPlayer] = useState<1 | 2 | null>(null);

  const handleSelect = (symbol: PlayerSymbols) => {
    if (selectingPlayer === 1) setPlayer1Symbol(symbol);
    if (selectingPlayer === 2) setPlayer2Symbol(symbol);
    setSelectingPlayer(null);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>
            Do you want to change the symbol of each player?
          </Text>

          <PlayerSymbolButton
            player="Player 1"
            symbol={player1Symbol}
            onPress={() => setSelectingPlayer(selectingPlayer === 1 ? null : 1)}
          />
          {selectingPlayer === 1 && (
            <SymbolOptions
              onSelect={handleSelect}
              playerSymbolToFilter={player2Symbol}
            />
          )}

          <PlayerSymbolButton
            player="Player 2"
            symbol={player2Symbol}
            onPress={() => setSelectingPlayer(selectingPlayer === 2 ? null : 2)}
          />
          {selectingPlayer === 2 && (
            <SymbolOptions
              onSelect={handleSelect}
              playerSymbolToFilter={player1Symbol}
            />
          )}

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSelectSymbols;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
  },
});
