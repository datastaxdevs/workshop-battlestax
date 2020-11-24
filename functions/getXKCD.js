const faker = require("faker");
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const comic = faker.random.number({ min: 1, max: 2387 });
  const res = await fetch(`https://xkcd.com/${comic}/info.0.json`);
  const resJson = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(resJson),
  };
};
