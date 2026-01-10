import api from "./axios";

export const fetchPlants = async () => {
  const { data } = await api.get("/plants");
  return data;
};
