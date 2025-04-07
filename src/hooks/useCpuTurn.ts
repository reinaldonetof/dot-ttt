import { useEffect } from "react";
import { useGameRound } from "../storage/useGameRound";
import { getBestMove } from "../utils/minMaxAlgorithm";

export const useCpuTurn = () => {
  const { player1Selection, player2Selection, turn, winner, setGameRound } =
    useGameRound();

  useEffect(() => {
    if (winner || turn === "player1") return;
    const bestMove = getBestMove({
      player1Selection,
      player2Selection,
      cpuPosition: "player2",
    });
    setGameRound({ index: bestMove, player: "player2" });
  }, [player1Selection, player2Selection, setGameRound, turn, winner]);
};
