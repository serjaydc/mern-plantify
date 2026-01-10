import dotenv from "dotenv";

dotenv.config();

const baseURL = process.env.PERENUAL_BASE_URL;
const apiKey = process.env.PERENUAL_API_KEY;

export const getAllPlants = async () => {
  const response = await fetch(`${baseURL}/species-list?key=${apiKey}`);

  if (!response.ok) {
    throw new Error(`Perenual API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export const getSinglePlantById = async (id) => {
  const response = await fetch(
    `${baseURL}/species/details/${id}?key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(`Perenual API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
