import React from "react";
import PlayerLayout from "./PlayerLayout";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <PlayerLayout />
    </Provider>
  );
});
