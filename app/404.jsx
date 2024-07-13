import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <a className="inline-block px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
