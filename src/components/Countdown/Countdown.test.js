import React from "react";
import Countdown from "./Countdown";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<Countdown duration={1000} />);
});
