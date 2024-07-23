"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Profile from "../../../public/user.png";
import {
  Award,
  Calendar,
  Clock,
  Command,
  PhoneCall,
  Target,
} from "react-feather";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGasPump, FaCogs, FaMoneyBillAlt } from "react-icons/fa";
import { FuelIcon, PaintBucket, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight, BsCheckCircle } from "react-icons/bs";
import Link from "next/link";
import ImageGallery from "./ImageGallery";
import GoogleMap from "../../contactUs/GoogleMap";

const CarDetails = ({ data = [{}] }) => {
  // state
  const [purchased, setPurchased] = useState(false);

  const CarData = data[0];

  return (
    <div className="px-10 lg:px-40 md:px-20">
      {/* Breadcrumb */}
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Cars</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{CarData?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Title and Description */}
      <div>
        <h1 className="text-3xl font-semibold mt-7">{CarData?.title}</h1>
        <p className="mt-3 mb-10 text-sm text-gray-600">
          {CarData?.description}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between mb-5 lg:flex-row">
        <div className="flex flex-wrap items-center gap-4 mb-5 lg:mb-0">
          <span className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-200 text-primary">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">{CarData?.year}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-200 text-primary">
            <Clock className="w-5 h-5" />
            <span className="text-sm">{CarData?.mileage}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-200 text-primary">
            <FaCogs className="w-5 h-5" />
            <span className="text-sm">{CarData?.transmission}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-200 text-primary">
            <FuelIcon className="w-5 h-5" />
            <span className="text-sm">{CarData?.fuel}</span>
          </span>
        </div>
        <div>
          <h1 className="text-xl font-semibold lg:text-2xl">
            {CarData?.price}
          </h1>
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={CarData?.images} />

      {/* Car Details */}
      <div className="flex flex-col justify-between w-full gap-10 mt-20 mb-10 lg:flex-row">
        <div className="w-full lg:w-[60%]">
          <h1 className="pb-8 text-2xl font-bold md:text-3xl">Car Details</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <span className="flex items-center text-sm font-semibold gap-x-2">
                <Target className="w-5 h-5 text-primary" />
                Brand
              </span>
            </div>
            <span className="text-sm">{CarData?.name}</span>

            <div className="flex items-center">
              <span className="flex items-center text-sm font-semibold gap-x-2">
                <Clock className="w-5 h-5 text-primary" />
                Mileage
              </span>
            </div>
            <span className="text-sm">{CarData?.mileage}</span>

            <div className="flex items-center">
              <span className="flex items-center text-sm font-semibold gap-x-2">
                <FuelIcon className="w-5 h-5 text-primary" />
                Fuel Type
              </span>
            </div>
            <span className="text-sm">{CarData?.fuel}</span>

            <div className="flex items-center">
              <span className="flex items-center text-sm font-semibold gap-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                Year
              </span>
            </div>
            <span className="text-sm">{CarData?.year}</span>

            <div className="flex items-center">
              <span className="flex items-center text-sm font-semibold gap-x-2">
                <PaintBucket className="w-5 h-5 text-primary" />
                Color
              </span>
            </div>
            <span className="text-sm">{CarData?.color}</span>

            <div className="flex items-center">
              <span className="flex items-center text-sm font-semibold gap-x-2">
                <FaCogs className="w-5 h-5 text-primary" />
                Transmission
              </span>
            </div>
            <span className="text-sm">{CarData?.transmission}</span>

            <div className="flex items-center">
              <span className="flex items-center text-sm font-semibold gap-x-2">
                <FaMoneyBillAlt className="w-5 h-5 text-primary" />
                Price
              </span>
            </div>
            <span className="text-sm">{CarData?.price}</span>
          </div>
        </div>
        <div className="w-full pt-10 lg:w-[40%] flex justify-center lg:justify-end">
          <Card className="w-full lg:w-[70%]">
            <CardHeader>
              <CardTitle>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>{" "}
              </CardTitle>
              <h1 className="pt-1 text-lg font-semibold">
                {CarData.sellerName}
              </h1>
              <CardDescription>
                <small className="text-sm">{CarData?.location}</small>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="flex items-center gap-2 text-sm">
                <small className="flex items-center justify-center gap-2 px-2 py-2 rounded-full bg-slate-200 text-primary">
                  <PhoneCall className="w-5 h-5 rounded-full text-primary" />
                </small>
                <span>{CarData.sellerWhatsApp}</span>
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col gap-y-4">
                <Button
                  onClick={() => setPurchased(true)}
                  className={`w-full px-4 py-3 lg:px-[60px] lg:py-6 ${
                    purchased ? "bg-[#60C961]" : "bg-[#405FF2]"
                  } text-white border-[#60C961]`}
                >
                  {purchased ? (
                    <>
                      <BsCheckCircle className="w-5 h-5 mr-3" />
                      Purchased
                    </>
                  ) : (
                    <>
                      <BsArrowUpRight className="w-5 h-5 mr-3" />
                      Purchase Here
                    </>
                  )}
                </Button>
                <Link
                  href={`https://wa.me/${CarData.sellerWhatsApp}`}
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="w-full px-4 py-3 lg:px-[60px] lg:py-6 hover:bg-[#60C961] text-[#60C961] hover:text-white border-[#60C961]"
                  >
                    Chat Via WhatsApp
                    <BsArrowUpRight className="w-5 h-5 ml-3" />
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* description */}
      <div className="w-full lg:w-[60%] mb-20">
        <h1 className="pb-5 text-2xl font-semibold">Description</h1>
        <p className="text-sm leading-loose">{CarData?.mainDescription}</p>
      </div>

      {/* Location */}
      <div className="w-full lg:w-[70%]">
        <h1 className="pb-5 text-2xl font-semibold">Location</h1>
        <p className="pb-1 text-sm">{CarData?.location}</p>
        <GoogleMap />
      </div>
    </div>
  );
};

export default CarDetails;
