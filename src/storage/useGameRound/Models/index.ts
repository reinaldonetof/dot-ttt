export type Players = "player1" | "player2";

export interface IUseGameRound extends IUseGameRoundState {
  setGameRound: ({ index, player }: { index: number; player: Players }) => void;
  resetGameRound: () => void;
  setWinner: (winner: Players | "draw") => void;
}

export interface IUseGameRoundState {
  boxSelected: {
    [key: number]: Players | undefined;
  };
  player1Selection: number[];
  player2Selection: number[];
  turn: Players;
  winner?: Players | "draw";
}

export const INITIAL_STATE: IUseGameRoundState = {
  boxSelected: {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
  },
  player1Selection: [],
  player2Selection: [],
  turn: "player1",
  winner: undefined,
};
