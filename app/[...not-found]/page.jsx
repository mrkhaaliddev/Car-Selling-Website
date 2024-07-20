import Link from "next/link";
import React from "react";
import notfound from "../../public/404.png";
import Image from "next/image";

const CustomNotfound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="text-center">
        <Image src={notfound} alt="404" width={600} height={300} />
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
