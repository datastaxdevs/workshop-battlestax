import React from "react";
import AddPlayers from "./AddPlayers";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <AddPlayers />
    </Provider>
  );
});
