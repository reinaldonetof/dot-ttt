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
  it("🤖 vs 👤 - should return best move 7 when random is 0.6", () => {
    const mockMath = jest.spyOn(Math, "random").mockReturnValue(0.6);

    const result = getBestMove({
      player1Selection: [],
      player2Selection: [],
      cpuPosition: "player1",
    });
    expect(result).toBe(7);
    mockMath.mockRestore();
  });
});
