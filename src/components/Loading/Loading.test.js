import React from "react";
import Loading from "./Loading";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<Loading />);
});
