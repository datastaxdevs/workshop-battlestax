import React from "react";
import TitleBar from "./TitleBar";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<TitleBar />);
});
