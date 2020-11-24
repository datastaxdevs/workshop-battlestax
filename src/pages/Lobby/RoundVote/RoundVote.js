import React from "react";
import constants from "../../../constants";
import { updateGame } from "../../../api";
import { useSelector } from "react-redux";
import { selectAnswers } from "../../../store/answersSlice";
import { selectQuestions } from "../../../store/questionsSlice";
import { selectVotes } from "../../../store/votesSlice";
import { selectPlayers } from "../../../store/playersSlice";
import { useTheme } from "@material-ui/core/styles";
import _ from "lodash";
import {
  selectId,
  selectRound,
  selectQuestion,
} from "../../../store/gameSlice";
import {
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

const countVotes = (votes, answerId) => {
  const answerVotes = _.pickBy(votes, (vote) => vote.answer === answerId);
  return _.isEmpty(answerVotes) ? 0 : _.keys(answerVotes).length;
};

export default function RoundVote() {
  const gameId = useSelector(selectId);
  const roundId = useSelector(selectRound);
  const currentQuestionId = useSelector(selectQuestion);
  const currentRound = constants.ROUNDS.find((round) => round.id === roundId);
  const answers = useSelector(selectAnswers);
  const players = useSelector(selectPlayers);
  const questions = useSelector(selectQuestions);
  const votes = useSelector(selectVotes);
  const [votedQuestions, setVotedQuestions] = React.useState([]);
  const theme = useTheme();

  React.useEffect(() => {
    const roundQuestions = _.pickBy(
      questions,
      (question) => question.round === roundId
    );
    const questionAnswers = _.pickBy(
      answers,
      (answer) => answer.question === currentQuestionId
    );
    const answerVotes = _.pickBy(votes, (vote) =>
      _.keys(questionAnswers).includes(vote.answer)
    );
    if (_.keys(players).length - 2 <= _.keys(answerVotes).length) {
      console.log(`voting complete for ${currentQuestionId}`);
      const newVotedQuestions = votedQuestions.concat([currentQuestionId]);
      setVotedQuestions(newVotedQuestions);
      const remaingQuestions = _.difference(
        _.keys(roundQuestions),
        newVotedQuestions
      );
      if (remaingQuestions.length === 0) {
        console.log(`round complete: ${roundId}`);
        updateGame(`${gameId}/game`, {
          page: constants.ROUND_SCORE_PAGE,
          question: "",
        });
      } else {
        updateGame(`${gameId}/game`, {
          question: remaingQuestions[0],
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [votes]);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12}>
        <Typography color="textSecondary" paragraph>
          {currentRound && currentRound.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" paragraph>
          {questions[currentQuestionId] && questions[currentQuestionId].content}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          {_.keys(
            _.pickBy(answers, (answer) => answer.question === currentQuestionId)
          ).map((answerId) => (
            <ListItem key={answerId}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  style={{ backgroundColor: theme.palette.primary.main }}
                >
                  {countVotes(votes, answerId)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h5">
                    {answers[answerId].content}
                  </Typography>
                }
              />
              <Divider />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
