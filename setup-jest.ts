import "@testing-library/react-native/extend-expect";

jest.mock("react-native/Libraries/Utilities/useWindowDimensions", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    width: 360,
    height: 640,
    scale: 2,
    fontScale: 1,
  })),
}));

jest.mock("./src/storage/useGameRound", () => ({
  useGameRound: jest.fn(() => ({
    turn: "player1",
    setGameRound: jest.fn(),
    boxSelected: {},
  })),
}));

jest.mock("./src/storage/useGameConfig", () => ({
  useGameConfig: jest.fn(() => ({
    player1Symbol: "X",
    player2Symbol: "O",
    isPlayer1Cpu: false,
    isPlayer2Cpu: false,
  })),
}));
