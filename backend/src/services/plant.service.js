export const fetchPlants = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}, ${res.statusText}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Fetch Plants Error", error.message);
    throw error;
  }
};
