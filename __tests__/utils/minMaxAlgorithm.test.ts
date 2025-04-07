import { getBestMove } from "../../src/utils/minMaxAlgorithm";

describe("getBestMove", () => {
  it("👤 vs 🤖 - should return best move 5", () => {
    const result = getBestMove({
      player1Selection: [1],
      player2Selection: [],
      cpuPosition: "player2",
    });
    expect(result).toBe(5);
  });
  it("👤 vs 🤖 - should return best move 3 for player2", () => {
    const result = getBestMove({
      player1Selection: [1, 5],
      player2Selection: [2],
      cpuPosition: "player2",
    });
    expect(result).toBe(3);
  });

  it("👤 vs 🤖 - should return best move 9 for player2", () => {
    const result = getBestMove({
      player1Selection: [1, 3, 6],
      player2Selection: [2, 4],
      cpuPosition: "player2",
    });
    expect(result).toBe(9);
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
  it("🤖 vs 👤 - should return best move 4 for player1", () => {
    const result = getBestMove({
      player1Selection: [5, 1],
      player2Selection: [2, 9],
      cpuPosition: "player1",
    });
    expect(result).toBe(4);
  });
  it("🤖 vs 👤 - should return best move 5 for player1", () => {
    const result = getBestMove({
      player1Selection: [1, 3],
      player2Selection: [2, 4],
      cpuPosition: "player1",
    });
    expect(result).toBe(5);
  });
});
