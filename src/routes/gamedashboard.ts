import express from "express";
import * as gamedashboard from "../controllers/gamedashboardController";

const router = express.Router();

router.post("/creategamedashboard", gamedashboard.createGamedashboard);

export default router;
