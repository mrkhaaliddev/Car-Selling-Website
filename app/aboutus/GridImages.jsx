import React from "react";
import Image from "next/image";
import Man from "../../public/Man.jpg";
import Handshake from "../../public/AboutUs/Handshake.png";
import Car1 from "../../public/AboutUs/Handshake.png";
import Car2 from "../../public/AboutUs/Handshake.png";
import Car3 from "../../public/AboutUs/Handshake.png";

const GridImages = () => {
  return (
    <div className="px-4 py-10 lg:px-40 md:px-20">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* First Column */}
        <div className="flex flex-col items-center justify-center col-span-2 gap-4">
          <div className="w-full px-4 pt-20 pb-10 text-white rounded-lg bg-primary">
            <div className="text-center">
              <p className="text-4xl font-bold">45</p>
              <p className="text-xl">Years in Business</p>
            </div>
          </div>
          <div className="w-full">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src={Handshake}
                alt="Business Image 1"
                layout="responsive"
                width={500}
                height={150}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="col-span-3">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={Man}
              alt="Business Image 2"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 col-span-6 gap-4">
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src={Car1}
              alt="Car Image 1"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src={Car2}
              alt="Car Image 2"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src={Car3}
              alt="Car Image 3"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src={Handshake}
              alt="Car Image 4"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridImages;
