import React from "react";
import { FaHeart } from "react-icons/fa6";

const ProductCard = ({ plant }) => {
  return (
    <div className="h-100 bg-gray-100/50 shadow-md p-2 rounded-xl">
      <div className="relative h-80 mb-2">
        <img
          src={plant.image_url}
          alt={plant.common_name}
          className="h-full w-full object-cover rounded-xl shadow-md"
        />
        <button className="absolute top-3 right-3 bg-gray-300 text-gray-100 hover:text-red-500 hover:bg-red-300  p-2 rounded-xl cursor-pointer transition-all">
          <FaHeart className="size-5" />
        </button>
      </div>
      {/* Content */}
      <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium capitalize">
          {plant.type || "Houseplant"}
        </span>
        {plant.family && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">
            {plant.family}
          </span>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Easy Care</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <span>Indoor</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
