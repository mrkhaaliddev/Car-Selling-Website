import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="p-20 mb-4 text-center bg-gray-200">
        <div className="w-1/2 h-10 mx-auto mb-4 bg-gray-300"></div>
        <div className="w-1/3 h-10 mx-auto mb-8 bg-gray-300"></div>
        <div className="flex justify-center mb-16 space-x-4">
          <div className="w-32 h-10 bg-gray-300"></div>
          <div className="w-32 h-10 bg-gray-300"></div>
          <div className="w-32 h-10 bg-gray-300"></div>
        </div>
        <div className="w-full bg-gray-300 h-60"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
