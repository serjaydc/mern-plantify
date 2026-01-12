import React from "react";
import { LuShoppingCart, LuShieldCheck } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { motion } from "motion/react";

const ITEMS = [
  {
    title: "Free Shipping",
    description: "Capped at $100 per order",
    icon: LuShoppingCart,
  },
  {
    title: "Safe Payment ",
    description: "With our payment gateway",
    icon: LuShieldCheck,
  },
  {
    title: "Quality Guarantee ",
    description: "Fresh & Super item available",
    icon: SlBadge,
  },
  {
    title: "Big Offers ",
    description: "We give best offers surely",
    icon: MdOutlineLocalOffer,
  },
];

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

const Testimonials = () => {
  return (
    <div className="container mx-auto px-2 mb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center xl:justify-between items-center gap-12"
      >
        {ITEMS.map((item, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="flex items-center gap-2"
          >
            <div className="bg-emerald-200 p-3 rounded-full">
              <item.icon className="size-8 text-emerald-600" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-sm sm:text-base text-gray-500">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
