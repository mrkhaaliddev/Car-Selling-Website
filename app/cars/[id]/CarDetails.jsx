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
import { FuelIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const CarDetails = ({ data }) => {
  const CarData = data[0];
  console.log("🚀 ~ CarDetails ~ CarData:", CarData.location);
  return (
    <div className="px-10 lg:px-40 md:px-20">
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
      <div>
        <h1 className="text-3xl font-semibold mt-7">{CarData?.title}</h1>
        <p className="mt-3 mb-10 text-sm text-gray-600">
          {CarData?.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 mb-5">
          <span className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-200 text-primary">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">{CarData?.year}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-200 text-primary ">
            <Clock className="w-5 h-5" />
            <span className="text-sm">{CarData?.mileage}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-200 text-primary">
            <Command className="w-5 h-5" />
            <span className="text-sm">{CarData?.transmission}</span>
          </span>
          <span className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-200 text-primary">
            <FuelIcon className="w-5 h-5" />
            <span className="text-sm">{CarData?.fuel}</span>
          </span>
        </div>
        <div>
          <h1 className="mb-4 text-2xl font-semibold">{CarData?.price}</h1>
        </div>
      </div>
      <div className="flex justify-between w-full gap-10 mb-20">
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
              <h1 className="pt-1 text-lg font-semibold">admin</h1>
              <CardDescription>
                {/* <h1>{data.vin}</h1> */}
                <h1>943 Broadway, Brooklyn</h1>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="flex items-center gap-2 text-sm">
                <PhoneCall className="w-5 h-5 rounded-full text-primary" />{" "}
                <span>+252 611008043</span>
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`https://wa.me/${CarData?.phone}`} target="_blank">
                <Button
                  variant="outline"
                  className="w-full px-[60px] py-6 hover:bg-[#60C961] text-[#60C961] hover:text-white border-[#60C961]"
                >
                  Chat Via WhatsApp
                  <BsArrowUpRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
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
