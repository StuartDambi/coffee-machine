const express = require("express");
const cors = require("cors");

const db = require("./models");
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");
const categoryRoutes = require("./routes/CategoryRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoryRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`app listening to port ${PORT}`));
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = app;
