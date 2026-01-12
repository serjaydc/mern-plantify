import React from "react";
import Logo from "/logo.png";
import {
  FaFacebookF,
  FaFolder,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#EBEEE3] pb-5">
      <div className="container mx-auto px-2">
        {/* Top */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 py-10 md:py-20 border-b border-b-[#DDE2DA]">
          {/* left */}
          <div className="w-full lg:w-1/3">
            <img src={Logo} alt="Plantify Logo" className="mb-6" />
            <p className="mb-4">
              Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi non,
              semper vestibulum euismod accumsan augue.
            </p>
            <form>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="bg-[#DDE2D7] py-4 px-2 text-md rounded-tl-lg rounded-bl-lg outline-none"
                />
                <button
                  type="submit"
                  className="absolute bg-stone-950 text-white py-4 px-1 sm:px-8 rounded-tr-lg rounded-br-lg hover:bg-stone-800 transition cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          {/* Right */}
          <div className="flex flex-wrap sm:flex-nowrap items-start w-full lg:w-150 xl:w-220 justify-between gap-10 xl:gap-20 ">
            <div>
              <h3 className="font-semibold text-xl mb-4">Company</h3>
              <nav className="flex flex-col gap-1">
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  About
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Our Plantations
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Our Vision
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Installations
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Refer a friend
                </li>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Support</h3>
              <nav className="flex flex-col gap-1">
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Customer FAQs
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Shipping & Returns
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Contact Us
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Plant Care Trips
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Privacy Policy
                </li>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
              <nav className="flex flex-col gap-1">
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  Street Avenue 487, New York, USA
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  +333 346 364 366
                </li>
                <li className="text-neutral-800 hover:text-black transition-colors cursor-default">
                  info@templatesjungle.com
                </li>
              </nav>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="pt-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-600">
              © 2026 Designed by Templates Jungle. Developed by Serjay Antsibor
            </p>
            <div className="flex items-center gap-2">
              <h3 className="text-lg text-neutral-600">Social Links:</h3>
              <nav className="flex items-center gap-4">
                <li className="text-neutral-600 hover:text-black transition-colors">
                  <FaFacebookF className="size-5" />
                </li>
                <li className="text-neutral-600 hover:text-black transition-colors">
                  <FaInstagram className="size-5" />
                </li>
                <li className="text-neutral-600 hover:text-black transition-colors">
                  <FaLinkedin className="size-5" />
                </li>
                <li className="text-neutral-600 hover:text-black transition-colors">
                  <FaTwitter className="size-5" />
                </li>
                <li className="text-neutral-600 hover:text-black transition-colors">
                  <FaFolder className="size-5" />
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
