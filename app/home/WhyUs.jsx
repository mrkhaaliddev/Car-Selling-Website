import React from "react";
import price from "../../public/price.png";

const WhyUs = () => {
  const features = [
    {
      icon: "🎁",
      title: "Special Financing Offers",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: "💎",
      title: "Trusted Car Dealership",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: "💸",
      title: "Transparent Pricing",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: "🚗",
      title: "Expert Car Service",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
  ];

  return (
    <div className="py-16 bg-[#F9FBFC] mb-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-[34px] font-semibold text-center text-gray-900">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg text-start">
              <div className="mb-4 text-5xl text-blue-500">{feature.icon}</div>
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
