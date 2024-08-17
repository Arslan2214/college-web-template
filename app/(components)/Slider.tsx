"use client";
import Button from "../(components)/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Define the type for the navigation direction
type Manner = "prev" | "next";

// Custom Navigation Button Component
const NavigationButton = ({
  direction,
  onClick,
}: {
  direction: Manner;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`swiper-button-${direction} group absolute top-1/2 transform -translate-y-1/2 p-8 rounded-md !text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors ${
        direction === "prev" ? "left-4" : "right-4"
      }`}
    >
      {direction === "prev" ? (
          <MdKeyboardArrowLeft />
      ) : (
        <MdKeyboardArrowRight />
      )}
    </button>
  );
};

const IndexPage = () => {
  // Create a ref to access the Swiper instance
  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    {
      text: "Quality is not only our standard.",
      image: "/img/carousel/Carousel1.jpg",
    },
    {
      text: "Explore Slide 2",
      image: "/img/carousel/Carousel2.jpg",
    },
    {
      text: "Explore Slide 2",
      image: "/img/carousel/Carousel2.jpg",
    },
    {
      text: "Explore Slide 2",
      image: "/img/carousel/Carousel2.jpg",
    },
    {
      text: "Explore Slide 2",
      image: "/img/carousel/Carousel2.jpg",
    },
    {
      text: "Discover Slide 3",
      image: "/img/carousel/Carousel3.jpg",
    },
  ];

  // Handler to navigate to the previous slide
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    console.log(swiperRef.current?.activeIndex); // Debug activeIndex
  };

  // Handler to navigate to the next slide
  const handleNext = () => {
    swiperRef.current?.slideNext();
    console.log(swiperRef.current?.activeIndex); // Debug activeIndex
  };

  console.log(swiperRef?.current?.activeIndex);


  return (
    <section className="h-[80vh] w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log("Swiper initialized with active index:", swiper.activeIndex);
        }}
        onSlideChange={(swiper) => {
          console.log("Slide changed. Current index:", swiper.activeIndex);
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        loop={false} // Disable loop
        slidesPerView={1} // Show one slide at a time
        className="cont-block"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[80vh] w-full">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
                className="z-0"
              />
              <div className="absolute inset-0 flex flex-col gap-16 justify-center items-center bg-black bg-opacity-50 z-10">
                <span className="mt-4 uppercase text-3xl sm:text-5xl font-head w-2/3 text-white text-center">
                  {slide.text}
                </span>
                <Button text="Learn More" link="/about" make="light" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <NavigationButton direction="prev" onClick={handlePrev} />
        <NavigationButton direction="next" onClick={handleNext} />
      </Swiper>
    </section>
  );
};

export default IndexPage;
