import express from "express";
import * as orderController from "../controllers/nftorderController";

const router = express.Router();

router.post("/create", orderController.createOrder);
router.get("/read/:name", orderController.readOrder);
router.put("/update/:name", orderController.updateOrder);
router.delete("/delete/:name", orderController.deleteOrder);

export default router;
