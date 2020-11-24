import React from "react";
import { createGame } from "../../../api";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { generateGameId } from "../../../util/random";
import { Button, Grid, Typography } from "@material-ui/core";
import { selectPlayers } from "../../../store/playersSlice";
import PlayerList from "../../../components/PlayerList";
import _ from "lodash";
import {
  initialize,
  resetGame,
  selectId,
  selectAudienceSize,
} from "../../../store/gameSlice";

export default function NewGame() {
  const dispatch = useDispatch();
  const history = useHistory();
  const players = useSelector(selectPlayers);
  const gameId = useSelector(selectId);
  const audienceSize = useSelector(selectAudienceSize);

  const createAndInitGame = () => {
    const newGameId = generateGameId();
    dispatch(resetGame());
    dispatch(initialize(newGameId));
    createGame(newGameId);
    history.push(`/lobby/${newGameId}`);
  };

  return (
    <Grid container justify="center">
      <Grid container direction="column" style={{ maxWidth: 1024 }}>
        <Grid container style={{ flexGrow: 1 }} alignItems="center">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              {_.isEmpty(players) && (
                <Typography color="textSecondary">welcome to</Typography>
              )}
              {!_.isEmpty(players) && (
                <Typography color="textSecondary">
                  thanks for playing
                </Typography>
              )}
              <Typography variant="h4" style={{ marginBottom: 64 }}>
                BattleStax
              </Typography>
              <Typography color="textSecondary">game code</Typography>
              <Typography variant="h1" className="highlight">
                {gameId || "----"}
              </Typography>
              <br />
              <Button
                style={{ marginTop: 32 }}
                disableElevation
                onClick={createAndInitGame}
                size="large"
                variant="contained"
                color="primary"
              >
                start new game
              </Button>
            </Grid>
            <PlayerList
              players={players}
              audienceSize={audienceSize}
              showScore={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
