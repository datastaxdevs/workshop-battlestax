import React from "react";
import Final from "./Final";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Final />
      </MemoryRouter>
    </Provider>
  );
});
