import React, { useState } from "react";
import { addPlayer } from "../../../api";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectId,
  selectPlayer,
  setPlayer,
  initialize,
} from "../../../store/gameSlice";
import { Button, TextField, Grid, Typography } from "@material-ui/core";

export default function JoinGame() {
  const dispatch = useDispatch();
  const gameId = useSelector(selectId);
  const player = useSelector(selectPlayer);
  const history = useHistory();
  const [newPlayer, setNewPlayer] = useState(player);
  const [newGameId, setNewGameId] = useState(gameId);

  const joinGame = async (e) => {
    const newGameIdUpper = newGameId.toUpperCase();
    await addPlayer(newGameIdUpper, newPlayer);
    dispatch(setPlayer(newPlayer));
    dispatch(initialize(newGameIdUpper));
    history.push(`/player/${newGameIdUpper}`);
  };

  return (
    <Grid container justify="center">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ width: 320 }}
      >
        <Grid item style={{ width: 300, marginBottom: 16 }}>
          <Typography color="textSecondary">welcome to</Typography>
          <Typography variant="h5" paragraph>
            BattleStax
          </Typography>
        </Grid>

        <TextField
          style={{ marginBottom: 16 }}
          label="name"
          variant="outlined"
          onChange={(e) => setNewPlayer(e.target.value)}
          value={newPlayer}
        />
        <TextField
          style={{ marginBottom: 16 }}
          inputProps={{ style: { textTransform: "uppercase" } }}
          label="game code"
          variant="outlined"
          value={newGameId}
          onChange={(e) => setNewGameId(e.target.value)}
        />
        <Button
          fullWidth
          disableElevation
          onClick={joinGame}
          size="large"
          variant="contained"
          color="primary"
        >
          join game
        </Button>
      </Grid>
    </Grid>
  );
}
