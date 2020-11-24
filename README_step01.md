# 01. Create a mock REST API with Netlify functions

[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)
[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

⚒️ [Setup and deploy your first app](./README_step00.md) > 📚 [What can Netlify do for you](./README_Netlify.md) > ⚒️ **[Create a mock REST API with Netlify functions](#)** |  ***next=>**  📚 [What is DataStax Astra and Stargate](./README_Astra_Stargate.md)*

## Objectives

```diff
+ The REST API is stateless, and therefore helps functions scale horizontally. 

In step 1 of the Battlestax tutorial, we will:

+ Create test cases to check that our API call is working correctly
 
+ Build the API call to Astra to create a game document, based on the requirements from our test
```

## 🗓️ Table of Contents

1. [Setup your environment](#1-setup-your-environment)
2. [Making an endpoint using Netlify functions](#2-making-an-endpoint-using-netlify-functions)

## 1. Setup your environment

**✅ Step 1a: Checkout expected branch**

1. Switch to branch `step-1`
* For this part of the tutorial, we will be working in step-1 branch. Switch branches by using the following command in the terminal

📘 **Command to execute**

```bash
git checkout step-1
```

Expected output

### [🔝](#%EF%B8%8F-table-of-contents)

## 2. Making a Serverless endpoint using Netlify functions

**✅ Step 2a: Check out the `functions` folder**

Each file in our `functions` folder represents a REST API endpoint implemented as a **serverless** function _(we'll get to this in a moment)_. For now, take a look at the `helloWorld.js` file inside the `functions` folder.

![insert](./tutorial/insert.png)

At this point, this REST API endpoint is stubbed out. If we use this as it, it will simply give us back `{"hello":"world"}`.

```javascript
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: "world" }),
  };
};
```

**✅ Step 2b: Test the REST API with a browser**

Be sure that the app you had running in the previous step has been shutdown (`Ctrl-C`). To try the REST API along with the front end, in the terminal use the command:

📘 **Command to execute**

````bash
npm run dev
````

* This will give you the UI plus run the `helloWorld` function in the background.

### GitPod

* See the **UI** running at: `https://8888-<your_uid>.<your_region>.gitpod.io`
* See the **end point** at: `https://8888-<your_uid>.<your_region>.gitpod.io/.netlify/functions/helloWorld`

*_Notice the port, GitPod generated ID, and the GitPod region in the URL below at each arrow. This should automatically be generated for you when you run `npm run dev`. Just paste `/.netlify/functions/helloWorld` on to the end in order to get to the correct endpoint._*

📗 **Expected output**

![test functions output](./tutorial/netlify-helloWorld-output.png)

### LOCAL

* See the UI running at: [`localhost:8888`](localhost:8888)
* See the end point at: [`localhost:8888/.netlify/functions/helloWorld`](localhost:8888/.netlify/functions/helloWorld)

### You should see this output at the endpoint

```json
{ "hello":"world" }
```

This is our **serverless** function giving us back the "Hello World" example.

**✅ Step 2c: Run the existing unit tests**

✔️ Have a look at the [`/test/helloWorld.test.js`](https://github.com/DataStax-Academy/battlestax/blob/step-1/test/insertGame.test.js) file, this does not do much at this point. This basically tests the `helloWorld` function to ensure that we get "world" in our response, and hence we would know that the function is working correctly.

✔️ The way we are going to approach writing our tests is by asking the question "What does our endpoint need to do?". We want our function to 
create a new game on Astra (provision a new game) --  and we provide the API with a random game code so this can work.


```javascript
const insertGame = require("../functions/insertGame");

it("should return a JSON response", async () => {
  const response = await insertGame.handler();
  const responseJson = JSON.parse(response.body);
  expect(responseJson.hello).toBe("world");
});
```

Run the test to try it out:

📘 **Command to execute**

```bash
npm run test:functions
```

### [🔝](#%EF%B8%8F-table-of-contents)

**Click** below to move to the next section.

⚒️ [Setup and deploy your first app](./README_step00.md) > 📚 [What can Netlify do for you](./README_Netlify.md) > ⚒️ **[Create a mock REST API with Netlify functions](#)** |  ***next=>**  📚 [What is DataStax Astra and Stargate](./README_Astra_Stargate.md)*

