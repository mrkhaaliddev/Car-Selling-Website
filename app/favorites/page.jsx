"use client";
import React, { useEffect, useState } from "react";
import { useFavorites } from "../Context/FavoritesContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Search, Slash } from "react-feather";
import { RxTimer } from "react-icons/rx";
import { FaGasPump, FaCogs } from "react-icons/fa";
import { BsBookmark, BsArrowUpRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FavoritePage = () => {
  //state
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

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
    <div className="w-full px-4 py-10 lg:px-40 md:px-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/favorites">Favorite Cars</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-6 mb-16 text-2xl font-bold text-center md:text-3xl">
        Your Favorites Cars ❤️
      </h1>
      {favoriteCars && favoriteCars.length !== 0 ? (
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {favoriteCars.map((car, index) => (
            <div
              key={index}
              className="px-1"
              onClick={() =>
                userInfo
                  ? router.push(`/cars/${car.id}`)
                  : router.push(`/login`)
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
                    className="absolute p-2 text-white rounded-full shadow cursor-pointer bg-primary top-2 right-2"
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
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="flex items-center gap-2 text-center">
            <Slash className="w-12 h-12" /> No favorite cars found{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
