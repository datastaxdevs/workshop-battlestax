# What can Netlify do for you ? 

📚 [What is the JAMStack](./README_JAM.md) > ⚒️ [Setup and deploy your first app](./README_step00.md) > 📚 **[What can Netlify do for you](#)** |  **next=>** ⚒️ *[Create a mock REST API with Netlify functions](./README_step01.md)*

If you are already familiar with **Netlify Serverless functions** and just want to move on to the next exercise go to section => *[Create a mock REST API with Netlify functions](./README_step01.md)*. Otherwise, read on.


## ⚙️ Netlify Functions

> *Source [Netlify Documentation](https://docs.netlify.com/functions/overview/#manage-your-serverless-functions)*

Netlify lets you deploy serverless Lambda functions without an AWS account, and with function management handled directly within Netlify. Your serverless functions are version-controlled, built, and deployed along with the rest of your Netlify site, and we will automatically handle service discovery through our built-in API gateway. This eliminates overhead and brings the power of Deploy Previews and rollbacks to your serverless functions.

### Why this is cool ?

What this translates to is an ability to create serverless functions in your application that can be accessed seamlessly in your local environment or via a global CDN _(once deployed)_ without the need for an actual server to deploy code to. Just configure the `netlify.toml`, create the function, and move on.

### How does this work in our application ?

In **BattleStax**, we configure `netlify.toml` **functions** to use the `functions` folder within our application.

![netlify toml config](./tutorial/netlify-toml-config.png)

From there, just drop any functions you intend to be **serverless** into the `functions` folder and export a handler.

![netlify serverless function](./tutorial/netlify-function-handler.png)

That's it. Once a function is implemented in this fashion it will be deployed as a **serverless** function both locally and via a global CDN once pushed to Netlify.

![netlify functions cloud](./tutorial/netlify-functions-cloud.png)

Ok, let's do this ourselves in the next exercise.

## ➕ Want to learn more ?

This [document](https://docs.netlify.com/functions/configure-and-deploy/#configure-the-functions-folder) goes into details about implementing **serverless** functions with Netlify and this [tutorial](https://kentcdodds.com/blog/super-simple-start-to-netlify-functions) spells it out. 

**Click** below to move to the next section.

📚 [What is the JAMStack](./README_JAM.md) > ⚒️ [Setup and deploy your first app](./README_step00.md) > 📚 **[What can Netlify do for you](#)** |  **next=>** ⚒️ *[Create a mock REST API with Netlify functions](./README_step01.md)*