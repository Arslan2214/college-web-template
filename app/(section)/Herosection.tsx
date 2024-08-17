import Carousel from "../(components)/Carousel";
import Section_Head from "../(components)/Section_Head";
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('../(components)/Slider'), { ssr: false });

const Herosection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-3xl  bg-slate-700 text-slate-50">
      <Slider />
      {/* <Carousel /> */}
    </div>
  );
};

export default Herosection;
