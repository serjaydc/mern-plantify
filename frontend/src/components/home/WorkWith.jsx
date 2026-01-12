import React from "react";
import Natural from "/Natural.png";
import Greenary from "/Greenary.png";
import Nursery from "/Nursery.png";
import PlantGuide from "/PlantGuide.png";
import PlantInfo from "/PlantInfo.png";
import { motion } from "motion/react";

const COMPANIES = [Natural, Greenary, PlantInfo, Nursery, PlantGuide];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WorkWith = () => {
  return (
    <div className="bg-[#EBEEE3] mb-20">
      <div className="container mx-auto px-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center lg:justify-between gap-12 flex-wrap h-fit py-4 lg:h-60 lg:py-0"
        >
          {COMPANIES.map((item, index) => (
            <motion.img
              key={index}
              src={item}
              alt="Company logo"
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkWith;
