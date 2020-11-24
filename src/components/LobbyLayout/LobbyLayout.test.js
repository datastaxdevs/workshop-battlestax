import React from "react";
import LobbyLayout from "./LobbyLayout";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <LobbyLayout />
    </Provider>
  );
});
