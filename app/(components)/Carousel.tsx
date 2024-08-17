"use client";
import { useState } from "react";

interface CarouselItem {
  image: string;
  alt: string;
  text: string;
}

const Carousel: React.FC = () => {
  const items: CarouselItem[] = [
    {
      image: "/img/carousel/Carousel1.jpg",
      alt: "Living Room Furniture",
      text: "Elegant Living Room Furniture",
    },
    {
      image: "/img/carousel/Carousel2.jpg",
      alt: "Bedroom Furniture",
      text: "Cozy Bedroom Furniture",
    },
    {
      image: "/img/carousel/Carousel3.jpg",
      alt: "Kitchen Furniture",
      text: "Modern Kitchen Furniture",
    },
    {
      image: "/img/carousel/Carousel4.jpg",
      alt: "Office Furniture",
      text: "Stylish Office Furniture",
    },
    {
      image: "/img/carousel/Carousel5.jpg",
      alt: "Dining Furniture",
      text: "Elegant Dining Sets",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out relative w-full h-full`}
            data-carousel-item
          >
            <img
              src={item.image}
              className="absolute block w-full h-full object-cover"
              alt={item.alt}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-xl md:text-3xl font-bold">
                {item.text}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            data-carousel-slide-to={index}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        data-carousel-prev
      >
        <span
          className="relative text-base px-5 py-3  
    after:border-t-2 after:border-l-2 after:border-yellow/40 after:absolute after:top-0 after:left-0 after:content-[''] after:w-4 after:h-3 hover:after:w-full after:rounded-sm before:rounded-sm hover:after:h-full after:duration-500 after:transition-all 
    before:border-b-2 before:border-r-2 before:border-yellow/40 before:absolute before:bottom-0 before:right-0 before:content-[''] before:w-4 before:h-3 hover:before:w-full hover:before:h-full before:duration-500 before:transition-all"
        >
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        data-carousel-next
      >
        <span
          className="relative text-base px-5 py-3 
  after:border-t-2 after:border-r-2 after:border-yellow/40 after:absolute after:top-0 after:right-0 after:content-[''] after:w-4 after:h-3 hover:after:w-full after:rounded-sm before:rounded-sm hover:after:h-full after:duration-500 after:transition-all 
  before:border-b-2 before:border-l-2 before:border-yellow/40 before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-4 before:h-3 hover:before:w-full hover:before:h-full before:duration-500 before:transition-all"
        >
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4-4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
