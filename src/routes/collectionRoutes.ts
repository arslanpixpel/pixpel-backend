import express from "express";
import * as collectionController from "../controllers/collectionController";

const router = express.Router();

router.post("/create", collectionController.createCollection);
router.get("/read/:developerId", collectionController.readCollectionsByDeveloper);
router.delete("/delete/:id", collectionController.deleteCollection);

export default router;
