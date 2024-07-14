import React from "react";
import Image from "next/image";
import price from "../../public/price.png";
import diamond from "../../public/money.png";
import money from "../../public/money-bag.png";
import car from "../../public/car.png";

const WhyUs = () => {
  const features = [
    {
      icon: price,
      title: "Special Financing Offers",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: diamond,
      title: "Trusted Car Dealership",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: money,
      title: "Transparent Pricing",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: car,
      title: "Expert Car Service",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
  ];

  return (
    <div className="py-16 bg-[#F9FBFC] mb-10 mt-10">
      <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-40">
        <h2 className="mb-8 text-[34px] font-semibold text-center text-gray-900">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg text-start">
              <div className="mb-4 text-5xl text-blue-500">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={70}
                  height={70}
                />
              </div>
              <h3 className="mb-2 font-medium leading-loose text-gray-900 text-[18px]">
                {feature.title}
              </h3>
              <p className="text-sm font-normal leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
