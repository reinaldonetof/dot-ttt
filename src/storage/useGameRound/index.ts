import { create } from "zustand";
import { INITIAL_STATE, IUseGameRound } from "./Models";

export const useGameRound = create<IUseGameRound>((set) => ({
  ...INITIAL_STATE,
  setGameRound: ({ index, player }) =>
    set((state) => {
      const newState = { ...state };
      newState.boxSelected[index] = player;
      if (player === "player1") {
        newState.turn = "player2";
        newState.player1Selection.push(index);
      } else {
        newState.turn = "player1";
        newState.player2Selection.push(index);
      }
      return newState;
    }),
  setWinner: (winner) => set({ winner }),
  resetGameRound: () => set({ ...INITIAL_STATE }),
}));
