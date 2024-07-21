import Image from "next/image";
import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid w-full grid-cols-5 gap-4">
      <div className="col-span-3 row-span-2">
        <div className="relative w-full h-[530px]">
          <Image
            src={images[0]}
            alt="Car Image"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
      <div className="grid col-span-2 gap-4">
        <div className="relative w-full h-64">
          <Image
            src={images[1]}
            alt="Car Image"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="relative w-full h-64">
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
