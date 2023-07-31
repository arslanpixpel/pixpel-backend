import express from "express";
import * as playerController from "../controllers/playerController";

const router = express.Router();

router.post("/create", playerController.createPlayer);
router.get("/read/:name", playerController.readPlayer);
router.put("/update/:name", playerController.updatePlayer);
router.delete("/delete/:name", playerController.deletePlayer);

export default router;
