import React from "react";
import { useSelector } from "react-redux";
import { selectPlayers } from "../../../store/playersSlice";
import PlayerList from "../../../components/PlayerList";
import { Grid, Typography } from "@material-ui/core";
import { selectId, selectAudienceSize } from "../../../store/gameSlice";

export default function AddPlayers() {
  const players = useSelector(selectPlayers);
  const gameId = useSelector(selectId);
  const audienceSize = useSelector(selectAudienceSize);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Typography color="textSecondary">welcome to</Typography>
        <Typography variant="h4" style={{ marginBottom: 64 }}>
          BattleStax
        </Typography>
        <Typography color="textSecondary">game code</Typography>
        <Typography variant="h1" className="highlight">
          {gameId}
        </Typography>
      </Grid>
      <PlayerList players={players} audienceSize={audienceSize} />
    </Grid>
  );
}
