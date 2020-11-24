const insertGame = require("../functions/insertGame");
const getGame = require("../functions/getGame");
const { deleteGame } = require("./utils");
const faker = require("faker");

it("should get a game document", async () => {
  const gameId = faker.helpers.replaceSymbols("????");
  const response = await insertGame.handler({
    path: "/functions/insertGame/" + gameId,
    body: '{"user":"me"}',
  });
  expect(response.statusCode).toBe(200);

  const gameResponse = await getGame.handler({
    path: "/functions/getGame/" + gameId,
  });
  expect(gameResponse.statusCode).toBe(200);

  await deleteGame(gameId);
});
