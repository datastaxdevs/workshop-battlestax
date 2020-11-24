import reducer, {
  initialState,
  slice,
  toggleInitialized,
  selectInitialized,
} from "./appSlice";

describe("app slice", () => {
  it("should return the initial state on first run", () => {
    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it("should reset the state", () => {
    const nextState = initialState;
    const result = reducer(null, slice.actions.reset());
    expect(result).toEqual(nextState);
  });

  it("should toggle initialized", () => {
    const nextState = reducer(initialState, toggleInitialized());
    const rootState = { app: nextState };
    expect(selectInitialized(rootState)).toEqual(false);
  });
});
