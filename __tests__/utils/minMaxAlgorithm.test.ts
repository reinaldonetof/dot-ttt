import { getBestMove } from "../../src/utils/minMaxAlgorithm";

describe("minMaxAlgorithm", () => {
  it("👤 vs 🤖 - should return best move 5", () => {
    const result = getBestMove({
      player1Selection: [1],
      player2Selection: [],
    });
    expect(result).toBe(5);
  });
});
