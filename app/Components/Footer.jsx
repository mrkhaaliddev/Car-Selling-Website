import React from "react";
import Logo from "../../public/Tayo_cars_Logo.png";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-10 text-black bg-tertiary te lg:px-40 lg:py-20 md:px-20 md:py-10 sm:p-5">
      <div className="flex flex-wrap justify-between space-y-5 lg:space-y-0">
        <div className="flex flex-col space-y-5 lg:w-[40%]">
          <h1 className="text-2xl font-semibold ">Logo</h1>
          <p className="leading-loose lg:w-80">
            Our Latest news, articles, and resources we will send to your inbox
            weekly.
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-4 text-sm text-black border rounded-md outline-none h-11 lg:w-72"
            />
            <button className="px-4 py-2 text-sm font-semibold text-white transition rounded-md bg-primary">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-5 lg:w-[30%] md:w-[40%] sm:w-full">
          <h1 className="text-2xl font-semibold ">Pages</h1>
          <ul className="flex flex-col mt-3 space-y-1">
            <li className="cursor-pointer hover:text-secondary ">Home</li>
            <li className="cursor-pointer hover:text-secondary ">Cars</li>
            <li className="cursor-pointer hover:text-secondary ">About Us</li>
            <li className="cursor-pointer hover:text-secondary ">Contact Us</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-5 lg:w-[30%] md:w-[40%] sm:w-full">
          <h1 className="text-2xl font-semibold ">Contact Us</h1>
          <p className="flex items-center gap-2 ">
            <FaPhone size={17} className="mt-1" />
            +252 611008043
          </p>
          <p className="flex items-center gap-2 ">
            <HiOutlineMail size={20} />
            cars@gmail.com
          </p>
          <p className="flex items-center gap-2 ">
            <CiLocationOn size={20} />
            Mogadisho, Somalia
          </p>
        </div>
      </div>

      <div className="mt-10 ">
        <div className="mb-2 border-t border-secondary"></div>
        <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-between">
          <p>
            © 2024 Tayo. All rights reserved. Developed by{" "}
            <Link
              href="https://github.com/khaalid-yare"
              className="hover:underline"
            >
              <strong>Mr Khaalid</strong>
            </Link>
          </p>
          <p className="flex space-x-2">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
