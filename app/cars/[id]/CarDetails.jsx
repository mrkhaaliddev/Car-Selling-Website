import React from "react";
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
import { Calendar, Clock, Command, PhoneCall } from "react-feather";
import { FuelIcon, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import ImageGallery from "./ImageGallery";
import GoogleMap from "../../contactUs/GoogleMap";

const CarDetails = ({ data }) => {
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
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-6 mb-5">
          <span className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-200 text-primary">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">{CarData?.year}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-200 text-primary ">
            <Clock className="w-5 h-5" />
            <span className="text-sm">{CarData?.mileage}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-200 text-primary">
            <Command className="w-5 h-5" />
            <span className="text-sm">{CarData?.transmission}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-200 text-primary">
            <FuelIcon className="w-5 h-5" />
            <span className="text-sm">{CarData?.fuel}</span>
          </span>
        </div>
        <div>
          <h1 className="mb-4 text-2xl font-semibold">{CarData?.price}</h1>
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={CarData?.images} />

      {/* Description */}
      <div className="flex justify-between w-full gap-10 my-20">
        <div className="w-[60%]">
          <h1 className="pb-5 text-xl font-semibold">Description</h1>
          <p className="text-sm leading-loose">{CarData?.mainDescription}</p>
        </div>
        <div className="w-[40%]">
          <Card className="ml-[140px] w-[70%]">
            <CardHeader>
              <CardTitle>
                <Image src={Profile} alt="" width={50} height={50} />
              </CardTitle>
              <h1 className="pt-1 text-lg font-semibold">
                {CarData.sellerName}
              </h1>
              <CardDescription>
                <p className="text-sm">{CarData?.location}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="flex items-center gap-2 text-sm">
                <small className="flex items-center justify-center gap-2 px-2 py-2 rounded-full bg-slate-200 text-primary">
                  <PhoneCall className="w-5 h-5 rounded-full text-primary" />{" "}
                </small>
                <span>{CarData.sellerWhatsApp}</span>
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col gap-y-4">
                <Link
                  href={`https://wa.me/${CarData.sellerWhatsApp}`}
                  target="_blank"
                >
                  <Button className="w-full px-[60px] py-6 hover:bg-[#4E6CFB] bg-[#405FF2] text-white border-[#60C961]">
                    Message Dealer
                    <BsArrowUpRight className="w-5 h-5 ml-3" />
                  </Button>
                </Link>
                <Link
                  href={`https://wa.me/${CarData.sellerWhatsApp}`}
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="w-full px-[60px] py-6 hover:bg-[#60C961] text-[#60C961] hover:text-white border-[#60C961]"
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

      {/* Location */}
      <div className="w-[70%]">
        <h1 className="pb-5 text-2xl font-semibold">Location</h1>
        <p className="pb-1 text-sm">{CarData?.location}</p>
        <GoogleMap />
      </div>
    </div>
  );
};

CarDetails.prototype = {
  data: Object,
};

CarDetails.defaultProps = {
  data: {},
};

export default CarDetails;
