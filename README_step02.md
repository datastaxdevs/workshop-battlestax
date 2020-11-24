# 02. Connect to your Astra database

[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)
[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

⚒️ [Create a mock REST API with Netlify functions](./README_step01.md) > 📚 [What is DataStax Astra and Stargate](./README_Astra_Stargate.md) > ⚒️ **[Connect to your Astra database](#)** |  ***next=>** 📚 [What is Redux](./README_Redux.md)*

## Objectives

```diff
+ The REST API is stateless, and therefore helps functions scale horizontally. 

In step 2 of the Battlestax tutorial, we will:

+ Create test cases to check that our API call is working correctly
 
+ Build the API call to Astra to create a game document, based on the requirements from our test
```

One of the first things we need to do is hook up the "plumbing" of our application to talk to our back-end services, namely, our Cassandra database with Astra and Netlify. Once this is in place, we are connected and ready to go with the services we need to power our app.

We will also be making use of the Document API to connect to our Astra database. Stargate API framework allows developers the freedom to access Astra with a variety of APIs, the Document API being one. With the Document API, you can now save and search schemaless JSON documents in Cassandra, which previously had not been supported.

![Document API Flow](./tutorial/document-api.png?raw=true)

## 🗓️ Table of Contents

1. [Creating the `insertGame` Netlify endpoint](#1-creating-the-insertgame-netlify-endpoint)
2. [Connect to Astra](#2-connect-to-astra)
3. [Hook it all together](#3-hook-it-all-together)
4. [Running TDD tests](#4-running-tdd-tests)

For a **FULL** code solution to this section **`right-click`** the image below and choose **`Open Link in New Tab`**.

[![Code solution](./tutorial/step-1-code-solution.png?raw=true)](https://github.com/DataStax-Academy/battlestax/pull/2/files)

**_Don't forget to SAVE your changes or enable autosave in GitPod._**

## 1. Creating the `insertGame` Netlify endpoint

Let's start building our basic `insertGame` serverless function, in the `function/insertGame.js` file. 

First, we need to declare `gameId` and `gamePayload` variables. We know each game is associated with it's own unique game id, and during game play we can anticipate getting a payload from the user.

📘 **Code to copy**

```javascript
// let's return a 400 if we don't recieve a valid game id
let gameId;
let gamePayload;
```

From Netlify, you get your `gameId` parameter from the path of the incoming REST call, and parse our event body that is associated with it as the `gamePayload`.
By default, Netlify puts your function at the path `/.netlify/function/insertGame`.

📘 **Code to copy**

```javascript
// let's set the game id
gameId = event.path.split("insertGame/")[1];
// let's parse the incoming payload
gamePayload = JSON.parse(event.body);
```

Let's not forget about error handling. If we cannot parse the game id or body from the incoming REST call, a HTTP status code of `400` will be returned and you will get an error message

📘 **Code to copy**

```javascript
...
} catch (e) {
  // let's return a 400 if we can't parse the game id or body
  return {
    statusCode: 400,
    body: JSON.stringify({ message: "must provide a valid game ID" }),
  };
}
```

All this should statisfy our second test ( we need to get valid game id)

### [🔝](#%EF%B8%8F-table-of-contents)

## 2. Connect to Astra

The next thing we need to do is to connect to our Astra databasae. We are first going to import the JavaScript SDK library (`astrajs`) to create our Astra Client. We are going to give the Astra client our environment variable credentials to connect to the database, and create a document to store information about our game.

Go [HERE](https://www.npmjs.com/package/@astrajs/collections) for more information on the on the JavaScript SDK library.

📘 **Code to copy**

``` javascript
// let's connect to Astra
const astraClient = await createClient({
  // let's set our Astra connection configuration
  astraDatabaseId: process.env.ASTRA_DB_ID,
  astraDatabaseRegion: process.env.ASTRA_DB_REGION,
  username: process.env.ASTRA_DB_USERNAME,
  password: process.env.ASTRA_DB_PASSWORD,
});

const gamesCollection = astraClient
  .namespace(process.env.ASTRA_DB_KEYSPACE)
  .collection(process.env.GAMES_COLLECTION);
```
### [🔝](#%EF%B8%8F-table-of-contents)

## 3. Hook it all together

Finally, we are going to try to take all our configuration infomation stored in `gamesCollection` and provision a new game from it. If it works, we get back a HTTP status code of `200`. If it fails, we will get back a `500`. This should statify both test 1 and test 2.

📘 **Code to copy**

```javascript
  // let's provision a new game
  try {
    // let's create a new game with the gamesCollection
    const res = await gamesCollection.create(gameId, gamePayload);
    // let's return a 200 with the resoponse from astra
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    console.error(e);
    // let's return a 500 on error
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
```

For a **FULL** code solution to this section **`right-click`** the image below and choose **`Open Link in New Tab`**.

[![Code solution](./tutorial/step-1-code-solution.png?raw=true)](https://github.com/DataStax-Academy/battlestax/pull/2/files)

## 4. Running TDD tests

The way we approach testing is by asking the question "What does our endpoint need to do?". We want our serverlesss function to provision a new game on Astra -- and we need provide the API with a random game code so this can work. Our endpoint needs to:

* Tell the API to make the game document
* It should not be able to make a game document if we don't give it a valid game id
* If we get a 500 on error (something goes wrong), we should be informed

We are provided with test cases `test/insertGame.test.js` that will check for these actions working in `functions/insertGame.js`. Notice that `insertGame` is required as a dependency in our test.js file.

We are going to use `faker.js`, a JavaScript library for generating mock data. This mock data is useful when building and testing our application. Hence, we should `require` the faker library.

```javascript
const faker = require("faker");
```

✔️  _TEST 1_: Our API should make the game document. We need to test to see if the `insertGame` function actually does that:

```javascript
const gameId = faker.helpers.replaceSymbols("????");

it("should create a game document", async () => {
  const response = await insertGame.handler({
    path: "/functions/insertGame/" + gameId,
    body: '{"user":"me"}',
  });
  expect(response.statusCode).toBe(200);
});
```

We use a simple async function to do this. `faker.helpers.replaceSymbols("????")` will create a sample game id for the path, and some user data in the
body. As successful test run will return a `200`.

✔️  _TEST 2_ : Our function must not beable to create a game document with a valid game id
```javascript
it("shouldn't create a game document without a game id", async () => {
  const response = await insertGame.handler({ path: "insertGame" });
  expect(response.statusCode).toBe(400);
});
```
We ensure that our function cannot go ahead and create a game, unless it has been provided with a valid game id.

Now let's run our tests to see if our function works.

📘 **Command to execute**

```bash
npm run test:functions
```

📗 **Expected output**

![test functions output](./tutorial/step-1-test-functions.png)

### [🔝](#%EF%B8%8F-table-of-contents)

**Click** below to move to the next section.

⚒️ [Create a mock REST API with Netlify functions](./README_step01.md) > 📚 [What is DataStax Astra and Stargate](./README_Astra_Stargate.md) > ⚒️ **[Connect to your Astra database](#)** |  ***next=>** 📚 [What is Redux](./README_Redux.md)*
