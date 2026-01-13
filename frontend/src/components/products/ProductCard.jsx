import React from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ProductCard = ({ plant, variants }) => {
  return (
    <Link
      to={`/collection/${plant.id}`}
      className="shadow-md rounded-md text-left hover:scale-103 transition-all"
    >
      <motion.div variants={variants} className="relative">
        <img
          src={plant.image_url}
          alt={plant.common_name}
          className="h-100 w-full object-cover rounded-tr-md rounded-tl-md"
        />
        <div className="px-2 py-4">
          <h3 className="text-lg lg:text-xl mb-2">{plant.common_name}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-emerald-200 px-2 py-1 rounded-md">
              {plant.genus}
            </span>
            <span className="bg-orange-200 px-2 py-1 rounded-md">
              {plant.family}
            </span>
          </div>
        </div>
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 bg-gray-100 text-gray-300 hover:bg-red-300 hover:text-red-500 p-2 rounded-full cursor-pointer transition"
        >
          <FaHeart className="size-6" />
        </button>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
