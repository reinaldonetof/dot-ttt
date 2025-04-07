import { create } from "zustand";
import { INITIAL_STATE, IUseGameConfig } from "./Models";

export const useGameConfig = create<IUseGameConfig>((set) => ({
  ...INITIAL_STATE,
  setPlayer1: (player) =>
    set({ player1: player, isPlayer1Cpu: player === "cpu" }),
  setPlayer2: (player) =>
    set({ player2: player, isPlayer2Cpu: player === "cpu" }),
  setPlayer1Symbol: (symbol) => set({ player1Symbol: symbol }),
  setPlayer2Symbol: (symbol) => set({ player2Symbol: symbol }),
  resetGameConfig: () => set({ ...INITIAL_STATE }),
}));
