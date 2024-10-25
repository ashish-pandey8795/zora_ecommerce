"use client"
// import { createClient } from "contentful";
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
    backgroundImage: "/bg3.png",
    title: "Discover the Vibrant Culture",
    description:
      "From markets to food, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dolore magna aliquyam.",
  },
  
];

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({ content_type: "homeTiles" });

//   return {
//     props: {
//       homeTiles: res.items,
//     },
//     revalidate: 1,
//   };
// }
    

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
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="h-full bg-black bg-opacity-50 pt-12 pb-12">
        <Navbar />
        <div className="container mx-auto flex justify-between items-center">
          <div className="mt-[15%] px-4 sm:px-0 max-w-[700px]">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
