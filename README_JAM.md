# 📚 What is the JAM Stack

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > **Bootstraping - 📚 [What is the JAMStack](#README_JAM.MD)**

If you are already familiar with **JAMStack** and just want to move on to the first exercise go to the next section => ⚒️ [Setup and deploy your first app](./README_step00.md). Otherwise, read on.

**We will cover:**

1. [Introduction to the JAMStack](#1-introduction-to-the-jamstack)
2. [Why this is cool ?](#2-why-this-is-cool-)
3. [Introduction to Netlify](#3-introduction-to-netlify)
4. [Want to learn more ?](#4-want-to-learn-more-)
---

## 1. Introduction to the JAMStack

> *Sources [JamStack.org](https://jamstack.org/) and [Netlify Documentation](https://www.netlify.com/jamstack/)*

Jamstack is the new standard architecture for the web. Using Git workflows and modern build tools, pre-rendered content is served to a CDN and made dynamic through APIs and serverless functions. Technologies in the stack include JavaScript frameworks, Static Site Generators, Headless CMSs, and CDNs.

![ok](./tutorial/jamstack/jam-1.png)

**🔵 Javascript:** can represent any modern Javascript/Typescript framework like `React`, `Vue`, or `Angular` or even vanilla JS.
<table>
 <tr>
  <td><img src="./tutorial/jamstack/logo-react.png"/></td>
  <td><a href="https://reactjs.org/">ReactJS (we will use it today)</a> </td>
 </tr>
 <tr>
  <td><img src="./tutorial/jamstack/logo-angular.png"/></td>
  <td><a href="https://angular.io/docs">Angular</a></td>
 </tr>
<tr>
  <td><img src="./tutorial/jamstack/logo-vuejs.png"/></td>
 <td><a href="https://vuejs.org/">VueJS</a></td>
 </tr>
</table>

<br/>

**🔵 API:** is a backend serving real time data through either REST or GraphQL, endpoints to interact with fetch, ajax,axios

<table>
  <tr>
  <td><img src="./tutorial/jamstack/logo-rest.png"/></td>
 <td><a href="https://vuejs.org/">REST (we will use it today)</a></td>
 </tr>
<tr>
  <td><img src="./tutorial/jamstack/logo-graphql.png"/></td>
 <td><a href="https://graphql.org/learn/">GraphQL</a></td>
 </tr>
</table>

<br/>

**🔵 Markup:** can be either plain old HTML or static content like markdown. This is the nature of markup that will determine the static page generator technology

<table>
 <tr>
  <td><img src="./tutorial/jamstack/logo-html.png"/></td>
 <td><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/">Vanilla HTML (we will use this today)</a></td>
 </tr>
 <tr>
  <td><img src="./tutorial/jamstack/logo-markdown.png"/></td>
 <td><a href="https://www.markdownguide.org/">Markdown</a></td>
 </tr>
</table>

<br/>

**🔵 Static page generator**

They apply data and content to templates, and generate a view of a page which can be served to the visitors of a site.

The greatest difference between a static site generator and a traditional web application stack, is that instead of waiting until a page is requested and then generating its view on demand each time, a static site generator does this in advance so that the view is ready to serve ahead of time. And it does so for every possible view of a site at build time.

![ok](./tutorial/ssg-flow.png)

It improves performance and high compatibility with its rendering. *Automates code splitting, image optimization, inlining critical styles, lazy-loading, prefetching resources, and more to ensure your site is fully optimized. No manual tuning required.* 

You can find a pretty exhaustive list [here](https://jamstack.org/generators/).

**🔵 CDN:** : geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

![ok](./tutorial/jamstack/CDN.png)


**🔵 Logical Architecture** 

 The core principles of **pre-rendering**, and **decoupling**, enable sites and applications to be delivered with greater confidence and resilience than ever before.

![ok](./tutorial/jamstack/jam-2.png)

**🔵 Pre-rendering:** 

![ok](./tutorial/jamstack/jam-4.png)

**🔵 Decoupling:** 

![ok](./tutorial/jamstack/jam-5.png)

**🔵 Move to CDN:** 

![ok](./tutorial/jamstack/jam-3.png)

## 2. Why this is cool ?

![.](./tutorial/line.png)

### 🔐 2.1 - Security

> *Do you remember `/wp-admin.php` ? Me too.* The elder Cedrick

The Jamstack removes multiple moving parts and systems from the hosting infrastructure resulting in fewer servers and systems to harden against attack.

Serving pages and assets as pre-generated files allows **read-only hosting** reducing attack vectors even further. Meanwhile dynamic tools and services can be provided by vendors with teams dedicated to securing their specific systems and providing high levels of service.

![.](./tutorial/line.png)

### 🌐 2.2 - Scalalibility

> *Have you ever Ddos Amazon CloudFront ? Neither have I* the elder Cedrick.

When sites can be served entirely from a CDN there is no complex logic or workflow to determine what assets can be cached and when.

With Jamstack sites everything can be cached in a content delivery network. With simpler deployments, built-in redundancy and **incredible load capacity.**

![.](./tutorial/line.png)

### 🚀 2.3 - Performance

![ok](./tutorial/jamstack/slow.jpeg)

Page loading speeds have an impact on user experience and conversion. Jamstack sites remove the need to generate page views on a server at request time by instead generating pages ahead of time during a build.

With all the pages are already available on a CDN close to the user and ready to serve, very high performance is possible without introducing expensive or complex infrastructure.

![.](./tutorial/line.png)

### 🆘 2.4 - Maintainability

![ok](./tutorial/jamstack/maintenance.gif)

When hosting complexity is reduced, so are maintenance tasks. A pre-generated site, being served directly from a simple host or directly from a CDN does not need a team of experts to "keep the lights on".

The work was done during the build, so now the generated site is stable and can be hosted without servers which might require patching, updating and maintain.

![.](./tutorial/line.png)

### 📦 2.5 - Portability

![ok](./tutorial/jamstack/your-problem.png)

Jamstack sites are pre-generated. That means that you can host them from a wide variety of hosting services and have greater ability to move them to your preferred host. Any simple static hosting solution should be able to serve a Jamstack site.

Bye-bye infrastructure lock-in.

### 💡 2.6 - Developer Experience

![ok](./tutorial/jamstack/dx.gif)

Let us show you this one today

## 3. Introduction to Netlify

> *Source [https://www.netlify.com](https://www.netlify.com/)*

### 3.1 Netlify in a nutshell

**Decoupling the frontend from the backend**: Unlike the large legacy apps, Jamstack projects neatly separate the frontend pages and UI from the backend apps and databases. Freed from backend servers, the frontend can then be deployed globally, directly to a CDN.

**Dynamic content via APIs**: The global frontend uses Javascript and APIs to talk to backend services, allowing pages to be enhanced and personalized.

*overview of netlify*
![ok](./tutorial/netlify.png)

### 3.2 Soooooooooo What about today ?

- We will have our code in GITHUB

- Netlify is integrated with GITHUB, on new commit it will BUILD and deploy the SITE on the CDN

- To code and commit to github we will use an IDE. You cacn use your own or we will provide you one in the Cloud called GITPOD.

- The application we will deploy is BattleStax. This is not only static content but also a REST API retrieve Data from a DB. The DB will ne DataStax Astra.


![Template CTRL click](./tutorial/architecture1.png?raw=true)

## 4. Want to learn more ?


**Angular vs VueJS vs React**
1. 🎥 [Angular vs React vs Vue [2020 Update]](https://www.youtube.com/watch?v=lYWYWyX04JI)
2. 🎥 [React vs. Angular vs. Vue: Which Should You Choose](https://www.youtube.com/watch?v=xDhzYQ4VyCw)
1. 📄 [Angular vs Vue vs React: choosing the best framework in 2020](https://www.educative.io/blog/react-angular-vue-comparison)
2. 📄 [React vs Angular vs Vue.js — What to choose in 2020? (updated in 2020)](https://medium.com/techmagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d)
3. 📄 [Angular vs React vs Vue 2020](https://athemes.com/guides/angular-vs-react-vs-vue/)

**Static site Generator (SSG)**
1. 📄 [What is a Static Site Generator? And 3 ways to find the best one](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)
2. 📄 [List of static generators](https://jamstack.org/generators/)


**Content Delivery Network (CDN)**
1. 🎥 [What is Content Delivery Network, by Ryan Sumner (4:32 min)](https://www.youtube.com/watch?v=Bsq5cKkS33I)
2. 🎥 [What is a CDN and why Developers should Care about using one (GOTO 2016) by Artur Bergman (32:10 min)](https://www.youtube.com/watch?v=farO15_0NUQ)

---
🏠 **Back** to [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) or **move** to the next section **=>** ⚒️ [Setup and deploy your first app](./README_step00.md)
