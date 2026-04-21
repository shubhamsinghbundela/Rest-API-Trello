import { Router } from "express";
import * as controller from "./org.controller.js";
import authMiddleware from "../auth/auth.middleware.js";

const router = Router();

router.post("/create-organisation", authMiddleware, controller.createOrganisation);
router.post("/add-member", authMiddleware, controller.addMember)

export default router;