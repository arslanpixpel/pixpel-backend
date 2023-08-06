import express from "express";
import * as dataController from "../controllers/lauchpadController";

const router = express.Router();

router.post("/create", dataController.createData);
router.get("/read/:id", dataController.readData);
router.put("/update/:id", dataController.updateData);
router.delete("/delete/:id", dataController.deleteData);

export default router;
