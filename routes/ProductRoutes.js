const express = require("express");
const ProductController = require("../controllers/ProductsController");
const verifyToken = require("./middleware/authorization");

const router = express.Router();

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getSingleProduct);
router.post("/", verifyToken, ProductController.createProduct);

module.exports = router;
