import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import AboutImage from "/public/about.png";

const About = () => {
  return (
    <div className="container mx-auto px-2 mb-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={AboutImage} alt="Plant Image" className="rounded-lg" />
        </motion.div>
        {/* Right (Text) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Our journey
          </h2>

          <p className="mb-4 text-sm sm:text-base text-gray-600 leading-7">
            Quis eleifend orci nunc, blandit massa, vitae. Dui nulla augue in id
            enim non. Venenatis aenean suscipit facilisis amet. Pellentesque
            nullam mi vitae neque ipsum. Quis in vitae est eu pulvinar sed.
            Netus lorem sit turpis tristique pharetra sit. Tortor ornare libero
            semper cursus. Mollis erat augue egestas laoreet est auctor.
          </p>
          <p className="hidden lg:block mb-4 text-sm sm:text-base text-gray-600 leading-7">
            Dui nulla augue in id enim non. Venenatis aenean suscipit facilisis
            amet. Pellentesque nullam mi vitae neque ipsum. Sem magna ut
            pharetra vitae duis eu senectus sem risus. Morbi non, semper
            vestibulum euismod accumsan augue.
          </p>

          <Link
            to="/about"
            className="inline-block bg-stone-950 text-white py-4 px-8 rounded-lg hover:bg-stone-800 transition"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
