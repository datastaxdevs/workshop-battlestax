import { createSlice } from "@reduxjs/toolkit";
import { generateGameId } from "../util/random";

export const initialState = {
  id: "",
  idError: "",
  idLoading: false,
};

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // let's add a reducer that sets the game id
    setId: (state, action) => {
      state.id = action.payload;
    },
    // let's add a reducer that sets an error message
    setIdError: (state, action) => {
      state.idError = action.payload;
    },
    // let's add a reducer that sets a loading state
    setIdLoading: (state, action) => {
      state.idLoading = action.payload;
    },
  },
});

// let's export our actions and selectors
export const { setId, setIdLoading, setIdError } = slice.actions;
export const selectGame = (state) => state.game;

// let's create an asnyc action to create a new game
export const createGame = () => {
  return async (dispatch) => {
    // let's set the id state back to the defaults
    dispatch(setIdLoading(true));
    dispatch(setIdError(""));
    dispatch(setId(""));

    try {
      // let's generate a new game id
      const gameId = generateGameId();

      // let's call our insert game netlify function
      const res = await fetch(`/.netlify/functions/insertGame/${gameId}`, {
        method: "POST",
        body: JSON.stringify({ state: "initialized" }),
      });
      if (!res.ok) {
        throw Error(res.statusText);
      }

      // let's set the game id
      const resJson = await res.json();
      dispatch(setId(resJson.documentId));
    } catch (e) {
      // let's set the id error if there is one
      dispatch(setIdError(e.message));
    }

    // let's set the id state to not loading
    dispatch(setIdLoading(false));
  };
};

export default slice.reducer;
