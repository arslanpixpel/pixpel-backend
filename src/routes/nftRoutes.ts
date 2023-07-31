import express from "express";
import * as nftController from "../controllers/nftController";

const router = express.Router();

router.post("/create", nftController.createNft);
router.get("/read/:name", nftController.readNft);
router.put("/update/:name", nftController.updateNft);
router.delete("/delete/:name", nftController.deleteNft);

export default router;
