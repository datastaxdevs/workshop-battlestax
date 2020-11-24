import { createSlice } from "@reduxjs/toolkit";
import { incrementAudienceSize } from "./gameSlice";
import constants from "../constants";
import _ from "lodash";

// name, vip, score
export const initialState = {};

export const slice = createSlice({
  name: "players",
  initialState,
  reducers: {
    add: (state, action) => {
      state[action.payload.name] = action.payload;
    },
    updateScore: (state, action) => {
      if (state[action.payload.name]) {
        state[action.payload.name].score = action.payload.score;
      }
    },
    reset: () => {
      return initialState;
    },
  },
});

export const addPlayer = (name, score) => {
  return (dispatch, getState) => {
    const { players } = getState();
    if (players[name] && score) {
      dispatch(
        slice.actions.updateScore({
          name,
          score,
        })
      );
    }
    if (players[name]) {
      return;
    }
    if (constants.MAXIMUM_PLAYERS <= _.keys(players).length) {
      return dispatch(incrementAudienceSize());
    }
    dispatch(
      slice.actions.add({
        name,
        score: score ? score : 0,
        vip: _.keys(players).length === 0,
      })
    );
  };
};

export const { updateScore } = slice.actions;

export const selectPlayers = (state) => state.players;

export default slice.reducer;
