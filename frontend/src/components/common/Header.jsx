import { Link } from "react-router-dom";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";

import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center h-20 gap-2 sm:gap-4 md:gap-8 lg:gap-10">
          {/* Logo */}
          <h2 className="text-2xl font-bold tracking-wider">
            <span className="text-emerald-600">Plant</span>ify
          </h2>

          {/* Nav + CTA */}
          <div className="flex flex-1 justify-between items-center text-stone-700">
            <nav className="flex items-center gap-4 sm:gap-6">
              <Link to="/" className="hover:text-stone-950 transition-colors">
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-stone-950 transition-colors"
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="hover:text-stone-950 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4 sm:gap-6">
              <button className="hover:text-stone-950 transition-colors cursor-pointer">
                <LuShoppingCart className="size-5" />
              </button>

              <Link
                to="/profile"
                className="hover:text-stone-950 transition-colors "
              >
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
