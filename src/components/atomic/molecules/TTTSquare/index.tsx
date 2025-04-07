import React, { useMemo } from "react";
import TTTBox, { TTTBoxProps } from "../../atoms/TTTBox";
import { useGameConfig } from "../../../../storage/useGameConfig";
import { useGameRound } from "../../../../storage/useGameRound";

type TTTSquareProps = Pick<TTTBoxProps, "index">;

const TTTSquare = ({ index }: TTTSquareProps) => {
  const { player1Symbol, player2Symbol, isPlayer1Cpu, isPlayer2Cpu } =
    useGameConfig();
  const { turn, setGameRound, boxSelected } = useGameRound();

  const playerWhoSelected = boxSelected[index];
  const value = useMemo(() => {
    if (!playerWhoSelected) return undefined;
    return playerWhoSelected === "player1" ? player1Symbol : player2Symbol;
  }, [player1Symbol, player2Symbol, playerWhoSelected]);

  const handlePress = () => {
    setGameRound({ index, player: turn });
  };

  return (
    <TTTBox
      testID={`TTTSquare-${value}-${index}`}
      onPress={handlePress}
      index={index}
      value={value}
      disabled={
        !!value ||
        (turn === "player1" && isPlayer1Cpu) ||
        (turn === "player2" && isPlayer2Cpu)
      }
    />
  );
};

export default TTTSquare;
