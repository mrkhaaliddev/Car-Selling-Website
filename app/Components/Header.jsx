"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../public/Tayo_cars_Logo.png";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import User from "../../public/user.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUserInfo(storedUserInfo);
    }
  }, []);

  const LogOutUser = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userInfo");
      window.location.reload();
    }
  };

  return (
    <div>
      <header className="sticky flex items-center justify-between py-5 sm:px-5 md:px-20 lg:px-32 text-textPrimary">
        <Link href="/home">
          <Image
            src={Logo}
            alt="logo"
            width={150}
            height={40}
            className="p-0 mr-4 cursor-pointer"
          />
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex visible space-x-6">
            <li className="cursor-pointer hover:text-primary">
              <Link href="/home">Home</Link>
            </li>
            <Link href="/cars">
              <li className="cursor-pointer hover:text-primary">Cars</li>
            </Link>
            <Link href="/aboutUs">
              <li className="cursor-pointer hover:text-primary">About Us</li>
            </Link>
            <Link href="/contactUs">
              <li className="cursor-pointer hover:text-primary">Contact Us</li>
            </Link>
          </ul>
        </nav>
        <div className="flex space-x-1">
          <button
            className="block px-4 py-2 transition md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RxHamburgerMenu size={26} />
          </button>
          {userInfo ? (
            <div className="flex items-center space-x-4">
              <p className="cursor-pointer hover:text-primary">
                {userInfo.name}
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger className="border-none outline-none cursor-pointer">
                  <Image src={User} width={43} alt="user" height={43} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={LogOutUser}
                    className="cursor-pointer"
                  >
                    LogOut
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Link href="/login">
              <Button className="px-4 py-2 text-white transition rounded-md md:block hover:bg-primary-dark">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="relative bg-white md:hidden">
          <IoMdClose
            size={21}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute cursor-pointer top-2 right-5"
          />
          <ul className="flex flex-col p-6 space-y-4">
            <Link href="/home" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li className="cursor-pointer hover:text-primary">Home</li>
            </Link>
            <Link href="/cars" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li className="cursor-pointer hover:text-primary">Cars</li>
            </Link>
            <Link href="/aboutUs" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li className="cursor-pointer hover:text-primary">About Us</li>
            </Link>
            <Link href="/contactUs" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li className="cursor-pointer hover:text-primary">Contact Us</li>
            </Link>
            <li>
              <Link href="/login" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <button className="w-full px-4 py-2 text-white transition rounded-md bg-primary hover:bg-primary-dark">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
