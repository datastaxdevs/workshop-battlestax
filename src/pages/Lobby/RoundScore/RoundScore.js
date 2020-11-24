import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateGame } from "../../../api";
import { selectPlayers } from "../../../store/playersSlice";
import { selectAnswers } from "../../../store/answersSlice";
import { selectQuestions } from "../../../store/questionsSlice";
import { selectVotes } from "../../../store/votesSlice";
import PlayerList from "../../../components/PlayerList";
import { Grid } from "@material-ui/core";
import _ from "lodash";
import constants from "../../../constants";
import {
  selectId,
  selectRound,
  selectAudienceSize,
} from "../../../store/gameSlice";

export default function RoundScore() {
  const history = useHistory();
  const players = useSelector(selectPlayers);
  const gameId = useSelector(selectId);
  const roundId = useSelector(selectRound);
  const currentRound = constants.ROUNDS.find((round) => round.id === roundId);
  const audienceSize = useSelector(selectAudienceSize);
  const answers = useSelector(selectAnswers);
  const questions = useSelector(selectQuestions);
  const votes = useSelector(selectVotes);

  const updateScore = () => {
    const roundQuestions = _.pickBy(
      questions,
      (question) => question.round === roundId
    );
    const roundAnswers = _.pickBy(answers, (answer) =>
      _.keys(roundQuestions).includes(answer.question)
    );
    const roundVotes = _.pickBy(votes, (vote) =>
      _.keys(roundAnswers).includes(vote.answer)
    );
    const currentRoundId = currentRound ? currentRound.id : 0;
    const nextRound = currentRoundId + 1;
    const newPlayers = _.cloneDeep(players);
    _.keys(roundVotes).forEach((voteId) => {
      const player = roundAnswers[roundVotes[voteId].answer].player;
      newPlayers[player] = {
        score:
          constants.BASE_POINTS * currentRound.scoreMultiplier +
          parseInt(newPlayers[player].score),
      };
    });
    updateGame(`${gameId}/players`, newPlayers);
    setTimeout(() => {
      let next = { page: constants.FINAL_PAGE, round: "" };
      if (nextRound <= constants.ROUNDS.length) {
        next = { page: constants.ROUND_INPUT_PAGE, round: nextRound };
      }
      updateGame(`${gameId}/game`, next);
      if (next.page === constants.FINAL_PAGE) {
        history.push("/lobby");
      }
    }, constants.ROUND_SCORE_TIMER);
  };

  React.useEffect(
    updateScore,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <PlayerList
        players={players}
        audienceSize={audienceSize}
        showScore={true}
      />
    </Grid>
  );
}
