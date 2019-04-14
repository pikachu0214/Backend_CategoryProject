const knex = require("knex");
const db_settings = require("./db_settings");

// initiate knex with config
module.exports = knex({
  client: "mysql",
  connection: {
    host: db_settings.host,
    port: db_settings.port,
    user: db_settings.user,
    password: db_settings.password,
    database: db_settings.database
  },
  pool: {
    min: 0,
    max: 7
  }
});
