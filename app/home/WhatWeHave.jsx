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

const WhatWeHave = () => {
  return (
    <div className="px-40 mb-10">
      <h1 className="text-[34px] leading-loose font-semibold text-center pb-4">
        Browse by Type
      </h1>
      <div className="grid grid-cols-8 gap-4">
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-28 gap-y-3">
          <CardTitle className="mx-auto">
            <TbCarSuv className="w-7 h-7" />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Suv</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-28 gap-y-3">
          <CardTitle className="mx-auto">
            <TbCarSuv className="w-7 h-7" />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Sedan</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-28 gap-y-3">
          <CardTitle className="mx-auto">
            <TbCarSuv className="w-7 h-7" />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Hatchback</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-28 gap-y-3">
          <CardTitle className="mx-auto">
            <TbCarSuv className="w-7 h-7" />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Coupe</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-28 gap-y-3">
          <CardTitle className="mx-auto">
            <TbCarSuv className="w-7 h-7" />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Hybrid</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-28 gap-y-3">
          <CardTitle className="mx-auto">
            <TbCarSuv className="w-7 h-7" />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Convertible</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-28 gap-y-3">
          <CardTitle className="mx-auto">
            <TbCarSuv className="w-7 h-7" />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Van</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center w-full pt-6 text-center cursor-pointer h-28 gap-y-3">
          <CardTitle className="mx-auto">
            <TbCarSuv className="w-7 h-7" />
          </CardTitle>
          <CardContent>
            <p className="text-sm">Electric</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhatWeHave;
