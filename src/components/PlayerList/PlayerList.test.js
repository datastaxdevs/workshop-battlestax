import React from "react";
import PlayerList from "./PlayerList";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<PlayerList />);
});
