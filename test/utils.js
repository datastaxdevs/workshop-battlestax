const { getGamesCollection } = require("../functions/utils/astraClient");

const deleteGame = async (gameId) => {
  const gamesCollection = await getGamesCollection();
  await gamesCollection.delete(gameId);
};

module.exports = { deleteGame };
