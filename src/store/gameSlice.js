import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants";
import { slice as appSlice } from "./appSlice";
import { slice as playersSlice } from "./playersSlice";
import { slice as questionsSlice } from "./questionsSlice";
import { slice as answersSlice } from "./answersSlice";

export const initialState = {
  id: "",
  audienceSize: 0,
  page: "",
  round: "",
  question: "",
  player: "",
  requestDuration: 0,
};

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initialize: (state, action) => {
      state.id = action.payload;
      state.page = constants.ADDING_PLAYERS_PAGE;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setRound: (state, action) => {
      state.round = action.payload;
    },
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setRequestDuration: (state, action) => {
      state.requestDuration = action.payload;
    },
    incrementAudienceSize: (state) => {
      state.audienceSize += 1;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const resetGame = () => {
  return (dispatch) => {
    dispatch(slice.actions.reset());
    dispatch(appSlice.actions.reset());
    dispatch(playersSlice.actions.reset());
    dispatch(questionsSlice.actions.reset());
    dispatch(answersSlice.actions.reset());
    localStorage.removeItem(constants.LOCAL_STORAGE_KEY);
  };
};

export const {
  initialize,
  setPage,
  setRound,
  setQuestion,
  setPlayer,
  setId,
  setRequestDuration,
  incrementAudienceSize,
} = slice.actions;

export const selectId = (state) => state.game.id;
export const selectPage = (state) => state.game.page;
export const selectRound = (state) => state.game.round;
export const selectQuestion = (state) => state.game.question;
export const selectAudienceSize = (state) => state.game.audienceSize;
export const selectPlayer = (state) => state.game.player;
export const selectRequestDuration = (state) => state.game.requestDuration;

export default slice.reducer;
