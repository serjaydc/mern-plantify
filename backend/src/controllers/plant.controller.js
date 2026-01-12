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

export const getFreshArrivals = async (req, res) => {
  try {
    const plants = await fetchPlants(
      `https://trefle.io/api/v1/plants?token=${process.env.PLANT_API_KEY}&order=created_at`
    );

    res.json({
      ...plants,
      data: plants.data.slice(0, 4),
    });
  } catch (error) {
    console.log("Error in getFreshArrivals Controller", error.message);

    res.status(500).json({ message: error.message });
  }
};

export const getPopularPlants = async (req, res) => {
  try {
    const plants = await fetchPlants(
      `https://trefle.io/api/v1/plants?token=${process.env.PLANT_API_KEY}&filter[edible_part]=roots,leaves`
    );

    res.json({
      ...plants,
      data: plants.data.slice(0, 4),
    });
  } catch (error) {
    console.log("Error in getPopularPlants Controller", error.message);

    res.status(500).json({ message: error.message });
  }
};

export const getBestCollection = async (req, res) => {
  try {
    const plants = await fetchPlants(
      `https://trefle.io/api/v1/plants?token=${process.env.PLANT_API_KEY}&order=updated_at&limit=4`
    );

    res.json(plants);
  } catch (error) {
    console.log("Error in getBestCollection Controller", error.message);

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
