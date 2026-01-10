import React from "react";
import heroImg from "../../public/hero.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="bg-linear-to-r from-cyan-100 via-[#C1DCDC] to-blue-100 p-12 rounded-2xl">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex-1">
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
          </div>
          {/* Right */}
          <div className="flex-2">
            <div>{/* <img src={heroImg} alt="Plant Image" /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
