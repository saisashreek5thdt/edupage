import React, { useState } from "react";

import triviaImage1 from "../assets/images/trivia/beautiful-view-tranquil-desert-clear-sky-captured-morocco.png";
import triviaImage2 from "../assets/images/trivia/chile-4388206_1920.png";
import triviaImage3 from "../assets/images/trivia/indian-men-resting-by-bonfire-with-their-camel (1).png";
import triviaImage4 from "../assets/images/trivia/male-african-ostrich-national-reserve-park.png";
import triviaImage5 from "../assets/images/trivia/world-map-with-texture-global-satellite-photo-earth-view-from-space.png";
import Footer from "./Footer";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import treeImg from "../assets/icons/Group 4396.png";
import userIcon from "../assets/images/user/userIcon.png";

const images = [
  {
    src: triviaImage1,
    description:
      "Although the lifestyle can be extremely challenging, still, people live in deserts. As a matter of fact, about 1 billion people live with their livestock. However, it’s difficult to get water in the desert; hence, these people have difficulty adapting to the ecosystem.",
  },
  {
    src: triviaImage2,
    description:
      "Although the lifestyle can be extremely challenging, still, people live in deserts. As a matter of fact, about 1 billion people live with their livestock. However, it’s difficult to get water in the desert; hence, these people have difficulty adapting to the ecosystem.",
  },
  {
    src: triviaImage3,
    description:
      "Although the lifestyle can be extremely challenging, still, people live in deserts. As a matter of fact, about 1 billion people live with their livestock. However, it’s difficult to get water in the desert; hence, these people have difficulty adapting to the ecosystem.",
  },
  {
    src: triviaImage4,
    description:
      "Although the lifestyle can be extremely challenging, still, people live in deserts. As a matter of fact, about 1 billion people live with their livestock. However, it’s difficult to get water in the desert; hence, these people have difficulty adapting to the ecosystem.",
  },
  {
    src: triviaImage5,
    description:
      "Although the lifestyle can be extremely challenging, still, people live in deserts. As a matter of fact, about 1 billion people live with their livestock. However, it’s difficult to get water in the desert; hence, these people have difficulty adapting to the ecosystem.",
  },
];

const Trivia = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="flex flex-col justify-between h-screen ">
      <div className="w-screen flex justify-between">
        <h1 className="pt-4 pl-4 md:pt-16 md:pl-16 text-2xl">Trivia</h1>
        <img
          src={userIcon}
          alt="Current Image"
          className="object-contain w-16 h-16 m-3 rounded-full mr-10"
        />
      </div>
      <div className="flex flex-col items-center justify-center relative ">
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrevClick}
            className=" md:p-4  p-2  rounded-full text-gray-400 md:text-6xl sm: text-3xl "
          >
            {/* &lt; */}
            <FiChevronLeft />
          </button>
          <img
            src={currentImage.src}
            alt="Current Image"
            className="object-contain xl:w-800 lg:w-2/4 w-72 md:w-3/4 h-auto"
          />
          <button
            onClick={handleNextClick}
            className="md:p-4 p-2  rounded-full text-gray-400 md:text-6xl sm: text-3xl"
          >
            {/* &gt; */}
            <FiChevronRight />
          </button>
        </div>
        <div className="mt-5 flex justify-center items-center shadow-xl pt-3">
          <p className="bg-white p-2 sm:w-fit md:w-700 md:p-4 text-blue-900 text-sm text-center w-700 flex">
            <img src={treeImg} className="w-16" />
            <p className="pl-5 xl:text-16 text-left font-medium">
              {currentImage.description}
            </p>
          </p>
        </div>

        <div className="mt-5 flex items-center justify-center space-x-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                index === currentImageIndex ? "bg-red-300" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <Footer
          last={"/page/desert/vegetation/"}
          next={""}
          hidePageBtn={false}
          nextTopicBtn={true}
        />
      </div>
    </div>
  );
};

export default Trivia;