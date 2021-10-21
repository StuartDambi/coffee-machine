import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/auth/login", UserController.loginUser);
router.post("/auth/register", UserController.createUser);

export default router;
