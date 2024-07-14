"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/Tayo_cars_Logo.png";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <li className="cursor-pointer hover:text-primary">Cars</li>
            <li className="cursor-pointer hover:text-primary">About Us</li>
            <li className="cursor-pointer hover:text-primary">Contact Us</li>
          </ul>
        </nav>
        <div className="flex space-x-1">
          <button
            className="block px-4 py-2 transition md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RxHamburgerMenu size={26} />
          </button>
          <Link href="/login">
            <button className="px-4 py-2 text-white transition rounded-md md:block text-textLight bg-primary hover:bg-primary-dark">
              Sign In
            </button>
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="relative md:hidden bg-tertiary">
          <IoMdClose
            size={21}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute cursor-pointer top-2 right-5"
          />
          <ul className="flex flex-col p-6 space-y-4">
            <li className="cursor-pointer hover:text-primary">Home</li>
            <li className="cursor-pointer hover:text-primary">Cars</li>
            <li className="cursor-pointer hover:text-primary">About Us</li>
            <li className="cursor-pointer hover:text-primary">Contact Us</li>
            <li>
              <Link href="/login">
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

// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import Logo from "../../public/Tayo_cars_Logo.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div>
//       <header className="flex items-center justify-between px-6 py-5 md:px-20 lg:px-40 bg-tertiary">
//         <Image
//           src={Logo}
//           alt="logo"
//           width={150}
//           height={40}
//           className="p-0 mr-4 cursor-pointer"
//         />
//         <nav className="hidden space-x-6 md:flex">
//           <ul className="flex space-x-6">
//             <li className="cursor-pointer hover:text-primary">Home</li>
//             <li className="cursor-pointer hover:text-primary">Cars</li>
//             <li className="cursor-pointer hover:text-primary">Blog</li>
//             <li className="cursor-pointer hover:text-primary">About Us</li>
//             <li className="cursor-pointer hover:text-primary">Contact Us</li>
//           </ul>
//         </nav>
//         <button className="hidden px-4 py-2 text-white transition rounded-md bg-primary hover:bg-primary-dark md:block">
//           Sign In
//         </button>
//         <button
//           className="px-4 py-2 text-white rounded-md md:hidden bg-primary hover:bg-primary-dark"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           Menu
//         </button>
//       </header>
//       {isMenuOpen && (
//         <div className="md:hidden bg-tertiary">
//           <ul className="flex flex-col p-6 space-y-4">
//             <li className="cursor-pointer hover:text-primary">Home</li>
//             <li className="cursor-pointer hover:text-primary">Cars</li>
//             <li className="cursor-pointer hover:text-primary">Blog</li>
//             <li className="cursor-pointer hover:text-primary">About Us</li>
//             <li className="cursor-pointer hover:text-primary">Contact Us</li>
//             <li>
//               <button className="w-full px-4 py-2 text-white transition rounded-md bg-primary hover:bg-primary-dark">
//                 Sign In
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
