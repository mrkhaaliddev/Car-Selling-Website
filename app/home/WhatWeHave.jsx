import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbCarSuv } from "react-icons/tb";
import BMW from "../../public/OurCars/BMW.png";
import Ford from "../../public/OurCars/Ford.png";
import Mercedesbenz from "../../public/OurCars/Mercedesbenz.png";
import Tesla from "../../public/OurCars/Tesla.png";
import Volkswagen from "../../public/OurCars/Volkswagen.png";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const WhatWeHave = () => {
  return (
    <div className="px-10 mb-10 lg:mb-24 lg:px-40 md:px-20">
      <div className="flex items-center justify-between">
        <h1 className="text-[34px] leading-loose font-semibold text-center pb-4">
          Explore Our Premium Brands
        </h1>
        <p className="flex gap-1 text-sm text-center cursor-pointer">
          <span>Show All Brands</span>
          <BsArrowUpRight className="w-5 h-5 text-slate-500" />
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-6 md:grid-cols-6">
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-36 hover:border-primary gap-y-3">
          <CardTitle className="mx-auto">
            <Image
              src={Volkswagen}
              alt="Volkswagen"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Audi</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-36 hover:border-primary gap-y-3">
          <CardTitle className="mx-auto">
            <Image
              src={BMW}
              alt="Volkswagen"
              width={80}
              height={80}
              className="w-20 h-20"
            />{" "}
          </CardTitle>
          <CardContent>
            <p className="text-sm">Bmw</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-36 hover:border-primary gap-y-3">
          <CardTitle className="mx-auto">
            <Image
              src={Ford}
              alt="Volkswagen"
              width={80}
              height={80}
              className="w-20 h-20"
            />{" "}
          </CardTitle>
          <CardContent>
            <p className="text-sm">Ford</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-36 hover:border-primary gap-y-3">
          <CardTitle className="mx-auto">
            <Image
              src={Mercedesbenz}
              alt="Volkswagen"
              width={80}
              height={80}
              className="w-20 h-20"
            />{" "}
          </CardTitle>
          <CardContent>
            <p className="text-sm">Mercedes Benz</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-36 hover:border-primary gap-y-3">
          <CardTitle className="mx-auto">
            <Image
              src={Tesla}
              alt="Volkswagen"
              width={80}
              height={80}
              className="w-20 h-20"
            />{" "}
          </CardTitle>
          <CardContent>
            <p className="text-sm">Tesla</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-36 hover:border-primary gap-y-3">
          <CardTitle className="mx-auto">
            <Image
              src={Volkswagen}
              alt="Volkswagen"
              width={80}
              height={80}
              className="w-20 h-20"
            />{" "}
          </CardTitle>
          <CardContent>
            <p className="text-sm">Volks wagon</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhatWeHave;
