const helloWorld = require("../functions/helloWorld");

it("should return a JSON response", async () => {
  const response = await helloWorld.handler();
  const responseJson = JSON.parse(response.body);
  expect(responseJson.hello).toBe("world");
});
