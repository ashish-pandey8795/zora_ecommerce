"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const slides = [
  {
    backgroundImage: "/bg1.jpg",
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
    <motion.div
      exit={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
      className="relative h-screen"
    >
      {/* Layered Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Previous Background */}
        {prevSlide !== null && (
          <motion.div
            key={`prev-${prevSlide}`}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[prevSlide].backgroundImage})`,
            }}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Current Background */}
        <motion.div
          key={`current-${currentSlide}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Overlay and Content */}
      <div className="relative z-10 h-full bg-black bg-opacity-50 pt-12 pb-12">
        <Navbar contact={true} logo="/WhiteLogo.svg" />
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="mt-[15%] px-4 sm:px-0 max-w-[700px]">
            <h1 className="text-white font-[400] text-6xl leading-[1.16] max-w-[600px]">
              {title}
            </h1>
            <p className="text-white text-[18px] max-w-[500px] py-5">
              {description}
            </p>
            <div className="flex text-white text-3xl sm:text-4xl pt-2 items-center">
              <Image
                className="cursor-pointer w-[120px] h-[27px]"
                src="/left-arrow.svg"
                width={100}
                height={75}
                alt="Arrow icon"
                onClick={handlePrevSlide}
              />
              <span className="px-4 font-[300]">{`${currentSlide + 1}/${
                slides.length
              }`}</span>
              <Image
                className="cursor-pointer w-[120px] h-[27px]"
                src="/right-arrow.svg"
                width={200}
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
