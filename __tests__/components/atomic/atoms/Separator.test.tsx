import { render, screen } from "@testing-library/react-native";
import Separator from "../../../../src/components/atomic/atoms/Separator";
import {
  PADDING_INNER,
  SEPARATOR_WIDTH,
} from "../../../../src/components/constants";

describe("Separator", () => {
  it("should render correctly", () => {
    render(<Separator />);
    const separator = screen.getByTestId("separator");
    expect(separator).toBeTruthy();
  });

  it("should have the correct styles", () => {
    const width = 360 - PADDING_INNER * 2 - SEPARATOR_WIDTH * 2;
    render(<Separator />);
    const separator = screen.getByTestId("separator");
    expect(separator.props.style).toEqual({
      backgroundColor: "#8dc3ec",
      height: 4,
      width,
    });
  });
});
