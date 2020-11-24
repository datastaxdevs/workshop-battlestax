import { createSlice } from "@reduxjs/toolkit";

// id, answer, player
export const initialState = {};

export const slice = createSlice({
  name: "votes",
  initialState,
  reducers: {
    setAll: (state, action) => {
      return action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const selectVotes = (state) => state.votes;

export default slice.reducer;
