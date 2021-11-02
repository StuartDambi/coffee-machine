const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/auth/login", UserController.loginUser);
router.post("/auth/register", UserController.createUser);

module.exports = router;
