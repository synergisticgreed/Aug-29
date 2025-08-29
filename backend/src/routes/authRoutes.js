import express from "express";

import { login,signup,home } from "../controllers/auth.controller.js";

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/",home);

export default router