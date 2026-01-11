import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fetchPlantsClient } from "../../api/plants.js";

import ProductCard from "../products/ProductCard";

const BestSeller = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlants = async () => {
      try {
        const data = await fetchPlantsClient();
        setPlants(data.slice(0, 3));
      } catch (error) {
        setError("Failed to load plants!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPlants();
  }, []);

  return (
    <section className="container mx-auto px-2 sm:px-4 mb-2 sm:mb-4 md:mb-8 lg:md-12">
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_3fr] gap-4 items-center"
      >
        <div>
          <h2 className="text-2xl font-bold mb-3">Best Selling Plants</h2>
          <p className="text-stone-500 mb-6">
            Easiest way to healthy life by buying your favorite plants
          </p>
          <Link
            to={`/products/`}
            className="bg-emerald-200 py-2 px-4 rounded-md flex items-center gap-2 max-w-fit hover:gap-3 transition-all"
          >
            <span>See More</span>
            <FaArrowRightLong />
          </Link>
        </div>
        <div
          className={`${
            error || loading
              ? "w-full flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          }`}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            plants.map((plant) => <ProductCard key={plant.id} plant={plant} />)
          )}
          {error && <p className="text-red-500 font-medium">{error}</p>}
        </div>
      </motion.div>
    </section>
  );
};

export default BestSeller;
