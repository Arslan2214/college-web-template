import { Suspense } from "react";
import dynamic from "next/dynamic";
import SliderSkeleton from "../(components)/SliderSkeleton";

const Slider = dynamic(() => import("../(components)/Slider"));

const Herosection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-3xl  bg-slate-700 text-slate-50">
      <Suspense fallback={<SliderSkeleton />}>
        <Slider />
      </Suspense>
    </div>
  );
};

export default Herosection;
