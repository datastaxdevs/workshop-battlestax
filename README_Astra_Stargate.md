# 📚 What are DataStax Astra and Stargate

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > 📚 **[What are DataStax Astra and Stargate](#README_Astra_Stargate.md)**

If you are already familiar with **DataStax Astra and Stargate** and just want to move on to the next exercise go to section => *[Connect to your Astra database](./README_step02.md)*. Otherwise, read on.

1. [Introduction to Astra](#1-introduction-to-astra-db)
2. [Introduction to Stargate](#2-introduction-to-stargate)
3. [Want to know More](#3-want-to-know-more)

## 1. Introduction to Astra DB

> *Sources [Astra Documentation](https://docs.astra.datastax.com/docs)*

![](./tutorial/astra.png?raw=true)

**`NoSQL Database Apache Cassandra as-a-service + DevTools`**

DataStax Astra, built on the best distribution of Apache Cassandra™, provides the ability to develop and deploy data-driven applications with a cloud-native service, without the hassles of database and infrastructure administration. By automating tuning and configuration, DataStax Astra radically simplifies database operations.

![](./tutorial/architecture-astra.png?raw=true)

## 2. Introduction to STARGATE

> *Sources [Stargate Documentation](https://stargate.io/docs/stargate/0.1/concepts/concepts.html)*

![](./tutorial/stargate.png?raw=true)


**`Data Gateway providing REST + GraphQL = Icluded in ASTR`A**

**Developers...**
- Do you like learning query languages (CQL, N1QL, GQL, cypher, gremlin….) No. Save my JSON, give it to me back when I need it
ORM / Spring Data are so popular nowadays
- Do you care about how your data is stored ?
Physical data model part of the interface…yike
Create structures based on queries
- Do you like installing and running Databases locally
especially distributed databases
especially with datasets and integration tests

**Operators and Databases Administrators…**
- Do you allow developers to execute direct queries against your DB ?
- Do you like opening port ranges like 0-65536 to allow communications with applications, especially in the cloud.
- Do you like creating dedicated projects and hiring people just to create APIs to expose an existing treatment (digital transformation FTW)

![](./tutorial/architecture-stargate.png?raw=true)

Stargate is a framework used to customize all aspects of data access. It is deployed between client applications and a database to provide an abstraction layer that can be used to shape your data access to fit your application’s needs.



## 3. Want to know more

## How does this work in our application ?

## Want to learn more ?

**Click** below to move to the next section.

📚 [What can Netlify do for you](./README_Netlify.md) > ⚒️ [Create a mock REST API with Netlify functions](./README_step01.md) > 📚 **[What is DataStax Astra and Stargate](#)** |  ***next=>** ⚒️ [Connect to your Astra database](./README_step02.md)*