import React from "react";

const ProductCard = ({ plant }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img
        src={plant.default_image?.regular_url}
        alt={plant.common_name}
        className="h-40 w-full object-contain mb-4"
      />

      <h3 className="font-semibold text-lg">{plant.common_name}</h3>

      <p className="text-sm text-gray-500 capitalize">{plant.type}</p>
    </div>
  );
};

export default ProductCard;
