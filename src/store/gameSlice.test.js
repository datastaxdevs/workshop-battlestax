import { generateGameId } from "../util/random";
import constants from "../constants";
import reducer, {
  initialState,
  initialize,
  slice,
  incrementAudienceSize,
  setPlayer,
  selectId,
  selectPage,
  selectAudienceSize,
  selectPlayer,
} from "./gameSlice";

describe("game slice", () => {
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

  it("should initialize a game", () => {
    const gameId = generateGameId();
    const nextState = reducer(initialState, initialize(gameId));
    const rootState = { game: nextState };
    expect(selectId(rootState)).toEqual(gameId);
    expect(selectPage(rootState)).toEqual(constants.ADDING_PLAYERS_PAGE);
  });

  it("should add audience members", () => {
    const nextState = reducer(initialState, incrementAudienceSize());
    const rootState = { game: nextState };
    expect(selectAudienceSize(rootState)).toEqual(1);
  });

  it("should set the current player", () => {
    const player = "CRW";
    const nextState = reducer(initialState, setPlayer(player));
    const rootState = { game: nextState };
    expect(selectPlayer(rootState)).toEqual(player);
  });
});
