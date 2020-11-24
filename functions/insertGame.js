const { getGamesCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  let gameId;
  let gamePayload;
  try {
    gameId = event.path.split("insertGame/")[1];
    gamePayload = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "must provide a valid game ID" }),
    };
  }

  const gamesCollection = await getGamesCollection();

  try {
    const res = await gamesCollection.create(gameId, gamePayload);
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
