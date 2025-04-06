import { create } from "zustand";
import { INITIAL_STATE, IUseGameRound, IUseGameRoundState } from "./Models";

export const useGameRound = create<IUseGameRound>((set) => ({
  ...INITIAL_STATE,
  setGameRound: ({ index, player }) =>
    set((state) => {
      const newState: IUseGameRoundState = {
        ...state,
        boxSelected: { ...state.boxSelected, [index]: player },
        ...(player === "player1"
          ? {
              player1Selection: [...state.player1Selection, index],
              turn: "player2",
            }
          : {
              player2Selection: [...state.player1Selection, index],
              turn: "player1",
            }),
      };
      return { ...newState };
    }),
  setWinner: (winner) => set({ winner }),
  resetGameRound: () => set({ ...INITIAL_STATE }),
}));
