import store from "./store";
import _ from "lodash";

const netlifyPath = "/.netlify/functions";

export const createGame = async (gameId) => {
  const filteredGame = _.omit(store.getState(), ["app", "game.player"]);
  const res = await fetch(`${netlifyPath}/insertGame/${gameId}`, {
    method: "POST",
    body: JSON.stringify({ ...filteredGame }),
  });
  return await res.json();
};

export const getGame = async (path) => {
  const res = await fetch(`${netlifyPath}/getGame/${path}`);
  return await res.json();
};

export const updateGame = async (path, data) => {
  const res = await fetch(`${netlifyPath}/updateGame/${path}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const addPlayer = async (gameId, playerId) => {
  const res = await fetch(
    `${netlifyPath}/updateGame/${gameId}/players/${playerId}`,
    {
      method: "PUT",
      body: JSON.stringify({ name: playerId }),
    }
  );
  return await res.json();
};

export const getXKCD = async () => {
  const res = await fetch(`${netlifyPath}/getXKCD`);
  return await res.json();
};
