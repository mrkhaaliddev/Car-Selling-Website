"use client";
import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const Count = () => {
  const carsRef = useRef(null);
  const reviewsRef = useRef(null);
  const visitorsRef = useRef(null);
  const dealersRef = useRef(null);

  useEffect(() => {
    const formattingFn = (value) => `${value}M`;

    const carsCountUp = new CountUp(carsRef.current, 836, {
      enableScrollSpy: true,
      formattingFn,
    });
    const reviewsCountUp = new CountUp(reviewsRef.current, 738, {
      enableScrollSpy: true,

      formattingFn,
    });
    const visitorsCountUp = new CountUp(visitorsRef.current, 100, {
      enableScrollSpy: true,

      formattingFn,
    });
    const dealersCountUp = new CountUp(dealersRef.current, 238, {
      enableScrollSpy: true,

      formattingFn,
    });
  }, []);

  return (
    <div className="grid items-center justify-around grid-cols-2 px-20 py-20 bg-white gap-y-10 md:gap-y-10 lg:gap-2 md:gap-4 lg:grid-cols-4 md:px-40 lg:px-60 ">
      <div className="text-center">
        <div ref={carsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">CARS FOR SALE</div>
      </div>
      <div className="text-center">
        <div ref={reviewsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">DEALER REVIEWS</div>
      </div>
      <div className="text-center">
        <div ref={visitorsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">VISITORS PER DAY</div>
      </div>
      <div className="text-center">
        <div ref={dealersRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">VERIFIED DEALERS</div>
      </div>
    </div>
  );
};

export default Count;
