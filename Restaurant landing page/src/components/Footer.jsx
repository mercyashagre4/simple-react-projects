import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Habesha Restaurant</h1>
          <p className=" text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/"
            >
              Dishes
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/"
            >
              About
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/"
            >
              Menu
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/"
            >
              Our Traditional Dishes
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
            to="/"
            >
              Premium Menu
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/"
            >
              HabeshaRestaurant@email.com
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/"
            >
              +251-934-255-136
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/"
            >
              Social media
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Habesha programmers</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;