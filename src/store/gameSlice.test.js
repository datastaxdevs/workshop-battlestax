import { generateGameId } from "../util/random";
import fetchMock from "fetch-mock";
import store from "./index";
import reducer, {
  initialState,
  setId,
  setIdLoading,
  setIdError,
  selectGame,
  createGame,
} from "./gameSlice";

describe("game slice", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should return the initial state on first run", () => {
    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it("should set a game id", () => {
    const gameId = generateGameId();
    const nextState = reducer(initialState, setId(gameId));
    const rootState = { game: nextState };
    expect(selectGame(rootState).id).toEqual(gameId);
  });

  it("should set the game id loading flag", () => {
    const gameId = generateGameId();
    const nextState = reducer(initialState, setIdLoading(true));
    const rootState = { game: nextState };
    expect(selectGame(rootState).idLoading).toEqual(true);
  });

  it("should set the game id error", () => {
    const nextState = reducer(initialState, setIdError("nope"));
    const rootState = { game: nextState };
    expect(selectGame(rootState).idError).toEqual("nope");
  });

  it("should create a new game", async () => {
    fetchMock.postOnce("*", {
      body: { documentId: "DANG" },
    });
    store.dispatch(createGame());
    const initialState = store.getState();
    expect(selectGame(initialState).idError).toEqual("");
    expect(selectGame(initialState).idLoading).toEqual(true);
    expect(selectGame(initialState).id).toEqual("");
    await new Promise((resolve) => setTimeout(resolve, 500));
    const finalState = store.getState();
    expect(selectGame(finalState).idError).toEqual("");
    expect(selectGame(finalState).idLoading).toEqual(false);
    expect(selectGame(finalState).id).toEqual("DANG");
  });
});
