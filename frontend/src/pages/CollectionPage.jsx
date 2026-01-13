import React, { useEffect, useState } from "react";
import { fetchPlantsClient } from "../api/plants.js";
import ProductCard from "../components/products/ProductCard";
import FilterPlants from "../components/collection/FilterPlants.jsx";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const CollectionPage = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await fetchPlantsClient();
        setPlants(data);
      } catch (error) {
        setError(error);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  return (
    <div className="mb-10">
      <div className="container mx-auto px-2">
        <FilterPlants />
        {error ?? <p className="text-xl text-red-500 text-center">{error}</p>}
        {loading ? (
          <p className="text-xl text-center">Loading...</p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {plants.map((plant) => (
              <ProductCard
                key={plant.id}
                plant={plant}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
