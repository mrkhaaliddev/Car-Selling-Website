"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomePage from "./home/page";
import SkeletonLoading from "./Components/SkeletonLoading";

export const dynamic = "force-dynamic";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <div>
          <HomePage />
        </div>
      )}
    </>
  );
}
