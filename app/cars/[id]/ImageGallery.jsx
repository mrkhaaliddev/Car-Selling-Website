import Image from "next/image";
import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid w-full grid-cols-5 gap-4">
      <div className="col-span-3">
        <Image
          src={images[0]}
          alt="Car Image"
          width={1000}
          height={667}
          layout="responsive"
          className="object-cover rounded"
        />
      </div>
      <div className="grid col-span-2 grid-rows-3 gap-4">
        <div className="row-span-1">
          <Image
            src={images[1]}
            alt="Car Image"
            width={100}
            height={100}
            layout="responsive"
            className="object-cover rounded"
          />
        </div>
        <div className="row-span-1">
          <Image
            src={images[2]}
            alt="Car Image"
            width={100}
            height={100}
            layout="responsive"
            className="object-cover rounded"
          />
        </div>
        <div className="row-span-1">
          <Image
            src={images[3]}
            alt="Car Image"
            width={100}
            height={100}
            layout="responsive"
            className="object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
