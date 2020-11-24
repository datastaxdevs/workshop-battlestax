const { createClient } = require("@astrajs/collections");

let astraClient = null;

const getAstraClient = async () => {
  if (astraClient === null) {
    astraClient = await createClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      username: process.env.ASTRA_DB_USERNAME,
      password: process.env.ASTRA_DB_PASSWORD,
    });
  }
  return astraClient;
};

const getGamesCollection = async () => {
  const documentClient = await getAstraClient();
  return documentClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(process.env.GAMES_COLLECTION);
};

module.exports = { getAstraClient, getGamesCollection };
