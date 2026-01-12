import express from "express";
import {
  getBestCollection,
  getFreshArrivals,
  getPlants,
  getPopularPlants,
  getSinglePlant,
} from "../controllers/plant.controller.js";

const router = express.Router();

router.get("/", getPlants);
router.get("/fresh", getFreshArrivals);
router.get("/best", getBestCollection);
router.get("/popular", getPopularPlants);
router.get("/:id", getSinglePlant);

export default router;
