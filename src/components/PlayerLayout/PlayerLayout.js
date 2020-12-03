import React from "react";
import { useSelector } from "react-redux";
import constants from "../../constants";
import {
  selectPage,
  selectPlayer,
  selectId,
  selectRequestDuration,
} from "../../store/gameSlice";
import AddPlayers from "../../pages/Player/AddPlayers";
import RoundInput from "../../pages/Player/RoundInput";
import RoundVote from "../../pages/Player/RoundVote";
import Waiting from "../../pages/Player/Waiting";
import Final from "../../pages/Player/Final";
import { useGamePollingInterval } from "../../util/hooks";
import TitleBar from "../TitleBar";
import { Grid } from "@material-ui/core";

const getPage = (page) => {
  switch (page) {
    case constants.ADDING_PLAYERS_PAGE:
      return <AddPlayers />;
    case constants.ROUND_INPUT_PAGE:
      return <RoundInput />;
    case constants.ROUND_VOTE_PAGE:
      return <RoundVote />;
    case constants.FINAL_PAGE:
      return <Final />;
    default:
      return <Waiting />;
  }
};

export default function PlayerLayout() {
  const page = useSelector(selectPage);
  const player = useSelector(selectPlayer);
  const gameId = useSelector(selectId);
  const requestDuration = useSelector(selectRequestDuration);
  useGamePollingInterval();

  return (
    <Grid container justify="center">
      <Grid container direction="column" style={{ maxWidth: 320 }}>
        <TitleBar
          player={player}
          gameId={gameId}
          requestDuration={requestDuration}
        />
        <Grid container style={{ flexGrow: 1 }} alignItems="center">
          <Grid item>{getPage(page)}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
