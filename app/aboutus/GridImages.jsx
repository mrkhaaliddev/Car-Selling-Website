import React from "react";
import Image from "next/image";
import Man from "../../public/Man.jpg";
import Man2 from "../../public/Man2.jpg";
import Man3 from "../../public/Man3.jpg";
import BMW from "../../public/OurCars/BMW.png";
import Ford from "../../public/OurCars/Ford.png";
import Mercedesbenz from "../../public/OurCars/Mercedesbenz.png";
import Tesla from "../../public/OurCars/Tesla.png";
import Volkswagen from "../../public/OurCars/Volkswagen.png";

const GridImages = () => {
  return (
    <div className="px-4 py-10 lg:px-40 md:px-20">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="flex items-center justify-center col-span-1 text-white rounded-lg bg-primary">
          <div className="text-center">
            <p className="text-4xl font-bold">45</p>
            <p className="text-xl">Years in Business</p>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src={Man3}
            alt="Business Image 1"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 col-span-2 gap-4">
          <Image
            src={BMW}
            alt="Business Image 2"
            layout="responsive"
            width={250}
            height={150}
            className="rounded-lg"
          />
          {/* <Image
            src={Mercedesbenz}
            alt="Business Image 3"
            layout="responsive"
            width={250}
            height={150}
            className="rounded-lg"
          /> */}
          {/* <Image
            src={Ford}
            alt="Business Image 4"
            layout="responsive"
            width={250}
            height={150}
            className="rounded-lg"
          />
          <div className="grid-cols-4">
            <Image
              src={Volkswagen}
              alt="Business Image 5"
              layout="responsive"
              width={250}
              height={150}
              className="rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GridImages;
