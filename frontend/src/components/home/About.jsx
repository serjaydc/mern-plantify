import React from "react";
import { RiPlantLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { FiPhoneIncoming } from "react-icons/fi";

const About = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 mb-2 sm:mb-4 md:mb-8 lg:md-12">
      <div className="flex flex-col gap-10 text-center">
        <div>
          <h2 className="font-bold text-3xl mb-2">About Us</h2>
          <p className="text-gray-500">
            Order now and appreciate the beauty of nature
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-emerald-200 p-5 rounded-full mb-2">
              <RiPlantLine className="size-7" />
            </div>
            <h3 className="tracking-tight font-bold mb-2">Large Assortment</h3>
            <p className="text-gray-500">
              We offer many different types of products with fewer variations in
              each category.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-200 p-5 rounded-full mb-2">
              <BsBoxSeam className="size-7" />
            </div>
            <h3 className="tracking-tight font-bold mb-2">
              Fast & Free Shipping
            </h3>
            <p className="text-gray-500">
              4-Day or less delivery time, free shipping and an expedited
              delivery option.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-200 p-5 rounded-full mb-2">
              <FiPhoneIncoming className="size-7" />
            </div>
            <h3 className="tracking-tight font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-500">
              Answers to any business related inquiry 24/7 and in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
