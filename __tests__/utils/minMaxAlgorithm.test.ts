import { getBestMove } from "../../src/utils/minMaxAlgorithm";

describe("minMaxAlgorithm", () => {
  it("👤 vs 🤖 - should return best move 5", () => {
    const result = getBestMove({
      player1Selection: [1],
      player2Selection: [],
      cpuPosition: "player2",
    });
    expect(result).toBe(5);
  });
  it("🤖 vs 👤 - should return best move 5 in the middle when starting a game", () => {
    const result = getBestMove({
      player1Selection: [],
      player2Selection: [],
      cpuPosition: "player1",
    });
    expect(result).toBe(5);
  });
});
