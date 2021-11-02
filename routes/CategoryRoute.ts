import express from "express";
import CategoryController from "../controllers/CategoryController";

import verifyToken from "./middleware/authorization";

const router = express.Router();

router.get("/", verifyToken, CategoryController.getCategories);
router.post("/", verifyToken, CategoryController.createCategory);

export default router;
