import { useEffect } from "react";
import { useGameRound } from "../storage/useGameRound";
import { getBestMove } from "../utils/minMaxAlgorithm";
import { useGameConfig } from "../storage/useGameConfig";

export const useCpuTurn = () => {
  const { isPlayer1Cpu, isPlayer2Cpu } = useGameConfig();
  const { player1Selection, player2Selection, turn, winner, setGameRound } =
    useGameRound();

  useEffect(() => {
    const isBothCpu = isPlayer1Cpu && isPlayer2Cpu;

    if (winner || (!isPlayer1Cpu && !isPlayer2Cpu)) return;
    if (isPlayer1Cpu && turn !== "player1" && !isBothCpu) return;
    if (isPlayer2Cpu && turn !== "player2" && !isBothCpu) return;

    const bestMove = getBestMove({
      player1Selection,
      player2Selection,
      cpuPosition: turn,
    });
    setTimeout(() => {
      setGameRound({ index: bestMove, player: turn });
    }, 500);
  }, [
    isPlayer1Cpu,
    isPlayer2Cpu,
    player1Selection,
    player2Selection,
    setGameRound,
    turn,
    winner,
  ]);
};
