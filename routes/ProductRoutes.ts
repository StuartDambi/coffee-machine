import express from "express";
import ProductController from "../controllers/ProductsController";
import verifyToken from "./middleware/authorization";

const router = express.Router();

router.get("/", verifyToken, ProductController.getProducts);
router.post("/", verifyToken, ProductController.createProduct);

export default router;
