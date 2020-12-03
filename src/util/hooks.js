import React from "react";
import constants from "../constants";
import { getGame } from "../api";
import { useSelector, useDispatch, batch } from "react-redux";
import {
  selectId,
  setPage,
  setRound,
  setQuestion,
  setRequestDuration,
} from "../store/gameSlice";
import { addPlayer } from "../store/playersSlice";
import { slice as questionsSlice } from "../store/questionsSlice";
import { slice as answersSlice } from "../store/answersSlice";
import { slice as votesSlice } from "../store/votesSlice";
import _ from "lodash";

const gameMapping = {
  answers: answersSlice,
  questions: questionsSlice,
  votes: votesSlice,
};

export const useGamePollingInterval = () => {
  const gameId = useSelector(selectId);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!gameId) {
      return;
    }
    const pollingInterval = setInterval(async () => {
      const gameData = await getGame(`${gameId}`);
      if (!gameData) {
        return;
      }
      batch(() => {
        if (gameData.players) {
          const sortedPlayers = _.sortBy(gameData.players, ["joinTime"]);
          sortedPlayers.forEach((player) => {
            dispatch(addPlayer(player.name, player.score));
          });
        }
        if (gameData.game && gameData.game.round) {
          dispatch(setRound(gameData.game.round));
        }
        if (gameData.game && gameData.game.page) {
          dispatch(setPage(gameData.game.page));
        }
        if (gameData.game && gameData.game.question) {
          dispatch(setQuestion(gameData.game.question));
        }
        if (gameData.game && gameData.game.requestDuration) {
          dispatch(setRequestDuration(gameData.game.requestDuration));
        }
        _.keys(gameMapping).forEach((gameKey) => {
          if (gameData[gameKey]) {
            dispatch(gameMapping[gameKey].actions.setAll(gameData[gameKey]));
          }
        });
      });
    }, constants.POLLING_INTERVAL);
    console.log(`interval created: ${pollingInterval}`);
    return () => {
      console.log(`interval destroyed: ${pollingInterval}`);
      clearInterval(pollingInterval);
    };
  }, [gameId, dispatch]);

  return null;
};
