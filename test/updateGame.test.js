const insertGame = require("../functions/insertGame");
const updateGame = require("../functions/updateGame");
const getGame = require("../functions/getGame");
const { deleteGame } = require("./utils");
const faker = require("faker");

it("should update a game document", async () => {
  const gameId = faker.helpers.replaceSymbols("????");
  const response = await insertGame.handler({
    path: "/functions/insertGame/" + gameId,
    body: '{"user": "me", "address": {"city": "NYC"}}',
  });
  expect(response.statusCode).toBe(200);

  const gameResponse = await updateGame.handler({
    path: "/functions/updateGame/" + gameId + "/address",
    body: '{"city": "Athens"}',
  });
  expect(gameResponse.statusCode).toBe(200);

  const gameResponse2 = await getGame.handler({
    path: "/functions/getGame/" + gameId,
  });
  expect(gameResponse2.statusCode).toBe(200);
  expect(JSON.parse(gameResponse2.body).address.city).toBe("Athens");
  await deleteGame(gameId);
});

it("should update a game document using PUT", async () => {
  const gameId = faker.helpers.replaceSymbols("????");
  const response = await insertGame.handler({
    path: "/functions/insertGame/" + gameId,
    body: '{"user": "me"}',
  });
  expect(response.statusCode).toBe(200);

  const gameResponse = await updateGame.handler({
    path: "/functions/updateGame/" + gameId + "/comments/hello",
    body: '{"content": "world"}',
    httpMethod: "PUT",
  });
  expect(gameResponse.statusCode).toBe(200);

  const gameResponse2 = await getGame.handler({
    path: "/functions/getGame/" + gameId,
  });
  expect(gameResponse2.statusCode).toBe(200);
  expect(JSON.parse(gameResponse2.body).comments.hello.content).toBe("world");
  await deleteGame(gameId);
});
