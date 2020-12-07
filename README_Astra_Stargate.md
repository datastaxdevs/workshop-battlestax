# 📚 What are DataStax Astra and Stargate

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > 📚 **Step2 - [What are DataStax Astra and Stargate](#README_Astra_Stargate.md)**

If you are already familiar with **DataStax Astra and Stargate** and just want to move on to the next exercise go to
**next section** => [Implement a CRUD Api in Astra ](./README_step02.md). Otherwise, read on.

We will cover:
1. [Introduction to Astra](#1-introduction-to-astra)
2. [Introduction to Stargate](#2-introduction-to-stargate)
3. [Want to know More](#3-want-to-know-more-)

---

## 1. Introduction to Astra

![](./tutorial/astra.png?raw=true)

**`NoSQL Database Apache Cassandra as-a-service + DevTools`**

> *Sources [Astra Documentation](https://docs.astra.datastax.com/docs)*

DataStax Astra, built on the best distribution of Apache Cassandra™, provides the ability to develop and deploy data-driven applications with a cloud-native service, without the hassles of database and infrastructure administration. By automating tuning and configuration, DataStax Astra radically simplifies database operations.

![](./tutorial/architecture-astra.png?raw=true)

## 2. Introduction to STARGATE

![](./tutorial/stargate.png?raw=true)

**`Data Gateway providing REST + GraphQL = Included in ASTRA`**

> *Sources [Stargate Documentation](https://stargate.io/docs/stargate/0.1/concepts/concepts.html)*

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

## 3. Want to know more ?

- 📄 Official **Stargate** WebSite [Stargate.io](http://stargate.io)
- 📄 [Stargate DISCORD](http://stargate.io)
- 📄 Astra Portal [astra.datastax.com](astra.datastax.com)
- 📄 Official **K8ssandra** website [k8ssandra.io](http://k8ssandra.io)
- 📄 [Document API Skills Page](https://www.datastax.com/dev/document) on datastax.com/dev

**Click** below to move to the next section.

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > **Step 2 - ⚒️ [Implement a CRUD Api in Astra ](./README_step02.md)**
