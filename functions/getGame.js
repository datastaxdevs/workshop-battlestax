const { getGamesCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  let gameId;
  const startTime = Date.now();

  try {
    gameId = event.path.split("getGame/")[1];
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "must provide a valid game ID" }),
    };
  }

  const gamesCollection = await getGamesCollection();

  try {
    const res = await gamesCollection.get(gameId);
    const endTime = Date.now();
    if (res && res.game) {
      res.game.requestDuration = endTime - startTime;
    }
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
