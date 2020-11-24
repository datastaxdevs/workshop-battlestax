import React from "react";
import { useSelector } from "react-redux";
import constants from "../../constants";
import { Grid } from "@material-ui/core";
import AddPlayers from "../../pages/Lobby/AddPlayers";
import Tutorial from "../../pages/Lobby/Tutorial";
import RoundInput from "../../pages/Lobby/RoundInput";
import RoundVote from "../../pages/Lobby/RoundVote";
import RoundScore from "../../pages/Lobby/RoundScore";
import {
  selectPage,
  selectId,
  selectRequestDuration,
} from "../../store/gameSlice";
import { selectPlayers } from "../../store/playersSlice";
import { useGamePollingInterval } from "../../util/hooks";
import TitleBar from "../TitleBar";
import _ from "lodash";

const getPage = (page) => {
  switch (page) {
    case constants.ADDING_PLAYERS_PAGE:
      return <AddPlayers />;
    case constants.TUTORIAL_PAGE:
      return <Tutorial />;
    case constants.ROUND_INPUT_PAGE:
      return <RoundInput />;
    case constants.ROUND_VOTE_PAGE:
      return <RoundVote />;
    case constants.ROUND_SCORE_PAGE:
      return <RoundScore />;
    default:
      return <React.Fragment />;
  }
};

export default function LobbyLayout() {
  const page = useSelector(selectPage);
  const gameId = useSelector(selectId);
  const players = useSelector(selectPlayers);
  const requestDuration = useSelector(selectRequestDuration);
  useGamePollingInterval();

  return (
    <Grid container justify="center">
      <Grid container direction="column" style={{ maxWidth: 1024 }}>
        <TitleBar
          gameId={gameId}
          playerCount={_.keys(players).length}
          requestDuration={requestDuration}
        />
        <Grid container style={{ flexGrow: 1 }} alignItems="center">
          {getPage(page)}
        </Grid>
      </Grid>
    </Grid>
  );
}
