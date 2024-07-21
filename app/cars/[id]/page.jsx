" use client";
import React from "react";
import carData from "../../CarsData.json";
import CarDetails from "./CarDetails";

export const dynamic = "force-dynamic";

const page = ({ params }) => {
  const data = carData.filter((car) => car.id == params.id);
  return (
    <div className="overflow-x-hidden pt-7">
      <CarDetails data={data} />
    </div>
  );
};

export default page;
