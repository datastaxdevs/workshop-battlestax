import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./index";
import { generateShortId } from "../util/random";
import { addPlayer } from "./playersSlice";
import _ from "lodash";
import reducer, {
  slice,
  initialState,
  initializeQuestionsAndAnswers,
  selectQuestions,
} from "./questionsSlice";

describe("questions slice", () => {
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

  it("should set all questions", () => {
    const questionId = generateShortId();
    const questions = {
      [questionId]: {
        id: questionId,
        round: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    };
    const nextState = reducer(initialState, slice.actions.setAll(questions));
    const rootState = { questions: nextState };
    expect(_.keys(selectQuestions(rootState)).length).toEqual(1);
    expect(selectQuestions(rootState)[questionId].id).toEqual(
      questions[questionId].id
    );
  });

  it("should add a question", () => {
    const question = {
      id: generateShortId(),
      round: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    };
    const nextState = reducer(initialState, slice.actions.add(question));
    const rootState = { questions: nextState };
    expect(_.keys(selectQuestions(rootState)).length).toEqual(1);
    expect(selectQuestions(rootState)[question.id].id).toEqual(question.id);
  });

  describe("integrated tests", () => {
    const store = configureStore({
      reducer: reducers,
    });

    it("should initialize questions and answers", () => {
      ["CRW", "DKG", "JRG", "PKI", "ANG"].forEach((player) => {
        store.dispatch(addPlayer(player));
      });
      store.dispatch(initializeQuestionsAndAnswers());
      const { questions, answers, players } = store.getState();
      expect(_.keys(answers).length).toEqual(_.keys(players).length * 4);
      expect(_.keys(questions).length).toEqual(_.keys(players).length * 2);
    });
  });
});
