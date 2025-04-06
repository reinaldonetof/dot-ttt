import { create } from "zustand";
import { INITIAL_STATE, IUseGameRound, IUseGameRoundState } from "./Models";
import { checkGameStatus } from "../../utils/functions";

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
              player2Selection: [...state.player2Selection, index],
              turn: "player1",
            }),
      };
      const { player1Selection, player2Selection } = newState;
      const gameStatus = checkGameStatus({
        player1Selection,
        player2Selection,
      });
      return { ...newState, winner: gameStatus };
    }),
  setWinner: (winner) => set({ winner }),
  resetGameRound: () => set({ ...INITIAL_STATE }),
}));
