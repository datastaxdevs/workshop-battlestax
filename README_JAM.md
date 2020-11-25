# What is the JAM Stack ? 

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > 📚 **[What is the JAMStack](#)** | ***next=>**  ⚒️ [Setup and deploy your first app](./README_step00.md)*

If you are already familiar with **JAMStack** and just want to move on to the first exercise go to the next section => *[Setup and deploy your first app](./README_step00.md)*. Otherwise, read on.

1. [Introduction to the JAMStack](#1-introduction-to-the-jamstack)
2. [Why this is cool ?](#2-why-this-is-cool-)
3. [Want to learn more ?](#3-want-to-learn-more-)

## 1. Introduction to the JAMStack

> *Sources [JamStack.org](https://jamstack.org/) and [Netlify Documentation](https://www.netlify.com/jamstack/)*

Jamstack is the new standard architecture for the web. Using Git workflows and modern build tools, pre-rendered content is served to a CDN and made dynamic through APIs and serverless functions. Technologies in the stack include JavaScript frameworks, Static Site Generators, Headless CMSs, and CDNs.

![ok](./tutorial/jamstack/jam-1.png)

**🔵 Javascript:** can represent any modern Javascript/Typescript framework like `React`, `Vue`, or `Angular` or even vanilla JS.

<table>
 <tr>
  <td><img src="./tutorial/jamstack/logo-react.png"/></td>
  <td><img src="./tutorial/jamstack/logo-angular.png"/> </td>
  <td><img src="./tutorial/jamstack/logo-vuejs.png"/></td>
  </tr>
</table>

<br/>

**🔵 API:** is a backend serving real time data through either REST or GraphQL, endpoints to interact with fetch, ajax,axios

<table>
 <tr>
  <td>
   <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
    <img src="./tutorial/jamstack/logo-rest.png"/>
   </a>
  </td>
  <td>
   <a href="#">
    <img src="./tutorial/jamstack/logo-graphql.png"/>
   </a>
  </td>
  </tr>
</table>

<br/>

**🔵 Markup:** can be either plain old HTML or static content like markdown. This is the nature of markup that will determine the static page generator technology

<table>
 <tr>
  <td>
   <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
    <img src="./tutorial/jamstack/logo-html.png"/>
   </a>
  </td>
  <td>
   <a href="https://www.markdownguide.org/">
    <img src="./tutorial/jamstack/logo-markdown.png"/>
   </a>
  </td>
  </tr>
</table>

<br/>

**🔵 Static page generator:** You can find a pretty exhaustive list [here](https://jamstack.org/generators/). Most commonly used are Gatsby|Hugo|Jekyll for markdown files and [NextJS](https://nextjs.org/) for pure React.

<table>
 <tr>
   <td><img src="./tutorial/jamstack/logo-gatsby.png"/></td>
  <td><img src="./tutorial/jamstack/logo-next.png"/></td>
  <td><img src="./tutorial/jamstack/logo-jekyll.png"/></td>
  <td><img src="./tutorial/jamstack/logo-hugo.png"/></td>
  </tr>
</table>

<br/>

**🔵 Pre-rendering AND Decoupling:** The core principles of **pre-rendering**, and **decoupling**, enable sites and applications to be delivered with greater confidence and resilience than ever before.

**🔵 CDN:**

## 📄 What is Netlify ?

> *Source [https://www.netlify.com](https://www.netlify.com/)*

You have already seen a first feature of Netlify by creating and deploying a site. This part is called [The workflow](https://www.netlify.com/products/workflow/).

- **✅  Configure builds** – Netlify can run your build command and deploy the result whenever you push to your Git repo. Get started with basic build settings, learn about managing build dependencies, and explore additional options available with file-based configuration.

- **✅ Site deploys** – Atomic deploys with Netlify guarantee that your site is always consistent. Learn how to manage deploys, enable deploy notifications, and run a branch-based split test.

To know more about the **sites** here are the [documentation](https://docs.netlify.com/site-deploys/overview/#deploy-summary).

- **[Monitor sites *(not free)*](https://docs.netlify.com/monitor-sites/analytics/#get-started)** – Learn how Netlify Analytics lets you monitor trends in site activity. Monitor builds to understand the role individual sites play in your team's builds usage. Explore what kinds of logs and notifications are available for your sites.

![.](./tutorial/netlify-pageview1.png)

- **Domains & HTTP *(not free)*** Register a new domain in the Netlify UI, or use a domain you already own, to assign a custom domain to your site. Either way, you can have Netlify handle DNS management for you. We provide free automatic HTTPS on all sites.

- **Forms:** You can use Netlify Forms without adding API calls or extra JavaScript on your site, configure extra spam prevention beyond our automatic spam filtering, and receive notifications about new submissions.

- **CLI** You can use Netlify's command line interface to deploy sites or configure continuous deployment. Netlify Dev brings the functionality of your Netlify production environment directly to your local machine.

- **API** To get started with the Netlify API, learn how to authenticate and make a request. Then explore options for deploying via API and usage for some popular endpoints.

- **Functions** Deploy serverless functions built with JavaScript or with Go. You can even execute Background Functions for long-running tasks and trigger function calls when certain Netlify events happen.

**🔵 Before vs after** 

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


## 3. Want to learn more ?

<table>
 <tr>
  <td colspan="2">☁️ <b>Content Delivery Network (CDN)</b>
  </td>
 </tr>
 <tr>
   <td><img src="./tutorial/jamstack/what-is-cdn-1.png"/></td>
   <td><a href="https://www.youtube.com/watch?v=Bsq5cKkS33I">
    What is Content Delivery Network</a>
    <br/>Ryan Sumner (4:32 min)</td>
 </tr>
 <tr>
  <td><img src="./tutorial/jamstack/what-is-cdn-2.png"/></td>
   <td><a href="https://www.youtube.com/watch?v=farO15_0NUQ">What is a CDN and why Developers should Care about using one (GOTO 2016)</a><br/>Artur Bergman (32:10min)<a></td>
 </tr>
</table>

![.](./tutorial/line.png)

**Click** below to move to the next section.

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > 📚 **[What is the JAMStack](#)** | ***next=>**  ⚒️ [Setup and deploy your first app](./README_step00.md)*