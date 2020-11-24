import { generateShortId } from "../util/random";
import _ from "lodash";
import reducer, {
  slice,
  initialState,
  addAnswer,
  selectAnswers,
} from "./answersSlice";

describe("answers slice", () => {
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

  it("should set all answers", () => {
    const answerId = generateShortId();
    const answers = {
      [answerId]: {
        id: answerId,
        question: generateShortId(),
        player: generateShortId(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    };
    const nextState = reducer(initialState, slice.actions.setAll(answers));
    const rootState = { answers: nextState };
    expect(_.keys(selectAnswers(rootState)).length).toEqual(1);
    expect(selectAnswers(rootState)[answerId].id).toEqual(answers[answerId].id);
  });

  it("should add an answer", () => {
    const answer = {
      id: generateShortId(),
      question: generateShortId(),
      player: generateShortId(),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    };
    const nextState = reducer(initialState, addAnswer(answer));
    const rootState = { answers: nextState };
    expect(_.keys(selectAnswers(rootState)).length).toEqual(1);
    expect(selectAnswers(rootState)[answer.id].id).toEqual(answer.id);
  });
});
