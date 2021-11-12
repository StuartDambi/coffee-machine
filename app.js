const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const db = require("./models");
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);


server.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

module.exports = app;
