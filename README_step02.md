# 02. Connect to your Astra database

[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)
[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

⚒️ [Create a mock REST API with Netlify functions](./README_step01.md) > 📚 [What is DataStax Astra and Stargate](./README_Astra_Stargate.md) > ⚒️ **[Connect to your Astra database](#)** |  ***next=>** 📚 [What is Redux and React](./README_Redux_React.md)*

## Objectives

```diff
+ The REST API is stateless, and therefore helps functions scale horizontally. 

In step 2 of the Battlestax tutorial, we will:

+ Create an Astra database to store game documents

+ Create test cases to check that our API call is working correctly
 
+ Build the API call to Astra to create a game document, based on the requirements from our test
```

One of the first things we need to do is hook up the "plumbing" of our application to talk to our back-end services, namely, our Cassandra database with Astra and Netlify. Once this is in place, we are connected and ready to go with the services we need to power our app.

We will also be making use of the Document API to connect to our Astra database. Stargate API framework allows developers the freedom to access Astra with a variety of APIs, the Document API being one. With the Document API, you can now save and search schemaless JSON documents in Cassandra, which previously had not been supported.

![Document API Flow](./tutorial/document-api.png?raw=true)

## 🗓️ Table of Contents

1. [Create your Astra instance](#1-create-your-astra-instance)
2. [Setup your environment](#2-setup-your-environment)
3. [Creating the `insertGame` Netlify endpoint](#3-creating-the-insertgame-netlify-endpoint)
4. [Connect to Astra](#4-connect-to-astra)
5. [Hook it all together](#5-hook-it-all-together)
6. [Running TDD tests](#6-running-tdd-tests)
7. [Merge back to master](#7-merge-back-to-master)

For a **FULL** code solution to this section **`right-click`** the image below and choose **`Open Link in New Tab`**.

[![Code solution](./tutorial/step-1-code-solution.png?raw=true)](https://github.com/DataStax-Academy/battlestax/pull/2/files)

**_Don't forget to SAVE your changes or enable autosave in GitPod._**

## 1. Create your Astra instance

`ASTRA` service is available at url [https://astra.datastax.com](https://dtsx.io/workshop). `ASTRA` is the simplest way to run Cassandra with zero operations at all - just push the button and get your cluster. `Astra` offers **5 Gb Tier Free Forever** and you **don't need a credit card** or anything to sign-up and use it. 

|**✅ Step 1a. Register (if needed) and Sign In to Astra** :<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>You can use your `Github`, `Google` accounts or register with an `email`.<br/>Make sure to chose a password with minimum 8 characters, containing upper and lowercase letters, at least one number and special character<br/><br/>- [Registration Page](https://dtsx.io/workshop)<br/>![Registration Image](https://github.com/datastaxdevs/shared-assets/blob/master/astra/login-1000.png?raw=true)<br/><br/>- [Authentication Page](https://dtsx.io/workshop)<br/>![Login Image](https://github.com/datastaxdevs/shared-assets/blob/master/astra/signin-raw.png?raw=true)<br/></details>|

|**✅ Step 1b. Choose the free plan and select your region**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/choose-a-plan-1000-annotated.png?raw=true)<br/>- **Select the free tier**: 5GB storage, no obligation<br/>- **Select the region**: This is the region where your database will reside physically (choose one close to you or your users). For people in EMEA please use `europe-west-1` idea here is to reduce latency.<br/></details>|

|**✅ Step 1c. Configure and create your database**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>You will find below which values to enter for each field.<br/><br/>![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/create-and-configure-annotated-1000.png?raw=true)<br/>- **Fill in the database name** - `battlestax_db.` While Astra allows you to fill in these fields with values of your own choosing, please follow our reccomendations to make the rest of the exercises easier to follow. If you don't, you are on your own! :)<br/>- **Fill in the keyspace name** - `battlestax`. It's really important that you use the name sa_index here in order for all the exercises to work well. We realize you want to be creative, but please just roll with this one today.<br/>- **Fill in the Database User name** - `battle_user`. Note the user name is case-sensitive. Please use the case we suggest here.<br/>- **Fill in the password** - `battle_password1`. Fill in both the password and the confirmation fields. Note that the password is also case-sensitive. Please use the case we suggest here.<br/>- **Create the database**. Review all the fields to make sure they are as shown, and click the **`Create Database`** button.<br/><br/>You will see your new database `Pending` in the Dashboard.<br/>![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/dashboard-pending-1000.png?raw=true)<br/><br/>The status will change to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.<br/></details>|

## 2. Setup your environment

**✅ Step 2a: Checkout expected branch**

1. Switch to branch `step-2`
* For this part of the tutorial, we will be working in step-2 branch. Switch branches by using the following command in the terminal

📘 **Command to execute**

`git checkout step-2`

### [🔝](#%EF%B8%8F-table-of-contents)

## 3. Creating the `insertGame` Netlify endpoint

Now that we have our game document store, let's start building our basic `insertGame` serverless function, in the `function/insertGame.js` file. 

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

## 4. Connect to Astra

The next thing we need to do is to connect to our Astra database. We are first going to import the JavaScript SDK library (`astrajs`) to create our Astra Client. We are going to give the Astra client our environment variable credentials to connect to the database, and create a document to store information about our game.

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

## 5. Hook it all together

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

## 6. Running TDD tests

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

## 7. Merge back to master

Now that we've updated our code we need to push these changes back to master and kick off an automated deploy in Netlify.

📘 **Commands to execute**

`git commit -m "Merging step2 into master"`<br/>
`git push origin step-2`

### [🔝](#%EF%B8%8F-table-of-contents)

**Click** below to move to the next section.

⚒️ [Create a mock REST API with Netlify functions](./README_step01.md) > 📚 [What is DataStax Astra and Stargate](./README_Astra_Stargate.md) > ⚒️ **[Connect to your Astra database](#)** |  ***next=>** 📚 [What is Redux and React](./README_Redux_React.md)*
