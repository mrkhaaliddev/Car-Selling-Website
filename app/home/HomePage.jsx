"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "react-feather";
import Image from "next/image";
import HomeCar from "../././../public/HomePageCar.png";
import WhatWeHave from "./WhatWeHave";
import WhyUs from "./WhyUs";
import CarCard from "../Components/CarCard";
import Count from "./Count";
import CustomerReview from "./CustomerReview";
import OurTeam from "./OurTeam";
import carData from "../CarsData.json";

const HomePage = () => {
  // State
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleMakeChange = (value) => setSelectedMake(value);
  const handleModelChange = (value) => setSelectedModel(value);
  const handlePriceChange = (value) => setSelectedPrice(value);

  const handleSearchClick = () => {
    const searchParams = {
      make: selectedMake,
      model: selectedModel,
      price: selectedPrice,
    };

    const filteredCars = carData.filter((car) => {
      return (
        (searchParams.make === "" || car.make === searchParams.make) &&
        (searchParams.model === "" || car.model === searchParams.model) &&
        (searchParams.price === "" || car.price === searchParams.price)
      );
    });

    console.log(filteredCars);
    console.log("🚀 ~ handleSearchClick ~ carData:", carData);
  };

  return (
    <>
      <div className="w-full px-3 h-[400px] md:h-[650px] bg-tertiary pt-32 mb-40">
        <div className="flex flex-col items-center h-full gap-6">
          <p className="font-normal text-center text-md">
            Find cars for sale and for rent near you
          </p>
          <h1 className="text-2xl font-bold text-center md:text-4xl lg:text-5xl">
            Find Your Dream Car
          </h1>

          {/* Filtering Things */}
          <div className="flex items-center justify-between mt-3 border-white rounded-full bg-white h-auto md:h-[60px] w-full max-w-[950px] p-2 shadow-lg gap-4 md:gap-0">
            <Select onValueChange={handleMakeChange}>
              <SelectTrigger className="w-full ml-3 h-[50px] z-10 border-none rounded-none outline-none focus:border-none focus:ring-0">
                <SelectValue placeholder="Any Makes" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Brands</SelectLabel>
                  {/* <SelectItem value="any">Any Brand</SelectItem> */}
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={handleModelChange}>
              <SelectTrigger className="w-full h-[50px] z-10 rounded-none border-none outline-none focus:border-none focus:ring-0">
                <SelectValue placeholder="Any Models" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Models</SelectLabel>
                  <SelectItem value="any">Any Models</SelectItem>
                  <SelectItem value="model-s">Model S</SelectItem>
                  <SelectItem value="model-3">Model 3</SelectItem>
                  <SelectItem value="model-x">Model X</SelectItem>
                  <SelectItem value="model-y">Model Y</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={handlePriceChange}>
              <SelectTrigger className="w-full h-[50px] z-10 border-none rounded-none outline-none focus:border-none focus:ring-0">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Prices</SelectLabel>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-20k">Under $20k</SelectItem>
                  <SelectItem value="20k-50k">$20k - $50k</SelectItem>
                  <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                  <SelectItem value="over-100k">Over $100k</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div
              onClick={handleSearchClick}
              className="z-10 flex items-center justify-center p-3 rounded-full cursor-pointer bg-primary "
            >
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="relative hidden md:block md:w-[700px] lg:w-[900px] md:mt-20 lg:mt-16">
            <Image
              src={HomeCar}
              alt="car"
              layout="responsive"
              width={800}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <WhatWeHave />
      <CarCard carData={carData} />
      <WhyUs />
      <hr />
      <Count />
      <hr />
      <OurTeam />
      <CustomerReview />
    </>
  );
};

export default HomePage;
