import React from "react";
import { render } from "@testing-library/react";
import Waiting from "./Waiting";

test("renders without crashing", () => {
  render(<Waiting />);
});
