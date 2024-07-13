import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RxTimer } from "react-icons/rx";
import { FaGasPump, FaCogs } from "react-icons/fa";
import { BsArrowUpRight, BsBookmark } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const carData = [
  {
    image:
      "https://img.freepik.com/free-photo/3d-electric-car-with-charged-battery-symbol_23-2148972408.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    label: "Great Price",
    title: "Ford Transit – 2021",
    description: "4.0 D5 PowerPulse Momentum 5dr AWD...",
    mileage: "2500 Miles",
    fuel: "Diesel",
    transmission: "Manual",
    price: "$22,000",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-car-model_23-2151138939.jpg?ga=GA1.1.1274618934.1720494491&semt=sph",
    label: "Special Offer",
    title: "Tesla Model 3 – 2022",
    description: "Electric with autopilot and long-range...",
    mileage: "1500 Miles",
    fuel: "Electric",
    transmission: "Automatic",
    price: "$35,000",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-car-with-simple-background_23-2150998541.jpg?ga=GA1.1.1274618934.1720494491&semt=sph",
    label: "Best Value",
    title: "BMW X5 – 2020",
    description: "Luxury SUV with advanced features...",
    mileage: "3000 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$45,000",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-car-model_23-2151138939.jpg?ga=GA1.1.1274618934.1720494491&semt=sph",
    label: "Special Offer",
    title: "Tesla Model 3 – 2022",
    description: "Electric with autopilot and long-range...",
    mileage: "1500 Miles",
    fuel: "Electric",
    transmission: "Automatic",
    price: "$35,000",
  },
];

const CarCard = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 px-10 mt-20 mb-20 sm:grid-cols-2 lg:grid-cols-4">
      {carData.map((car, index) => (
        <Card
          key={index}
          className="overflow-hidden bg-white rounded-lg shadow-lg"
        >
          <CardHeader className="relative p-0">
            <img
              className="object-cover w-full h-48 cursor-pointer"
              src={car?.image}
              alt="Car"
            />
            <div
              className={`absolute px-3 py-2 text-xs font-semibold text-white rounded-full ${
                car?.label === "Best Value" && "bg-blue-400"
              } ${
                car?.label === "Great Price" && "bg-red-400"
              } bg-secondary top-2 left-25 ml-2`}
            >
              {car?.label}
            </div>
            <div className="absolute p-2 text-gray-500 bg-white rounded-full shadow top-2 right-2">
              <BsBookmark className="w-4 h-4" />
            </div>
          </CardHeader>
          <CardContent className="p-6 text-white bg-black">
            <CardTitle className="text-lg font-bold cursor-pointer">
              <Button
                variant="link"
                className="p-0 text-lg font-bold text-white cursor-pointer"
              >
                {car?.title}
              </Button>
            </CardTitle>
            <CardDescription className="text-sm">
              {car?.description}
            </CardDescription>
            <div className="flex items-center justify-between mt-4 text-sm gap-x-5">
              <div className="flex flex-col items-center gap-2">
                <RxTimer className="text-xl" />
                {car?.mileage}
              </div>
              <div className="flex flex-col items-center gap-2 ml-4">
                <FaGasPump className="text-xl" />
                {car?.fuel}
              </div>
              <div className="flex flex-col items-center gap-2 ml-4">
                <FaCogs className="text-xl" />
                {car?.transmission}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-6 text-white bg-black">
            <span className="text-lg font-bold">{car?.price}</span>
            <Button
              variant="link"
              className="flex items-center text-white gap-x-2"
            >
              View Details <BsArrowUpRight />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CarCard;
