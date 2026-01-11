import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { title: "Natural Plants", image: "/Category-1.png", link: "/products" },
  { title: "Plant Accessories", image: "/Category-2.png", link: "/products" },
  { title: "Artificial Plants", image: "/Category-3.png", link: "/products" },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 mb-2 sm:mb-4 md:mb-8 lg:md-12">
      <div className="flex flex-col gap-10 text-center">
        <div>
          <h2 className="font-bold text-3xl mb-2">Categories</h2>
          <p className="text-gray-500">Find what you are looking for</p>
        </div>
        <div className="flex justify-center gap-4">
          {CATEGORIES.map((category, index) => (
            <Link key={index} to={category.link}>
              <div className="flex flex-col">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-100 w-100 object-cover mb-2 rounded-xl"
                />
                <h3>{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 mb-2">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link
            to={`/products`}
            className="bg-gray-200 py-2 px-4 rounded-md flex items-center gap-2 max-w-fit hover:gap-3 transition-all"
          >
            <span>Explore</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
