import { useWindowDimensions } from "react-native";
import { PADDING_INNER, SEPARATOR_WIDTH } from "../components/constants";

export const useDimensions = () => {
  const { height, width } = useWindowDimensions();

  const size = Math.min(height, width);

  const boxSize = size / 3 - SEPARATOR_WIDTH - PADDING_INNER;
  return {
    boxSize,
    size,
    isPortrait: height > width,
  };
};
