const express = require("express");
const ProductController = require("../controllers/ProductsController");
const verifyToken = require("./middleware/authorization");

const router = express.Router();

router.get("/", verifyToken, ProductController.getProducts);
router.post("/", verifyToken, ProductController.createProduct);

module.exports = router;
