import React from "react";
import constants from "../../../constants";
import { updateGame } from "../../../api";
import { useSelector, useDispatch, useStore } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { selectId } from "../../../store/gameSlice";
import { initializeQuestionsAndAnswers } from "../../../store/questionsSlice";
import Countdown from "../../../components/Countdown";

export default function Tutorial() {
  const dispatch = useDispatch();
  const gameId = useSelector(selectId);
  const store = useStore();

  React.useEffect(() => {
    const setQuestionsAndAnswers = async () => {
      dispatch(initializeQuestionsAndAnswers());
      const { questions, answers } = store.getState();
      await updateGame(gameId, {
        questions,
        answers,
      });
    };
    setQuestionsAndAnswers();
    setTimeout(async () => {
      await updateGame(`${gameId}/game`, {
        page: constants.ROUND_INPUT_PAGE,
        round: constants.ROUNDS[0].id,
      });
    }, constants.TUTORIAL_LENGTH);
  }, [gameId, dispatch, store]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h6" paragraph>
          Listen, this is easy, just answer the questions.
        </Typography>
        <Typography variant="h6" style={{ marginBottom: 64 }}>
          Then, vote for your favorites.
        </Typography>
      </Grid>

      <Countdown duration={constants.TUTORIAL_LENGTH} />
    </Grid>
  );
}
