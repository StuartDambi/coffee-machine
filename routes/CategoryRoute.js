const express = require("express");
const CategoryController = require("../controllers/CategoryController");

const verifyToken = require("./middleware/authorization");

const router = express.Router();

router.get("/", verifyToken, CategoryController.getCategories);
router.post("/", verifyToken, CategoryController.createCategory);

module.exports = router;
