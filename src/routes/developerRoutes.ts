import express from "express";
import * as developerController from "../controllers/developerController";

const router = express.Router();

router.post("/create", developerController.createDeveloper);
router.get("/read/:name", developerController.readDeveloper);
router.put("/update/:name", developerController.updateDeveloper);
router.delete("/delete/:name", developerController.deleteDeveloper);

export default router;
