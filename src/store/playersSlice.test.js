import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./index";
import { generateShortId } from "../util/random";
import constants from "../constants";
import _ from "lodash";
import reducer, {
  slice,
  initialState,
  addPlayer,
  selectPlayers,
  updateScore,
} from "./playersSlice";

describe("players slice", () => {
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

  it("should add a player via the reducer", () => {
    const player = { name: "CRW" };
    const nextState = reducer(initialState, slice.actions.add(player));
    const rootState = { players: nextState };
    expect(_.keys(selectPlayers(rootState)).length).toEqual(1);
    expect(selectPlayers(rootState)[player.name].name).toEqual(player.name);
  });

  it("should update a player's score", () => {
    const player = { name: "CRW", score: 0 };
    const state = reducer(initialState, slice.actions.add(player));
    const nextState = reducer(state, updateScore({ name: "CRW", score: 100 }));
    const rootState = { players: nextState };
    expect(selectPlayers(rootState)[player.name].score).toEqual(100);
  });

  describe("integrated tests", () => {
    const store = configureStore({
      reducer: reducers,
    });

    it("should add a player", () => {
      const player = "CRW";
      store.dispatch(addPlayer(player));
      const { players } = store.getState();
      expect(_.keys(players).length).toEqual(1);
      expect(players[player].name).toEqual(player);
      expect(players[player].score).toEqual(0);
      expect(players[player].vip).toEqual(true);
    });

    it("should only have one VIP", () => {
      const player = "Not VIP";
      store.dispatch(addPlayer(player));
      const { players } = store.getState();
      expect(_.keys(players).length).toEqual(2);
      expect(players[player].name).toEqual(player);
      expect(players[player].vip).toEqual(false);
    });

    it("should not allow duplicate players", () => {
      const player = "CRW2";
      store.dispatch(addPlayer(player));
      let { players } = store.getState();
      expect(_.keys(players).length).toEqual(3);

      store.dispatch(addPlayer(player));
      expect(_.keys(store.getState().players).length).toEqual(3);
    });

    it(`should only allow ${constants.MAXIMUM_PLAYERS} players to join`, () => {
      for (let i = 0, ilen = constants.MAXIMUM_PLAYERS; i < ilen; i++) {
        store.dispatch(addPlayer(generateShortId()));
      }
      const state = store.getState();
      expect(_.keys(state.players).length).toEqual(constants.MAXIMUM_PLAYERS);
      expect(state.game.audienceSize).toEqual(3);
    });

    it(`should increment audience size when too many players join`, () => {
      store.dispatch(addPlayer(generateShortId()));
      const state = store.getState();
      expect(state.game.audienceSize).toEqual(4);
    });
  });
});
