"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const slides = [
  {
    backgroundImage: "/bg.png",
    title: "Love in the Center of New Delhi, India",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    backgroundImage: "/bg.jpg",
    title: "Explore the Heritage of Old Delhi",
    description:
      "Experience the beautiful Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  {
    backgroundImage: "/bg3.jpg",
    title: "Discover the Vibrant Culture",
    description:
      "From markets to food, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dolore magna aliquyam.",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);

  const handleNextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const { title, description } = slides[currentSlide];

  return (
    <motion.div exit={{ opacity: 0.5 }} transition={{ duration: 1 }} className="relative h-screen">
      {/* Layered Backgrounds */}
      <div className="absolute inset-0">
        {/* Previous Background */}
        {prevSlide !== null && (
          <motion.div
            key={`prev-${prevSlide}`}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[prevSlide].backgroundImage})`,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Current Background */}
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Overlay and Content */}
      <div className="relative z-10 h-full bg-black bg-opacity-50 pt-12 pb-12">
        <Navbar />
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="mt-[15%] px-4 sm:px-0 max-w-[700px]">
            <h1 className="text-white text-4xl sm:text-5xl leading-tight max-w-[450px]">
              {title}
            </h1>
            <p className="text-white text-lg sm:text-xl pt-6 sm:pt-8">
              {description}
            </p>
            <div className="flex text-white text-3xl sm:text-4xl pt-2 items-center">
              <Image
                className="cursor-pointer w-[70px] h-[27px]"
                src="/left-arrow.svg"
                width={100}
                height={75}
                alt="Arrow icon"
                onClick={handlePrevSlide}
              />
              <span className="px-4">{`${currentSlide + 1}/${slides.length}`}</span>
              <Image
                className="cursor-pointer w-[70px] h-[27px]"
                src="/right-arrow.svg"
                width={100}
                height={75}
                alt="Arrow icon"
                onClick={handleNextSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
