"use client";
import Button from "../(components)/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

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

const slideTextVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.85 } },
};

const buttonVariants = {
  initial: { scale: 0.8 },
  animate: { scale: 1, transition: { duration: 0.65 } },
};

const IndexPage = () => {
  // Create a ref to access the Swiper instance
  const swiperRef = useRef<SwiperCore | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      text: "Crafting Comfort for Every Home.",
      image: "/img/carousel/Carousel1.jpg",
    },
    {
      text: "Elegance Meets Functionality.",
      image: "/img/carousel/Carousel2.jpg",
    },
    {
      text: "Designs That Define Your Space.",
      image: "/img/carousel/Carousel3.jpg",
    },
    {
      text: "Transforming Spaces, Inspiring Lives.",
      image: "/img/carousel/Carousel4.jpg",
    },
    {
      text: "Where Style Meets Comfort.",
      image: "/img/carousel/Carousel5.jpg",
    },
    {
      text: "Discover Timeless Furniture.",
      image: "/img/carousel/Carousel6.jpg",
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  console.log(swiperRef?.current?.activeIndex);

  return (
    <section className="h-[80vh] w-full bg-black">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log(
            "Swiper initialized with active index:",
            swiper.activeIndex
          );
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
          console.log("Slide changed. Current index:", swiper.activeIndex);
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Autoplay]}
        loop={false}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                <motion.span
                  className="mt-4 uppercase text-3xl sm:text-5xl lg:text-6xl font-head w-2/3 text-white text-center"
                  variants={slideTextVariants}
                  initial="initial"
                  animate={currentIndex === index ? "animate" : "initial"}
                >
                  {slide.text}
                </motion.span>
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  animate={currentIndex === index ? "animate" : "initial"}
                >
                  <Button text="Visit About&nbsp;Section" link="/about" make="light" />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <NavigationButton direction="prev" onClick={handlePrev} />
        <NavigationButton direction="next" onClick={handleNext} />
      </Swiper>
    </section>
  );
};

export default IndexPage;
