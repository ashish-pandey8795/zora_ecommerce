"use client"
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
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const { backgroundImage, title, description } = slides[currentSlide];

  return (
    <motion.div exit={{ opacity: 0.5 }} transition={{ duration: 1 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide} // Unique key for each slide
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-cover bg-center h-screen h-full bg-gray-300"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <motion.div
            className="h-full bg-black sm:bg-opacity-50 bg-opacity-70 pt-12 pb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <div className="container mx-auto flex justify-between items-center">
              <motion.div
                className="mt-[15%] px-4 sm:px-0 max-w-[700px]"
                key={`content-${currentSlide}`} // Unique key for text content
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-white text-4xl sm:text-5xl max-w-full sm:max-w-[500px] leading-tight">
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
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default Home;
