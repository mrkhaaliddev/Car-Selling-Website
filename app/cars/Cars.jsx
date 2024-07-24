"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Search } from "react-feather";
import { RxTimer } from "react-icons/rx";
import { FaGasPump, FaCogs } from "react-icons/fa";
import { BsBookmark, BsArrowUpRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import carData from "../CarsData.json";

const Cars = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(undefined);

  // State
  const [filteredCars, setFilteredCars] = useState(carData);
  const [selectedName, setSelectedName] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleNameChange = (value) => setSelectedName(value);
  const handleModelChange = (value) => setSelectedModel(value);
  const handlePriceChange = (value) => setSelectedPrice(value);

  const handleSearchClick = () => {
    const searchParams = {
      name: selectedName,
      model: selectedModel,
      price: selectedPrice,
    };

    const filteredCar = carData.filter((car) => {
      const matchesName =
        searchParams.name === "" || car.name === searchParams.name;
      const matchesModel =
        searchParams.model === "" || car.model === searchParams.model;
      const matchesPrice =
        searchParams.price === "" ||
        (searchParams.price === "under-20k" && car.price < 20000) ||
        (searchParams.price === "20k-50k" &&
          car.price >= 20000 &&
          car.price <= 50000) ||
        (searchParams.price === "50k-100k" &&
          car.price >= 50000 &&
          car.price <= 100000) ||
        (searchParams.price === "over-100k" && car.price > 100000);

      // console.log({
      //   carName: car.name,
      //   carModel: car.model,
      //   carPrice: car.price,
      //   matchesName,
      //   matchesModel,
      //   matchesPrice,
      // });

      return matchesName || matchesModel || matchesPrice;
    });

    setFilteredCars(filteredCar);
  };

  // unique car names
  const uniqueCarNames = Array.from(new Set(carData.map((car) => car.name)));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserInfo = localStorage.getItem("userInfo");
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <div className="px-10 mt-10 mb-16 lg:px-40 md:px-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cars">Cars</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="pt-5 pb-10 text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl ">
        Cars Available For Sale 🚀
      </h1>
      {/* Filtering Things */}
      <div className="flex mx-auto items-center justify-between mt-3 mb-16 border-white rounded-full bg-tertiary h-auto md:h-[60px] w-full max-w-[950px] p-2 shadow-lg gap-4 md:gap-0">
        <Select onValueChange={handleNameChange}>
          <SelectTrigger className="w-full ml-3 h-[50px] z-10 border-none bg-tertiary rounded-none outline-none focus:border-none focus:ring-0">
            <SelectValue placeholder="Any Brands" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Brands</SelectLabel>
              {uniqueCarNames.map((name, index) => (
                <SelectItem key={index} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={handleModelChange}>
          <SelectTrigger className="w-full h-[50px] z-10 bg-tertiary rounded-none border-none outline-none focus:border-none focus:ring-0">
            <SelectValue placeholder="Any Models" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Models</SelectLabel>
              {carData
                .filter((car) => car.name === selectedName)
                .map((car) => (
                  <SelectItem key={car.id} value={car.model}>
                    {car.model}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={handlePriceChange}>
          <SelectTrigger className="w-full h-[50px] bg-tertiary z-10 border-none rounded-none outline-none focus:border-none focus:ring-0">
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
      <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="px-1"
            onClick={() =>
              userInfo ? router.push(`/cars/${car.id}`) : router.push(`/login`)
            }
          >
            <Card className="overflow-hidden bg-white rounded-lg shadow-lg ">
              <CardHeader className="relative p-0">
                <Image
                  className="object-cover w-full h-48 cursor-pointer"
                  src={car.images[0]}
                  alt="Car"
                  width={500}
                  height={300}
                />
                {car.label && (
                  <div
                    className={`absolute px-3 py-2 text-xs font-semibold text-white rounded-full ${
                      car.label === "Best Value"
                        ? "bg-blue-400"
                        : car.label === "Special Offer"
                        ? "bg-yellow-400"
                        : "bg-green-400"
                    } top-2 left-2`}
                  >
                    {car.label}
                  </div>
                )}
                {/* <div className="absolute p-2 text-gray-500 bg-white rounded-full shadow top-2 right-2">
                  <BsBookmark className="w-4 h-4" />
                </div> */}
              </CardHeader>
              <CardContent className="p-6 text-white bg-[#050B20]">
                <CardTitle className="text-lg font-bold cursor-pointer">
                  <Button
                    variant="link"
                    className="p-0 text-lg font-bold text-white cursor-pointer"
                  >
                    {car.title}
                  </Button>
                </CardTitle>
                <CardDescription className="text-sm truncate">
                  {car.description}
                </CardDescription>
                <div className="flex items-center justify-between mt-4 text-sm gap-x-5">
                  <div className="flex flex-col items-center gap-2">
                    <RxTimer className="text-xl" />
                    {car.mileage}
                  </div>
                  <div className="flex flex-col items-center gap-2 ml-4">
                    <FaGasPump className="text-xl" />
                    {car.fuel}
                  </div>
                  <div className="flex flex-col items-center gap-2 ml-4">
                    <FaCogs className="text-xl" />
                    {car.transmission}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-6 text-white bg-[#050B20]">
                <span className="text-lg font-bold">{car.price}</span>
                <Button
                  variant="link"
                  className="flex items-center text-white gap-x-2"
                >
                  View Details <BsArrowUpRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
