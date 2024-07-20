import Link from "next/link";
import React from "react";
import notfound from "../../public/404.png";
import Image from "next/image";

const CustomNotfound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="text-center">
        <Image src={notfound} alt="404" width={600} height={300} />
        {/* <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, we couldn't find the page you're looking for.
        </p> */}
        <Link
          href="/"
          className="inline-block px-4 py-2 text-white rounded bg-primary"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default CustomNotfound;
