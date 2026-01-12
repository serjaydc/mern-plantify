import React from "react";
import { motion } from "motion/react";
import WhyUsImage from "/whyshop.png";

const WhyUs = () => {
  return (
    <div className="bg-[#EBEEE3] mb-20">
      <div className="container mx-auto px-2 py-10 lg:py-30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left (Text) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Why shop with us?
            </h2>

            <p className="mb-14 text-sm sm:text-base text-gray-600 leading-7">
              Dui nulla augue in id enim non. Venenatis aenean suscipit
              facilisis amet. Pellentesque nullam mi vitae neque ipsum. Sem
              magna ut pharetra vitae duis eu senectus sem risus. Morbi non,
              semper vestibulum euismod accumsan augue.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl text-emerald-700 font-bold">
                  01.
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl">Socculents</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    At in proin consequat ut cursus venenatis sapien.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl text-emerald-700 font-bold">
                  02.
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl">Air purifiers</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    At in proin consequat ut cursus venenatis sapien.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl text-emerald-700 font-bold">
                  03.
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl">Decorative</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    At in proin consequat ut cursus venenatis sapien.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-100 lg:w-100"
          >
            <div className="hidden bg-[#DDE2D7] md:block absolute -top-10 -left-10 h-120 w-70 z-10" />
            <div className="absolute top-0 left-0 w-full h-full lg:h-120 lg:w-100 z-20">
              <img
                src={WhyUsImage}
                alt="Plant Image"
                className=" object-contain w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
