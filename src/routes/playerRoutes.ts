import express from "express";
import * as playerController from "../controllers/playerController";

const router = express.Router();

router.post("/create", playerController.createPlayer);
router.get("/read/:id", playerController.readPlayer);
router.put("/update/:id", playerController.updatePlayer);
router.delete("/delete/:id", playerController.deletePlayer);
router.get("/getAll", playerController.getAllPlayers);
router.post("/signup", playerController.signupPlayer);
router.post("/signin", playerController.signinPlayer);

export default router;
