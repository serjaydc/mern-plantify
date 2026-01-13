import React, { useEffect, useState } from "react";
import { fetchPlantByIdClient } from "../api/plants.js";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";

const SinglePlant = () => {
  const { id } = useParams();

  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const data = await fetchPlantByIdClient(id);
        console.log(data); // 👀 inspect this
        setPlant(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlant();
  }, [id]);

  return (
    <div className="container mx-auto px-2 mb-10 min-h-175">
      {error && <p className="text-xl text-red-500">{error}</p>}
      {loading ? (
        <p className="text-xl text-center">Loading...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <img
              src={plant.image_url}
              alt={plant.common_name}
              className="w-full h-auto rounded-xl object-cover"
            />
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-semibold">{plant.common_name}</h1>
              {plant.year && <p className="text-lg">Year: {plant.year}</p>}
            </div>
            <div>
              <p>{plant.bibliography}</p>
              <p>{plant.author}</p>
              <p>{plant.observations}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SinglePlant;
