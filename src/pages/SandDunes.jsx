import React, { useState, useEffect } from "react";
import MenuBtn from "./MenuBtn";
import { videoBtn, audioBtn } from "../pages/Btns";
import AudioPlayer from "./AudioPlayer";
import VideoPlayer from "./VideoPlayer";
import ReactAudioPlayer from "react-audio-player";
import Sand1 from "../assets/images/sand-dunes/sand1.jpg";
import Sand2 from "../assets/images/sand-dunes/sand2.jpg";
import Sand3 from "../assets/images/sand-dunes/sand3.jpg";
import Sand4 from "../assets/images/sand-dunes/sand4.jpg";
import Sand5 from "../assets/images/sand-dunes/sand5.jpg";
import Sand6 from "../assets/images/sand-dunes/vertical-shot-patterns-beautiful-sand-dunes-desert.png";
import Footer from "./Footer";
import Sandtunes from "../assets/audio/sandtunes__audio.mp3";
import Audio from "./Audio";

const dunesImgs = [
  {
    id: 1,
    imgSrc: Sand1,
    alt: "Sand Dunes",
  },
  {
    id: 2,
    imgSrc: Sand2,
    alt: "Sand Dunes",
  },
  {
    id: 3,
    imgSrc: Sand3,
    alt: "Sand Dunes",
  },
  {
    id: 4,
    imgSrc: Sand4,
    alt: "Sand Dunes",
  },
  {
    id: 5,
    imgSrc: Sand5,
    alt: "Sand Dunes",
  },
  {
    id: 6,
    imgSrc: Sand6,
    alt: "Sand Dunes",
  },
];

const paragraph1 =
  `Sand dunes are a low hill-like shaped landforms formed by sand deposits in the deserts. While the wind blows, it lifts and moves sand from one place to another. While it stops blowing, the sand falls and gets deposited in low hill-like systems. Mounds of loose sand grains that are piled up by wind movement are referred to as sand dunes. They're mostly found in deserts.`.split(
    " "
  );
const paragraph2 =
  `Dunes are found wherever loose sand is windblown: in deserts, on beaches, and even on some eroded and abandoned farm fields in semi-arid regions, along with northwest India and parts of the southwestern USA. Sand dunes develop into all shapes and sizes. Sand dunes stop moving when they become overgrown with vegetation.`.split(
    " "
  );
const paragraph3 =
  `There are five major dune shapes: crescentic, linear, star, dome, and parabolic. The most common dune form on this planet and on Mars is crescentic. Crescent-fashioned mounds commonly are wider than long.`.split(
    " "
  );

const SandDunes = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  useEffect(() => {
    let intervalId = null;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setHighlightIndex((prevIndex) =>
          prevIndex <
          paragraph1.length + paragraph2.length + paragraph3.length - 1
            ? prevIndex + 1
            : prevIndex
        );
      }, 450);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    setHighlightIndex(-1);
  };

  return (
    <>
      <section className="text-gray-600 body-font h-[90vh] overflow-y-hidden">
        <MenuBtn />
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:relative lg:bottom-14 md:w-1/2 lg:pr-36 md:pr-16 flex flex-col md:items-start md:text-left pb-44 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-12 font-normal w-4/5 font-Linotte text-gray-900">
              Sand Dunes
            </h1>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-left">
              {paragraph1.map((word, index) => (
                <span
                  key={index}
                  className={index <= highlightIndex ? "text-highlight" : ""}
                >
                  {word}{" "}
                </span>
              ))}
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-left">
              {paragraph2.map((word, index) => (
                <span
                  key={index}
                  className={
                    index + paragraph1.length <= highlightIndex
                      ? "text-highlight"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-left">
              {paragraph3.map((word, index) => (
                <span
                  key={index}
                  className={
                    index + paragraph1.length + paragraph2.length <=
                    highlightIndex
                      ? "text-highlight"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </p>
            <div className="z-0 sm:flex sm:justify-center lg:justify-start">
              <div
                className="rounded-md shadow cursor-pointer mr-4"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
              >
                {videoBtn()}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 cursor-pointer">
                <div onClick={handlePlayPause}>
                  <Audio isPlaying={isPlaying} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full pb-60 md:w-1/2 w-5/6">
            <div className="grid grid-cols-2 pb-2 md:grid-cols-2 grid-rows-2 sm:gap-3 lg:gap-1 lg:pl-32 lg:mr-8">
              {dunesImgs.map((imgs) => (
                <img
                  className="w-72 h-40 object-cover object-center rounded shadow-lg"
                  alt={imgs.alt}
                  src={imgs.imgSrc}
                  key={imgs.id}
                />
              ))}
            </div>
            <button className="bg-blue-400 relative left-[135px] w-[340px] py-4 px-4  text-white font-medium mt-auto">
              Crescent - Fashioned Mounds : Desert
            </button>
          </div>
        </div>
      </section>

      <VideoPlayer />
      {isPlaying && <ReactAudioPlayer src={Sandtunes} autoPlay />}

      <div className="absolute bottom-5">
        <Footer
          last={"/page/desert/oasis/info/"}
          next={"/page/desert/vegetation/"}
          hidePageBtn={false}
        />
      </div>
    </>
  );
};

export default SandDunes;
