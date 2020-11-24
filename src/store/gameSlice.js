import { createSlice } from "@reduxjs/toolkit";

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
    // let's add a reducer that sets an error message
    // let's add a reducer that sets a loading state
  },
});

// let's export our actions and selectors

// let's create an asnyc action to create a new game
export const createGame = () => {
  return async (dispatch) => {
    // let's set the id state back to the defaults
    try {
      // let's generate a new game id
      // let's call our insert game netlify function
      // let's set the game id
    } catch (e) {
      // let's set the id error if there is one
    }
    // let's set the id state to not loading
  };
};

export default slice.reducer;
