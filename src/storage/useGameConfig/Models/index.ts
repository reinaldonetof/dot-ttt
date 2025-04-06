export type PlayerTypes = "person" | "cpu";

export type PlayerSymbols = "❌" | "⭕" | "🚀" | "🚗" | "🚢" | "👍" | "👎";

export interface IUseGameConfig extends IUseGameConfigState {
  setPlayer1: (player: PlayerTypes) => void;
  setPlayer2: (player: PlayerTypes) => void;
  setPlayer1Symbol: (symbol: PlayerSymbols) => void;
  setPlayer2Symbol: (symbol: PlayerSymbols) => void;
  resetGameConfig: () => void;
}

export interface IUseGameConfigState {
  player1?: PlayerTypes;
  player2?: PlayerTypes;
  player1Symbol?: PlayerSymbols;
  player2Symbol?: PlayerSymbols;
}

export const INITIAL_STATE: IUseGameConfigState = {
  player1: undefined,
  player2: undefined,
  player1Symbol: "❌",
  player2Symbol: "⭕",
};
