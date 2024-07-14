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
import {
  BsArrowLeft,
  BsArrowRight,
  BsArrowUpRight,
  BsBookmark,
} from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carData = [
  {
    image:
      "https://img.freepik.com/free-photo/3d-electric-car-with-charged-battery-symbol_23-2148972408.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
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
      "https://img.freepik.com/free-vector/red-suv-with-roof-storage-box_53876-64400.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    title: "Tesla Model 3 – 2022",
    description: "Electric with autopilot and long-range...",
    mileage: "1500 Miles",
    fuel: "Electric",
    transmission: "Automatic",
    price: "$35,000",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-car-with-simple-background_23-2150998618.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    title: "Ford Transit – 2021",
    description: "4.0 D5 PowerPulse Momentum 5dr AWD...",
    mileage: "2500 Miles",
    fuel: "Diesel",
    transmission: "Manual",
    price: "$22,000",
  },
  {
    image:
      "https://img.freepik.com/free-vector/white-convertible-car-black-background-vector_53876-67370.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    title: "Tesla Model 3 – 2022",
    description: "Electric with autopilot and long-range...",
    mileage: "1500 Miles",
    fuel: "Electric",
    transmission: "Automatic",
    price: "$35,000",
  },
  {
    image:
      "https://img.freepik.com/free-vector/red-convertible-car-isolated-white-vector_53876-64382.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
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
      "https://img.freepik.com/free-photo/3d-electric-car-with-charged-battery_23-2148972415.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    title: "Toyota Camry – 2023",
    description: "2.5L 4-cylinder, 203 horsepower...",
    mileage: "10 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$25,000",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-four-wheeled-vehicle-mobility-fast-travel_23-2151016444.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    title: "Honda Accord – 2023",
    description: "1.5L 4-cylinder, 192 horsepower...",
    mileage: "15 Miles",
    fuel: "Petrol",
    transmission: "CVT",
    price: "$27,000",
  },
  {
    image:
      "https://img.freepik.com/free-vector/black-sedan-car-isolated-white-vector_53876-64403.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    label: "Best Value",
    title: "Ford Mustang – 2023",
    description: "5.0L V8, 450 horsepower...",
    mileage: "5 Miles",
    fuel: "Petrol",
    transmission: "Manual",
    price: "$45,000",
  },
  {
    image:
      "https://img.freepik.com/free-vector/green-sports-car-isolated-white-vector_53876-64420.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    title: "Chevrolet Silverado – 2023",
    description: "4.3L V6, 285 horsepower...",
    mileage: "20 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$35,000",
  },
  {
    image:
      "https://img.freepik.com/free-vector/blue-hatchback-car-isolated-white-vector_53876-64419.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    label: "Special Offer",
    title: "BMW 3 Series – 2023",
    description: "2.0L 4-cylinder, 255 horsepower...",
    mileage: "10 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$41,000",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-car-model_23-2151138966.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    label: "Best Value",
    title: "Audi A4 – 2023",
    description: "2.0L 4-cylinder, 261 horsepower...",
    mileage: "12 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$42,000",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-three-dimensional-car-model_23-2151138987.jpg?ga=GA1.1.1274618934.1720494491&semt=ais_user",
    label: "Great Price",
    title: "Mercedes-Benz C Class – 2023",
    description: "2.0L 4-cylinder, 255 horsepower...",
    mileage: "8 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$50,000",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CarCard = () => {
  return (
    <div className="px-10 mt-20 mb-20 lg:px-40 md:px-20">
      <Slider {...settings} className="">
        {carData.map((car, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <CardHeader className="relative p-0">
              <img
                className="object-cover w-full h-48 cursor-pointer"
                src={car.image}
                alt="Car"
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
              <div className="absolute p-2 text-gray-500 bg-white rounded-full shadow top-2 right-2">
                <BsBookmark className="w-4 h-4" />
              </div>
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
              <CardDescription className="text-sm">
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
        ))}
      </Slider>
    </div>
  );
};

export default CarCard;
