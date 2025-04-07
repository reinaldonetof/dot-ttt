import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import TTTSquare from "../../../../src/components/atomic/molecules/TTTSquare";
import { useGameRound } from "../../../../src/storage/useGameRound";

describe("TTTSquare Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the square with the correct value", () => {
    render(<TTTSquare index={9} />);
    expect(screen.getByTestId("TTTSquare-undefined-9")).toBeTruthy();
  });

  it("should call onClick when the square is clicked", () => {
    const setGameRound = jest.fn();
    (useGameRound as unknown as jest.Mock).mockReturnValue({
      turn: "player1",
      setGameRound,
      boxSelected: { 1: "player1" },
    });
    render(<TTTSquare index={5} />);
    const touchable = screen.getByTestId("TTTSquare-undefined-5");
    expect(touchable).toBeTruthy();
    fireEvent.press(touchable);
    expect(setGameRound).toHaveBeenCalledWith({
      index: 5,
      player: "player1",
    });
  });
});
