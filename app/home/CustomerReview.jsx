import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Man from "../../public/Man.jpg";
import Man2 from "../../public/Man2.jpg";
import Man3 from "../../public/Man3.jpg";

const reviews = [
  {
    name: "John Doe",
    role: "Designer",
    rating: 4.0,
    review:
      "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
    image: Man,
  },
  {
    name: "Jane Doe",
    role: "Artist",
    rating: 4.0,
    review:
      "I'd recommend this dealership to anyone looking for a smooth and hassle-free car buying experience.",
    image: Man2,
  },
  {
    name: "Mr Khaalid",
    role: "Developer",
    rating: 3.5,
    review:
      "Great service and friendly staff, but the waiting time was a bit long.",
    image: Man3,
  },
];

const CustomerReview = () => {
  return (
    <div className="py-32 lg:px-40 md:px-20 px-10 flex justify-center items-center bg-[#F9FBFC]">
      <div className="w-full">
        <div className="flex flex-col mb-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-start">
          <h2 className="mb-8 text-[34px] font-semibold text-gray-900">
            What our customers say
          </h2>
          <p className="text-sm text-gray-600">
            Rated 4.7 / 5 based on 2,370 reviews
          </p>
        </div>
        <div className="relative flex items-center w-full">
          <Carousel className="w-full mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <Card className="flex flex-col items-center justify-center p-5 mx-auto bg-transparent border-none select-none md:flex-row">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-80 h-80">
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={300}
                          height={300}
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow pl-0 text-center md:pl-8 md:text-left">
                      <div className="flex items-center justify-center mb-4 md:justify-start">
                        <div className="flex items-center text-yellow-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < review.rating
                                  ? "text-yellow-500"
                                  : "text-gray-400"
                              }
                            >
                              &#9733;
                            </span>
                          ))}
                        </div>
                        <span className="ml-2 text-yellow-500">
                          {review.rating}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {review.name}
                      </CardTitle>
                      <CardDescription className="mb-4 text-sm text-gray-600">
                        {review.role}
                      </CardDescription>
                      <p className="text-lg text-gray-800">{review.review}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
