import React from "react";
import Image from "next/image";
import SideCar from "../../public/AboutUs/SideCar.jpg";
import StandMan from "../../public/AboutUs/StandMan.jpg";
import HandShake from "../../public/AboutUs/Handshake.png";
import GivingKeys from "../../public/AboutUs/GivingKeys.jpg";

const GridImages = () => {
  return (
    <div className="px-4 py-10 lg:px-40 md:px-20">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* First Column */}
        <div className="flex flex-col items-center justify-center col-span-3 gap-4">
          <div className="w-full px-4 pt-10 pb-24 text-white rounded-lg bg-primary">
            <div className="text-center">
              <p className="text-4xl font-bold">45</p>
              <p className="text-xl">Years in Business</p>
            </div>
          </div>
          <div className="w-full">
            <div className="relative aspect-w-4 aspect-h-3 lg:aspect-w-4 lg:aspect-h-3 h-60">
              <Image
                src={HandShake}
                alt="Business Image 1"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="col-span-1 lg:col-span-6 lg:row-span-4">
          <div className="relative aspect-w-16 aspect-h-9 lg:aspect-w-16 lg:aspect-h-9 h-[460px]">
            <Image
              src={StandMan}
              alt="Business Image 2"
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Images */}
        <div className="flex flex-col items-center justify-center col-span-3 gap-4">
          <div className="w-full">
            <div className="relative aspect-w-4 aspect-h-3 lg:aspect-w-4 lg:aspect-h-3 h-52">
              <Image
                src={GivingKeys}
                alt="Business Image 1"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative aspect-w-4 aspect-h-3 lg:aspect-w-4 lg:aspect-h-3 h-60">
              <Image
                src={SideCar}
                alt="Business Image 1"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridImages;
