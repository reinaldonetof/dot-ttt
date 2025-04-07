import { IUseGameRoundState, Players } from "../storage/useGameRound/Models";
import { checkGameStatus } from "./functions";

type Moves = IUseGameRoundState["player1Selection"];

const allPositions: Moves = Array.from({ length: 9 }, (_, i) => i + 1);

const getAvailableMoves = (p1: Moves, p2: Moves): Moves => {
  return allPositions.filter((pos) => !p1.includes(pos) && !p2.includes(pos));
};

const minimaxBestPlayerTwo = (
  p1: Moves,
  p2: Moves,
  isCpuTurn: boolean,
): number => {
  const status = checkGameStatus({
    player1Selection: p1,
    player2Selection: p2,
  });

  if (status === "player2") return +1;
  if (status === "player1") return -1;
  if (status === "draw") return 0;

  const moves = getAvailableMoves(p1, p2);
  const scores = moves.map((move) => {
    if (isCpuTurn) {
      return minimaxBestPlayerTwo(p1, [...p2, move], false);
    } else {
      return minimaxBestPlayerTwo([...p1, move], p2, true);
    }
  });

  return isCpuTurn ? Math.max(...scores) : Math.min(...scores);
};

const minimaxBestPlayerOne = (
  p1: Moves,
  p2: Moves,
  isCpuTurn: boolean,
): number => {
  const status = checkGameStatus({
    player1Selection: p1,
    player2Selection: p2,
  });

  if (status === "player1") return +1;
  if (status === "player2") return -1;
  if (status === "draw") return 0;

  const moves = getAvailableMoves(p1, p2);
  const scores = moves.map((move) => {
    if (isCpuTurn) {
      return minimaxBestPlayerOne([...p1, move], p2, false);
    } else {
      return minimaxBestPlayerOne(p1, [...p2, move], true);
    }
  });

  return isCpuTurn ? Math.max(...scores) : Math.min(...scores);
};

export const getBestMove = ({
  player1Selection,
  player2Selection,
  cpuPosition,
}: {
  player1Selection: Moves;
  player2Selection: Moves;
  cpuPosition: Players;
}): number => {
  if (
    cpuPosition === "player1" &&
    player1Selection.length === 0 &&
    player2Selection.length === 0
  ) {
    const options = [1, 3, 5, 7, 9];
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
  }

  const moves = getAvailableMoves(player1Selection, player2Selection);

  let bestScore = -Infinity;
  let bestMove: number = moves[0];

  for (const move of moves) {
    const score =
      cpuPosition === "player2"
        ? minimaxBestPlayerTwo(
            player1Selection,
            [...player2Selection, move],
            false,
          )
        : minimaxBestPlayerOne(
            [...player1Selection, move],
            player2Selection,
            false,
          );
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
};
