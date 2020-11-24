import _ from "lodash";
import constants from "../constants";

export const generateGameId = () =>
  _.sampleSize(constants.GAME_ID_DICTIONARY, constants.GAME_ID_LENGTH).join("");

export const generateShortId = () =>
  _.sampleSize(constants.SHORT_ID_DICTIONARY, constants.SHORT_ID_LENGTH).join(
    ""
  );
