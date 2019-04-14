# Backend Routing with Express Server, Knex ORM, MariaDB

### The backend uses mySql mariaDB locally with Express and Knex.

---

# Installation

- `git clone URL_LINK`
- `npm install`
- `reconfigure your db_settings.js file in './src/config/db_settings.js to your own settings`
- `npm run server`

---

# Where to start

- Read all: `localhost:4000/api/category`
- Read by id: `localhost:4000/api/category/(id)`
- Delete is on Postman: `localhost:4000/api/category/(id)`
- Add or Post new item is on Postman: `localhost:4000/api/category`
  - Change header to `Body`
  - Change to `JSON(application/json)`
  - Example:
    `{ "title": "MongoDB", "budgetLimit": 500, "isActive": 1 }`
  - Should return: \***\*OK\*\***

---

# Documentation

- [SQL Basic](https://www.w3schools.com/sql/default.asp)
- [Knex](https://knexjs.org/#Builder-where)
- Postgres: [video tutorial](https://www.youtube.com/watch?v=QNw9q4YXR4E)
