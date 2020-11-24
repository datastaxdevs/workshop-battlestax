import React from "react";
import RoundScore from "./RoundScore";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <RoundScore />
      </MemoryRouter>
    </Provider>
  );
});
