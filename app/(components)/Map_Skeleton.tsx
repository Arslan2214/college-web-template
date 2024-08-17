// components/Skeleton.tsx
import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="border border-gray-300 shadow-lg rounded-lg overflow-hidden w-full h-96 md:h-[450px] animate-pulse bg-gray-200">
        {/* Optional: Add inner divs for more detailed skeleton effect */}
      </div>
    </div>
  );
};

export default Skeleton;
