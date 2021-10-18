import dotenv from "dotenv";

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
