import { createSlice } from "@reduxjs/toolkit";

// id, question, player, content
export const initialState = {};

export const slice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setAll: (state, action) => {
      return action.payload;
    },
    addAnswer: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { addAnswer } = slice.actions;

export const selectAnswers = (state) => state.answers;

export default slice.reducer;
