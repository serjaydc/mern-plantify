import React from "react";
import { Link } from "react-router-dom";
import hero1 from "/public/hero1.png";
import hero2 from "/public/hero2.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="container mx-auto px-2 mb-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
            Perfect plants on sale for your{" "}
            <span className="text-emerald-700">interiors</span>
          </h1>

          <p className="mb-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            eleifend orci nunc, blandit massa, vitae. Quis in vitae est eu
            pulvinar sed. Netus lorem sit turpis tristique pharetra sit. Egestas
            felis feugiat augue auctor quam nisl vel sit sagittis.
          </p>

          <Link
            to="/collection"
            className="inline-block bg-stone-950 text-white py-4 px-8 rounded-lg hover:bg-stone-800 transition"
          >
            Shop Collection
          </Link>
        </motion.div>

        {/* Right (Images) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end gap-6"
        >
          <div className="w-60 sm:w-72 lg:w-80 aspect-3/4">
            <img
              src={hero1}
              alt="Plant"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <div className="w-60 sm:w-72 lg:w-80 aspect-3/4 mb-15 mt-5">
            <img
              src={hero2}
              alt="Plant"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
