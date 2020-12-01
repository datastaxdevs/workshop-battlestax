# ⚒️ Setup and deploy your first app

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > 📚 [What is the JAMStack](./README_JAM.md) > ⚒️ **[Setup and deploy your first app](#)** |  **next=>**  📚 *[What can Netlify do for you](./README_Netlify.md)*

This is arguably the biggest step in the whole workshop. Once you get your tools and environment setup you'll be good to go, not just for this workshop, but for your own **JAMStack** applications moving forward. Just repeat the process for your own application repositories.

![Template CTRL click](./tutorial/tools.png?raw=true)

## 🗓️ Table of Contents
1. [Create your `BattleStax` repository](#1-create-your-battlestax-repository)
2. [Create your Astra instance](#2-create-your-astra-instance)
3. [Setup Netlify account](#3-setup-netlify-account)
4. [Setup for Production CI/CD](#4-setup-for-production-cicd)
5. [Setup your development environment](#5-setup-your-development-environment)

## 1. Create your `BattleStax` repository

*The very first thing we want to do is create a copy of the BattleStax repository into **YOUR** GitHub account. This is important because as part of this workshop you will deploy the BattleStax application to production and will need your own repository to do so. To do this we will fork the DataStax-Academy/battlestax repo.*

|**✅ Step 1a. Launch the BattleStax repo into another tab**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>This might seem like an odd step, but will allow you to keep your place in the instructions you are reading now until you move to the new repo. Scroll up on the **GitHub** repo page, **_Right-Click_** on the **`battlestax`** repo name, and choose **`Open Link in New Tab`** to launch it in a new tab:<br/><br/>![Template CTRL click](./tutorial/template-ctrl-click.png?raw=true)</details>|


|**✅ Step 1b. Create repository from the provided template**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>✔ From the new tab you just launched, click on the **`Use this template`** button up on the top right of the toolbar.<br/><br/>![Template CTRL click](./tutorial/template-click-use-template.png?raw=true)<br/><br/>✔ On the **Create a new repository from battlestax** page you are presented with, fill out the **`Repository name`** field with `battlestax`, choose **`Public`** (_this should be default_), click the **`include all branches`** option, and finally click the **`Create repository from template`** button at the bottom of the page.<br/><br/>![Template create repo](./tutorial/template-create-repo.png?raw=true)<br/>It should only take a moment for **GitHub** to generate a new repository in your account.</details>|

|**✅ Step 1c. Navigate back to your place in the docs**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>Once completed you will land in the root of your new repository.<br/><br/>![Template nav back to step0](./tutorial/template-nav-back-to-step0.png?raw=true)<br/>From there, navigate back to your place in the documentation and continue on [with creating your **Astra** instance.](#2-create-your-astra-instance)<br><br/>![Template nav to create astra](./tutorial/template-nav-to-create-astra.png?raw=true)</details>|

### [🔝](#%EF%B8%8F-table-of-contents)

## 3. Setup Netlify account

|**✅ Step 3a. Setup a Netlify account**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br />- Using the link [HERE](https://www.netlify.com), sign up for a new account and follow **Netlify's** instructions to create a **`New Site from Git`** (_you must be logged in to see this option_).<br /><br />![Netlify Setup Example](./tutorial/netlify-signin.png?raw=true)<br />- Once signed in, you should land on the following page.<br /><br />![Netlify Setup Example](./tutorial/netlify-empty.png?raw=true)<br /></details>|

|**✅ Step 3b. Create a new site**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>Move to the `Sites` tab and Click the `New site from git` button.<br/>![Netlify Setup Example](./tutorial/netlify-createsite-1.png?raw=true)<br/><br/>On the new page select `Github` and locate the proper repository in your github Account.<br/>![Netlify Setup Example](./tutorial/netlify-createsite-2.png?raw=true)<br/><br/>After allowing the `Netlify` application on Github select the `BattleStax` repository.<br/>![Netlify Setup Example](./tutorial/netlify-createsite-3.png?raw=true)<br/><br/>Use all of the defaults for `Basic Build Settings`<br/>![Netlify Setup Example](./tutorial/netlify-createsite-4.png?raw=true)<br/><br/></details>|

|**✅ Step 3c. Deploy your site**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>Click **`Deploy Site`** and once deployed copy the domain name of your new site from **Netlify**.<br/>![Netlify URL Example](https://raw.githubusercontent.com/kidrecursive/battlestax-tutorial/step-1/tutorial/netlify_url.png)<br/><br/>Finally, wait for deployment!<br/>![Netlify Setup Example](./tutorial/netlify-createsite-7.png?raw=true)<br/><br/>When your new site is ready, you will be able to go to: `<your_url>.netlify.app` to see your game.<br/>![Netlify Setup Example](./tutorial/netlify-createsite-8.png?raw=true)<br/><br/>If you start new games it will create a new record in the database. If you want to validate this behavirour click on `START NEW GAME`<br/><br/>Open Astra UI, show the `CQL Console` and execute the following command (here *battlestax* is your keyspace and *games* your collection name - if you chose another names adapt the query accordingly).<br/><br/>📘 **Command to execute**<br/>`SELECT key, text_value FROM battlestax.games;`<br/><br/>You should have a result that looks like <br/>![Netlify Setup Example](./tutorial/netlify-createsite-9.png?raw=true)|

### [🔝](#%EF%B8%8F-table-of-contents)


## 5. Setup your development environment

*To code during the workshop you can either use **your laptop** or a **Cloud-based IDE** named [Gitpod](gitpod.io) with everything installed. **Here we explain the Gitpod way**.*


|**✅ Step 5_A3. Run the Tests**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ At initialization gitpod has download dependencies already (you should have the `node_modules` folder already there. Still, check dependencies are installed with :<br/><br/>📘 **Command to execute**<br/>`npm install`<br/><br/>✔ Run the provided test on the master branch. The behavior of `npm test` is also specified in the `package.json` file.<br/><br/>📘 **Command to execute**<br/>`npm test`<br/><br/>![Netlify Setup Example](./tutorial/gitpod-test.png?raw=true)</details>|


|**✅ Step 5_A4. Start the application**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ Start the application<br/><br/>📘 **Command to execute**<br/>`npm start`<br/><br/>✔  Hit the loading screen<br/>`https://3000-<your_uid>.<your_region>.gitpod.io/#/workspace/battlestax`![Netlify Setup Example](./tutorial/gitpod-start.png?raw=true)<br/><br/>**Done!** You have successfully set up your app, run your tests locally, and started BattleStax.</details>|

# OR

### Option B - LOCAL development environment


|**✅ Step 5_B3. Run the Tests**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ Install Battlestax Dependencies. These are specified in the `package.json` file.<br/><br/>📘 **Command to execute**<br/>`npm install`<br/><br/>✔ Run the provided test on the master branch. The behavior of `npm test` is also specified in the package.json file.<br/><br/>📘 **Command to execute**<br/>`npm test`<br/>![Netlify Setup Example](./tutorial/local-test.png?raw=true)</details>|

|**✅ Step 5_B4. Start the application**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔  Start the application<br/><br/>📘 **Command to execute**<br/>`npm start`<br/><br/>✔ Hit the loading screen<br/>`http://localhost:3000/`<br/>![Netlify Setup Example](./tutorial/start-localhost.png?raw=true)<br/><br/>**Done!** You have successfully set up your app, run your tests locally, and started BattleStax.<br/><br/>![Netlify Setup Example](./tutorial/well-done.png?raw=true)</details>|


![.](./tutorial/line.png)

**Click** below to move to the next section.

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > 📚 [What is the JAMStack](./README_JAM.md) > ⚒️ **[Setup and deploy your first app](#)** |  **next=>** 📚 *[What can Netlify do for you](./README_Netlify.md)*