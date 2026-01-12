import { Link } from "react-router-dom";
import { LuHeart, LuUser } from "react-icons/lu";

import Logo from "/public/logo.png";

import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="shadow-md mb-10"
    >
      <div className="container mx-auto px-2 ">
        <div className="h-20 flex items-center justify-between">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-16">
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/collection">Collection</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/favourite">
                <LuHeart className="size-5" />
              </Link>
              <Link to="/profile">
                <LuUser className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
