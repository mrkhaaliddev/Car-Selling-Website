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
import { RxTimer } from "react-icons/rx";
import { FaGasPump, FaCogs } from "react-icons/fa";
import { BsBookmark, BsArrowUpRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useFavorites } from "../Context/FavoritesContext";

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

const CarCard = ({ carData }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(undefined);

  const {
    favoriteCars,
    setFavoriteCars,
    addFavoriteCars,
    removeFavoriteCars,
    isFavorite,
    countFavorite,
  } = useFavorites();

  const handleFavoriteToggle = (car) => {
    if (isFavorite(car.id)) {
      removeFavoriteCars(car?.id);
    } else {
      addFavoriteCars(car);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserInfo = localStorage.getItem("userInfo");
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <div className="px-10 mt-20 mb-20 lg:px-32 md:px-20">
      <h1 className="pb-20 text-4xl font-bold text-center text-black ">
        Your Filtered Cars 🔥
      </h1>
      <Slider {...settings}>
        {carData.map((car, index) => (
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
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteToggle(car);
                  }}
                  className={`absolute p-2 text-gray-500 ${
                    isFavorite(car.id) ? "bg-primary text-white" : "bg-white"
                  } rounded-full shadow cursor-pointer top-2 right-2`}
                >
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
      </Slider>
    </div>
  );
};

export default CarCard;
