import React, { Suspense, FC } from "react";

// Define the item type to ensure type safety
type Item = {
  image: string;
  alt: string;
  text: string;
};

// Skeleton Loader Component
const SliderSkeleton: FC = () => {
  return (
    <section className="h-[80vh] bg-white animate-pulse w-full flex items-center justify-center">
      <div className="relative h-[90%] w-[90%] animate-pulse bg-gray-200">
        <div className="space-y-4 w-full h-full">
          <div className="bg-gray-300 h-full w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SliderSkeleton;
