import Image from "next/image";
import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid w-full gap-4 lg:grid-cols-5">
      <div className="col-span-1 lg:col-span-3 lg:row-span-2">
        <div className="relative w-full h-64 lg:h-[530px]">
          <Image
            src={images[0]}
            alt="Car Image"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
      <div className="grid col-span-1 gap-4 lg:col-span-2">
        <div className="relative w-full h-64 lg:h-64">
          <Image
            src={images[1]}
            alt="Car Image"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="relative w-full h-64 lg:h-64">
          <Image
            src={images[2]}
            alt="Car Image"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
