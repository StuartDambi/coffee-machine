import express from "express";
import cors from "cors";

import db from "./models";
import userRoutes from "./routes/UserRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`listening to port ${PORT}`));
});
