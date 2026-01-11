import heroImg from "/public/hero.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-2 sm:px-4 mb-2 sm:mb-4 md:mb-8 lg:md-12"
    >
      <div className="bg-linear-to-r from-cyan-200 via-[#C1DCDC] to-blue-200 p-12 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 max-w-md"
          >
            <h1 className="text-6xl font-bold mb-6">Buy your dream plants</h1>
            <div className="flex items-center gap-10 font-medium mb-6">
              <div>
                <span className="text-2xl">50+</span>
                <p className="">Plant Species</p>
              </div>
              <div>
                <span className="text-2xl">100+</span>
                <p>Customers</p>
              </div>
            </div>
            <div className="flex items-center w-full relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-white p-3 w-full rounded-xl outline-none hover:shadow-md transition-all"
              />
              <div className="absolute right-2">
                <button
                  type="submit"
                  className="p-3 bg-emerald-200 rounded-xl cursor-pointer"
                >
                  <FaMagnifyingGlass className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
          {/* Right */}
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 max-w-md h-100"
          >
            {/* Outer wrapper */}
            <div className="relative h-full w-full">
              {/* Rotated gradient background */}
              <div
                className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-stone-800/90 to-gray-900/90 backdrop-blur-sm 
                      rounded-2xl"
              />

              {/* Image wrapper (counter-transform) */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <img
                  src={heroImg}
                  alt="Plant Image"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
