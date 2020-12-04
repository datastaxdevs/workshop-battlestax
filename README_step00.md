# ⚒️ Setup and deploy your first app

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > 📚 [What is the JAMStack](./README_JAM.md) > ⚒️ **[Setup and deploy your first app](#)**

This is arguably the biggest step in the whole workshop. Once you get your tools and environment setup you'll be good to go, not just for this workshop, but for your own **JAMStack** applications moving forward. Just repeat the process for your own application repositories.

**We will cover:**

1. [Create your `BattleStax` repository](#1-create-your-battlestax-repository)
2. [Setup `Netlify` account](#2-setup-netlify-account)

![Template CTRL click](./tutorial/architecture2.png?raw=true)

---

## 1. Create your `BattleStax` repository

*The very first thing we want to do is create a copy of the BattleStax repository into **YOUR** GitHub account. This is important because as part of this workshop you will deploy the BattleStax application to production and will need your own repository to do so. To do this we will fork the DataStax-Academy/battlestax repo.*

**✅ Step 1a. Launch the BattleStax repo into another tab**

This might seem like an odd step, but will allow you to keep your place in the instructions you are reading now until you move to the new repo. Scroll up on the **GitHub** repo page, **_Right-Click_** on the **`battlestax`** repo name, and choose **`Open Link in New Tab`** to launch it in a new tab:

>![Template CTRL click](./tutorial/template-ctrl-click.png?raw=true)


**✅ Step 1b. Fork repository into YOUR GitHub account**

✔ From the new tab you just launched, click on the **`Fork`** button up on the top right of the page.

>![Template CTRL click](./tutorial/github-fork-repo.png?raw=true)

✔ On the **Fork battlestax** dialog, choose the repository you wish to fork the repo to. This should be to one of YOUR personal GitHub orgs.

>![Template create repo](./tutorial/github-fork-repo-whereto.png?raw=true)

It should only take a moment for **GitHub** to generate a new repository in your account.

**✅ Step 1c. Navigate back to your place in the docs**

✔ Once complete you should now have your own battlestax repo within YOUR account. Notice both the GitHub org is no longer `DataStax-Academy` and the text `forked from DataStax-Academy/battlestax`.

>![Template create repo](./tutorial/github-fork-repo-complete.png?raw=true)

✔ From there, navigate back to your place in the documentation and continue on with step **`Setup Netlify account`**

### [🔝](#%EF%B8%8F-table-of-contents)

## 2. Setup Netlify account

**✅ Step 2a. Setup a Netlify account**

✔ Using the link [HERE](https://www.netlify.com), sign up for a new account and follow **Netlify's** instructions to create a **`New Site from Git`** (_you must be logged in to see this option_).

>![Netlify Setup Example](./tutorial/netlify-signin.png?raw=true)

✔ Once signed in, you should land on the following page.

>![Netlify Setup Example](./tutorial/netlify-empty.png?raw=true)


**✅ Step 2b. Create a new site**

✔ Move to the `Sites` tab and Click the `New site from git` button.

>![Netlify Setup Example](./tutorial/netlify-createsite-1.png?raw=true)

✔ On the new page select `Github` and locate the proper repository in your github Account.

>![Netlify Setup Example](./tutorial/netlify-createsite-2.png?raw=true)

✔ After allowing the `Netlify` application on Github select the `BattleStax` repository.

>![Netlify Setup Example](./tutorial/netlify-createsite-3.png?raw=true)

✔ Use all of the defaults for `Basic Build Settings`

>![Netlify Setup Example](./tutorial/netlify-createsite-4.png?raw=true)

**✅ Step 2c. Deploy your site**

✔ Click **`Deploy Site`** and once deployed copy the domain name of your new site from **Netlify**.

>![Netlify URL Example](https://raw.githubusercontent.com/kidrecursive/battlestax-tutorial/step-1/tutorial/netlify_url.png)

✔ We'll let that bake for a moment and move on to the next section. It will take Netlify a couple minutes to spin everything up. We'll come back to this interface in an upcoming section.

>![Netlify Setup Example](./tutorial/netlify-createsite-7.png?raw=true)

### [🔝](#%EF%B8%8F-table-of-contents)

At this point, by creating a new site from **GitHub** in **Netlify** anytime you commit to master your site will automatically be deployed with a **CI/CD** pipeline. No servers needed. This is seriously powerful stuff and really gets at the core of what we're all good at, coding. 

As we move on we'll dive deeper into what this all means and how it's hooked up. 

<!-- ## 3. Setup your development environment

*To code during the workshop you can either use **your laptop** or a **Cloud-based IDE** named [Gitpod](gitpod.io) with everything installed. **Here we explain the Gitpod way**.*


|**✅ Step 3_A3. Run the Tests**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ Run the provided test on the master branch. The behavior of `npm test` is also specified in the `package.json` file.<br/><br/>📘 **Command to execute**<br/>`npm test`<br/><br/>![Netlify Setup Example](./tutorial/gitpod-test.png?raw=true)</details>|


|**✅ Step 3_A4. Start the application**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ Start the application<br/><br/>📘 **Command to execute**<br/>`npm start`<br/><br/>✔  Hit the loading screen<br/>`https://3000-<your_uid>.<your_region>.gitpod.io/#/workspace/battlestax`![Netlify Setup Example](./tutorial/gitpod-start.png?raw=true)<br/><br/>**Done!** You have successfully set up your app, run your tests locally, and started BattleStax.</details>|

# OR

### Option B - LOCAL development environment


|**✅ Step 3_B3. Run the Tests**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ Run the provided test on the master branch. The behavior of `npm test` is also specified in the package.json file.<br/><br/>📘 **Command to execute**<br/>`npm test`<br/>![Netlify Setup Example](./tutorial/local-test.png?raw=true)</details>|

|**✅ Step 3_B4. Start the application**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔  Start the application<br/><br/>📘 **Command to execute**<br/>`npm start`<br/><br/>✔ Hit the loading screen<br/>`http://localhost:3000/`<br/>![Netlify Setup Example](./tutorial/start-localhost.png?raw=true)<br/><br/>**Done!** You have successfully set up your app, run your tests locally, and started BattleStax.<br/><br/>![Netlify Setup Example](./tutorial/well-done.png?raw=true)</details>|

-->
---
🏠 **Back** to [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) or **move** to the next section **=>** 📚 [What can Netlify do for you](./README_Netlify.md)