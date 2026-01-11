import dotenv from "dotenv";

import { fetchPlants } from "../services/plant.service.js";

dotenv.config();

export const getPlants = async (req, res) => {
  try {
    const plants = await fetchPlants(
      `https://trefle.io/api/v1/plants?token=${process.env.PLANT_API_KEY}`
    );
    res.json(plants);
  } catch (error) {
    console.log("Error in getPlants Controller", error.message);

    res.status(500).json({ message: error.message });
  }
};

export const getSinglePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await fetchPlants(
      `https://trefle.io/api/v1/plants/${id}?token=${process.env.PLANT_API_KEY}`
    );
    res.json(plant);
  } catch (error) {
    console.log("Error in getSinglePlant Controller", error.message);

    res.status(500).json({ message: error.message });
  }
};
