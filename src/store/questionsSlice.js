import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants";
import { generateShortId } from "../util/random";
import { addAnswer } from "./answersSlice";
import _ from "lodash";

// id, roundId, content
export const initialState = {};

export const slice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setAll: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const initializeQuestionsAndAnswers = () => {
  return (dispatch, getState) => {
    const { players } = getState();
    const playerNames = _.keys(players);
    constants.ROUNDS.forEach((round) => {
      const roundQuestions = _.sampleSize(
        round.content,
        playerNames.length
      ).map((content) => {
        const question = {
          id: generateShortId(),
          round: round.id,
          content,
        };
        dispatch(slice.actions.add(question));
        return question;
      });

      const sortedPlayerNames = _.sampleSize(playerNames, playerNames.length);
      roundQuestions.forEach((question, index) => {
        const incrementedIndex = index + 1 < playerNames.length ? index + 1 : 0;
        [index, incrementedIndex].forEach((playerIndex) => {
          dispatch(
            addAnswer({
              id: generateShortId(),
              question: question.id,
              player: sortedPlayerNames[playerIndex],
              content: null,
            })
          );
        });
      });
    });
  };
};

export const selectQuestions = (state) => state.questions;

export default slice.reducer;
