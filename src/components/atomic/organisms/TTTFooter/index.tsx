import React from "react";
import { Button, View } from "react-native";
import PlayersSymbolContainer from "../../molecules/PlayersSymbolContainer";
import { useGameRound } from "../../../../storage/useGameRound";

const TTTFooter = () => {
  const { resetGameRound } = useGameRound();

  return (
    <View>
      <PlayersSymbolContainer />
      <Button title="Reset game" onPress={() => resetGameRound()} />
    </View>
  );
};

export default TTTFooter;
