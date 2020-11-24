import React from "react";
import Loading from "../Loading";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectInitialized } from "../../store/appSlice";
import LobbyLayout from "../LobbyLayout";
import PlayerLayout from "../PlayerLayout";
import NewGame from "../../pages/Lobby/NewGame";
import JoinGame from "../../pages/Player/JoinGame";

export default function App() {
  const initialized = useSelector(selectInitialized);
  // handle app initialization
  if (!initialized) {
    return <Loading />;
  }

  return (
    <div className="app-root">
      <Switch>
        <Route exact path="/">
          <JoinGame />
        </Route>
        <Route exact path="/player/:gameid">
          <PlayerLayout />
        </Route>
        <Route exact path="/lobby">
          <NewGame />
        </Route>
        <Route exact path="/lobby/:gameId">
          <LobbyLayout />
        </Route>
      </Switch>
    </div>
  );
}
