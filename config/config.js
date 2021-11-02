import dotenv from "dotenv";

// postgres://bztrotipuoyaob:e8f28ee81d5bd69993280d0b624c56602b10020f7f33b6c2264b75934c3dfedc@ec2-3-219-103-45.compute-1.amazonaws.com:5432/de5g9flqbhfemh

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
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
};
