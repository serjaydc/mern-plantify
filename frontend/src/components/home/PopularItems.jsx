import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPopularClient } from "../../api/plants.js";
import { FaHeart } from "react-icons/fa6";
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
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PopularItems = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPlants = async () => {
      try {
        const data = await fetchPopularClient();
        setPlants(data);
      } catch (error) {
        setError("Failed to fetch popular items");
        console.log(error.message);
      } finally {
        setloading(false);
      }
    };
    loadPlants();
  }, []);

  return (
    <div className="container mx-auto px-2 mb-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
        Popular Items
      </h2>
      <div className="text-center">
        {/* CARDs */}
        {error && <p className="text-xl text-red-500">{error}</p>}
        {loading ? (
          <p className="text-2xl mb-20">Loading...</p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 gap-4"
          >
            {plants.map((plant) => (
              <motion.div
                variants={itemVariants}
                key={plant.id}
                className="shadow-md rounded-md text-left hover:scale-103 transition-all"
              >
                <div className="relative">
                  <img
                    src={plant.image_url}
                    alt={plant.common_name}
                    className="h-100 w-full object-cover rounded-tr-md rounded-tl-md"
                  />
                  <div className="px-2 py-4">
                    <h3 className="text-lg lg:text-xl mb-2">
                      {plant.common_name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-emerald-200 px-2 py-1 rounded-md">
                        {plant.genus}
                      </span>
                      <span className="bg-orange-200 px-2 py-1 rounded-md">
                        {plant.family}
                      </span>
                    </div>
                  </div>
                  <button className="absolute top-3 right-3 bg-gray-100 text-gray-300 hover:bg-red-300 hover:text-red-500 p-2 rounded-full cursor-pointer transition">
                    <FaHeart className="size-6" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        <Link
          to="/collection"
          className="inline-block bg-stone-950 text-white py-4 px-8 rounded-lg hover:bg-stone-800 transition"
        >
          Browse All
        </Link>
      </div>
    </div>
  );
};

export default PopularItems;
