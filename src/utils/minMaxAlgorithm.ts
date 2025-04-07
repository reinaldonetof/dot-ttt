import { IUseGameRoundState } from "../storage/useGameRound/Models";
import { checkGameStatus } from "./functions";

type Moves = IUseGameRoundState["player1Selection"];

const allPositions: Moves = Array.from({ length: 9 }, (_, i) => i + 1);

function getAvailableMoves(p1: Moves, p2: Moves): Moves {
  return allPositions.filter((pos) => !p1.includes(pos) && !p2.includes(pos));
}

function minimax(p1: Moves, p2: Moves, isCpuTurn: boolean): number {
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
      return minimax(p1, [...p2, move], false);
    } else {
      return minimax([...p1, move], p2, true);
    }
  });

  return isCpuTurn ? Math.max(...scores) : Math.min(...scores);
}

export function getBestMove({
  player1Selection,
  player2Selection,
}: {
  player1Selection: Moves;
  player2Selection: Moves;
}): number {
  const moves = getAvailableMoves(player1Selection, player2Selection);

  let bestScore = -Infinity;
  let bestMove: number = moves[0];

  for (const move of moves) {
    const score = minimax(player1Selection, [...player2Selection, move], false);
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
}
