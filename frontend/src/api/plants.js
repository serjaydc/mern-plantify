import api from "./axios.js";

export const fetchPlantsClient = async () => {
  const { data } = await api.get("/plants");
  return data.data;
};

export const fetchFreshClient = async () => {
  const { data } = await api.get("/plants/fresh");
  return data.data;
};

export const fetchBestClient = async () => {
  const { data } = await api.get("/plants/best");
  return data.data;
};

export const fetchPopularClient = async () => {
  const { data } = await api.get("/plants/popular");
  return data.data;
};

export const fetchPlantByIdClient = async (id) => {
  const { data } = await api.get(`/plants/${id}`);
  return data.data;
};
