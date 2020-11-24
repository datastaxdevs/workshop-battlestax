import { generateShortId } from "../util/random";
import _ from "lodash";
import reducer, { slice, initialState, selectVotes } from "./votesSlice";

describe("votes slice", () => {
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

  it("should set all votes", () => {
    const voteId = generateShortId();
    const votes = {
      [voteId]: {
        id: voteId,
        answer: generateShortId(),
        player: generateShortId(),
      },
    };
    const nextState = reducer(initialState, slice.actions.setAll(votes));
    const rootState = { votes: nextState };
    expect(_.keys(selectVotes(rootState)).length).toEqual(1);
    expect(selectVotes(rootState)[voteId].id).toEqual(votes[voteId].id);
  });
});
