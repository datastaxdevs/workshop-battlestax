import React from "react";
import { useSelector } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import { selectAnswers } from "../../../store/answersSlice";
import { selectQuestions } from "../../../store/questionsSlice";
import {
  selectPlayer,
  selectId,
  selectQuestion,
} from "../../../store/gameSlice";
import { updateGame } from "../../../api";
import Waiting from "../Waiting";
import _ from "lodash";

export default function RoundVote() {
  const gameId = useSelector(selectId);
  const player = useSelector(selectPlayer);
  const currentQuestionId = useSelector(selectQuestion);
  const questions = useSelector(selectQuestions);
  const answers = useSelector(selectAnswers);
  const questionAnswers = _.pickBy(
    answers,
    (answer) => answer.question === currentQuestionId
  );
  const [votedQuestions, setVotedQuestions] = React.useState([]);

  const sendVote = (answerId) => {
    setVotedQuestions(votedQuestions.concat([currentQuestionId]));
    updateGame(`${gameId}/votes`, {
      [`${player}-${currentQuestionId}`]: {
        player,
        answer: answerId,
      },
    });
  };

  if (
    votedQuestions.includes(currentQuestionId) ||
    !_.isEmpty(_.pickBy(questionAnswers, (answer) => answer.player === player))
  ) {
    return <Waiting />;
  }

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography paragraph>
          {questions[currentQuestionId] && questions[currentQuestionId].content}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {_.keys(questionAnswers).map((answerId) => (
          <Button
            key={answerId}
            style={{ marginTop: 16 }}
            fullWidth
            disableElevation
            size="large"
            disabled={votedQuestions.includes(currentQuestionId)}
            variant="contained"
            color="primary"
            onClick={() => sendVote(answerId)}
          >
            {answers[answerId].content}
          </Button>
        ))}
      </Grid>
    </React.Fragment>
  );
}
