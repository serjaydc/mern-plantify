import dotenv from "dotenv";

dotenv.config();

const baseURL = process.env.PERENUAL_BASE_URL;
const apiKey = process.env.PERENUAL_API_KEY;

/* =========================
   CACHE
========================= */
let cachedPlants = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

/* =========================
   FETCH ALL PLANTS
========================= */
export const getAllPlants = async () => {
  const now = Date.now();

  // ✅ serve from cache
  if (cachedPlants && now - lastFetchTime < CACHE_TTL) {
    return cachedPlants;
  }

  try {
    console.log("🌱 Fetching plants from Perenual API");

    const response = await axios.get(`${baseURL}/species-list?key=${apiKey}`);

    const plants = response.data?.data;

    if (!Array.isArray(plants)) {
      throw new Error("Perenual API limit reached or invalid response");
    }

    cachedPlants = plants;
    lastFetchTime = now;

    return plants;
  } catch (error) {
    console.error("❌ getAllPlants error:", error.response?.status);
    throw new Error("Failed to fetch plants");
  }
};

/* =========================
   FETCH SINGLE PLANT
========================= */
export const getSinglePlantById = async (id) => {
  // 🔥 try cache first
  if (cachedPlants) {
    const cachedPlant = cachedPlants.find(
      (plant) => String(plant.id) === String(id)
    );

    if (cachedPlant) {
      return cachedPlant;
    }
  }

  try {
    console.log("🌱 Fetching single plant from Perenual API");

    const response = await axios.get(
      `${baseURL}/species/details/${id}?key=${apiKey}`
    );

    if (!response.data) {
      throw new Error("Plant not found");
    }

    return response.data;
  } catch (error) {
    console.error("❌ getSinglePlantById error:", error.response?.status);
    throw new Error("Failed to fetch plant");
  }
};

// export const getAllPlants = async () => {
//   const response = await fetch(`${baseURL}/species-list?key=${apiKey}`);

//   if (!response.ok) {
//     throw new Error(`Perenual API error: ${response.status}`);
//   }

//   const data = await response.json();
//   return data;
// };

// export const getSinglePlantById = async (id) => {
//   const response = await fetch(
//     `${baseURL}/species/details/${id}?key=${apiKey}`
//   );

//   if (!response.ok) {
//     throw new Error(`Perenual API error: ${response.status}`);
//   }

//   const data = await response.json();
//   return data;
// };
