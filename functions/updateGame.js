const { getGamesCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  let path;
  let gamePayload;
  try {
    path = event.path.split("updateGame/")[1];
    gamePayload = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "must provide a valid game" }),
    };
  }

  const gamesCollection = await getGamesCollection();

  try {
    let res = null;
    if (event.httpMethod === "PUT") {
      res = await gamesCollection.create(path, gamePayload);
    } else {
      res = await gamesCollection.update(path, gamePayload);
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
