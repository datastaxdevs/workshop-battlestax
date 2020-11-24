import React from "react";
import JoinGame from "./JoinGame";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <JoinGame />
      </MemoryRouter>
    </Provider>
  );
});
