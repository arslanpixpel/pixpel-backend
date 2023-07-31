import express from "express";
import * as developerController from "../controllers/developerController";

const router = express.Router();

router.post("/create", developerController.createDeveloper);
router.get("/read/:id", developerController.readDeveloper);
router.put("/update/:id", developerController.updateDeveloper);
router.delete("/delete/:id", developerController.deleteDeveloper);

export default router;
