import api from "./axios.js";

export const fetchPlantsClient = async () => {
  const { data } = await api.get("/plants");
  return data.data;
};
