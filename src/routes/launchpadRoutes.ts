import express from "express";
import * as launchpadController from "../controllers/lauchpadController";

const router = express.Router();

router.post("/create", launchpadController.createData);
router.get("/read/:id", launchpadController.readData);
router.put("/update/:id", launchpadController.updateData);
router.delete("/delete/:id", launchpadController.deleteData);

export default router;
