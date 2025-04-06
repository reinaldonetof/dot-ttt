import { IUseGameRoundState } from "../storage/useGameRound/Models";

const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
];

export const checkWinner = (playerMove: number[]) => {
  return winConditions.some((conditions) =>
    conditions.every((positionIndex) => playerMove.includes(positionIndex)),
  );
};

export const checkGameStatus = ({
  player1Selection,
  player2Selection,
}: Pick<
  IUseGameRoundState,
  "player1Selection" | "player2Selection"
>): IUseGameRoundState["winner"] => {
  const isPlayer1Winner = checkWinner(player1Selection);
  if (isPlayer1Winner) return "player1";
  const isPlayer2Winner = checkWinner(player2Selection);
  if (isPlayer2Winner) return "player2";
  if (player1Selection.length + player2Selection.length === 9) return "draw";
  return undefined;
};
