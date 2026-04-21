import { Router } from "express";
import authMiddleware from "../auth/auth.middleware.js";
import * as controller from "./task.controller.js"

const router = Router();

router.post("/create-task", authMiddleware, controller.createTask);

export default router;