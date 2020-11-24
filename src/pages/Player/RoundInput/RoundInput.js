import React from "react";
import { useSelector } from "react-redux";
import { Button, TextField, Typography } from "@material-ui/core";
import { selectQuestions } from "../../../store/questionsSlice";
import { selectAnswers } from "../../../store/answersSlice";
import { selectRound, selectPlayer, selectId } from "../../../store/gameSlice";
import { updateGame } from "../../../api";
import constants from "../../../constants";
import Waiting from "../Waiting";
import _ from "lodash";

export default function RoundInput() {
  const questions = useSelector(selectQuestions);
  const answers = useSelector(selectAnswers);
  const roundId = useSelector(selectRound);
  const player = useSelector(selectPlayer);
  const gameId = useSelector(selectId);
  const currentRound = constants.ROUNDS.find((round) => round.id === roundId);
  const playerAnswers = _.pickBy(answers, (answer, answerId) => {
    return (
      answer.player === player &&
      questions[answers[answerId].question].round === roundId
    );
  });
  const [response, setResponse] = React.useState(_.cloneDeep(playerAnswers));
  const [responseSent, setResponseSent] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const submitResponse = async () => {
    setResponseSent(true);
    await updateGame(`${gameId}/answers`, response);
  };

  React.useEffect(() => {
    let disabled = false;
    _.keys(response).forEach((responseKey) => {
      if (!response[responseKey].content) {
        disabled = true;
      }
    });
    setButtonDisabled(disabled);
  }, [response]);

  if (responseSent) {
    return <Waiting/>;
  }

  return (
    <React.Fragment>
      <Typography variant="h5" paragraph>
        {currentRound && currentRound.title}
      </Typography>
      {_.keys(playerAnswers).map((answerId) => (
        <React.Fragment key={answerId}>
          <Typography paragraph style={{ marginTop: 32 }}>
            {questions[answers[answerId].question].content}
          </Typography>
          <TextField
            label="response"
            variant="outlined"
            value={response[answerId].content || ""}
            onChange={(e) =>
              setResponse({
                ...response,
                [answerId]: { ...response[answerId], content: e.target.value },
              })
            }
          />
        </React.Fragment>
      ))}
      <Button
        style={{ marginTop: 32 }}
        fullWidth
        disableElevation
        size="large"
        disabled={buttonDisabled}
        variant="contained"
        color="primary"
        onClick={submitResponse}
      >
        submit
      </Button>
    </React.Fragment>
  );
}
