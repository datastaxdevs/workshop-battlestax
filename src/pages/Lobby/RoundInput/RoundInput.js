import React from "react";
import constants from "../../../constants";
import { updateGame } from "../../../api";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { selectId, selectRound } from "../../../store/gameSlice";
import { selectAnswers } from "../../../store/answersSlice";
import { selectQuestions } from "../../../store/questionsSlice";
import Countdown from "../../../components/Countdown";
import _ from "lodash";

export default function RoundInput() {
  const gameId = useSelector(selectId);
  const roundId = useSelector(selectRound);
  const answers = useSelector(selectAnswers);
  const questions = useSelector(selectQuestions);
  const [shouldTransition, setShouldTransition] = React.useState(false);

  React.useEffect(() => {
    const expiredTimeout = setTimeout(() => {
      setShouldTransition(true);
    }, constants.ROUND_INPUT_TIMER);
    return () => clearTimeout(expiredTimeout);
  }, []);

  React.useEffect(() => {
    const roundAnswers = _.pickBy(answers, (answer, answerId) => {
      return questions[answers[answerId].question].round === roundId;
    });

    let transition = true;
    _.keys(roundAnswers).forEach((roundAnswerId) => {
      if (!roundAnswers[roundAnswerId].content) {
        transition = false;
      }
    });
    setShouldTransition(transition);
  }, [answers, questions, roundId, gameId]);

  React.useEffect(() => {
    if (shouldTransition) {
      const roundQuestionIds = _.keys(
        _.pickBy(questions, (question) => question.round === roundId)
      );
      updateGame(`${gameId}/game`, {
        page: constants.ROUND_VOTE_PAGE,
        question: roundQuestionIds[0],
      });
    }
  }, [gameId, shouldTransition, questions, roundId]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={6}>
        <Typography paragraph>
          Two statements have been sent to your device, hurry up and fill them
          in!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Countdown duration={constants.ROUND_INPUT_TIMER} />
      </Grid>
    </Grid>
  );
}
