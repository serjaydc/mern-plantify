import express from "express";
import { getPlants, getSinglePlant } from "../controllers/plant.controller.js";

const router = express.Router();

router.get("/", getPlants);
router.get("/:id", getSinglePlant);

export default router;
