import express from "express";
import * as developerController from "../controllers/developerController";

const router = express.Router();

router.get("/read/:id", developerController.readDeveloper);
router.put("/update/:id", developerController.updateDeveloper);
router.delete("/delete/:id", developerController.deleteDeveloper);
router.get("/getAll", developerController.getAllDevelopers);
router.post("/signup", developerController.signupDeveloper);
router.post("/signin", developerController.signinDeveloper);

export default router;
