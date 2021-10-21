import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";

import db from "./models";
import userRoutes from "./routes/UserRoutes";
import productRoutes from "./routes/ProductRoutes";

const app = express();

// TODO: store session secret in env variables
app.use(
  session({ secret: "simplesecret", saveUninitialized: true, resave: true })
);
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`listening to port ${PORT}`));
});
