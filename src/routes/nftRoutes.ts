import express from "express";
import * as nftController from "../controllers/nftController";

const router = express.Router();

router.post("/create", nftController.createNft);
router.get("/read/:id", nftController.readNft);
router.put("/update/:id", nftController.updateNft);
router.delete("/delete/:id", nftController.deleteNft);
router.get("/getAll", nftController.getAllNfts);

export default router;
