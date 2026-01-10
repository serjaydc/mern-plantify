import Plant from "../models/plant.model.js";
import { getAllPlants, getSinglePlantById } from "../services/plant.service.js";

export const getPlants = async (req, res) => {
  try {
    const plants = await getAllPlants();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSinglePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await getSinglePlantById(id);
    res.json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
