import React, { useState, useEffect } from "react";
import veg1 from "../assets/images/vegetation/vege1.png";
import veg2 from "../assets/images/vegetation/vege2.png";
import veg3 from "../assets/images/vegetation/vege3.png";

import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import { audioBtn, videoBtn } from "./Btns";
import Footer from "./Footer";
import MenuBtn from "./MenuBtn";

import ReactAudioPlayer from "react-audio-player";
import audio1 from "../assets/audio/Vegetation.mp3";
import Audio from "./Audio";

function Vegetation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const text = `Desert environments are so dry that they support only extremely sparse vegetation; trees are usually absent and, under normal climatic conditions, shrubs or herbaceous plants provide only very incomplete ground cover. In desert water is lost due to evaporation as the transpiration rate is more than precipitation. Most of the Desert plants are salt and drought tolerant. They store water in their stems, roots and leaves. Desert vegetation is found in Central and South-West Asia. Arabian desert, Thar desert, Gobi desert are some of the deserts of Asia. Cacti and Acacia are the most common vegetation found in desert regions. Agricultural production is mainly from kharif crops, which are grown in the summer season and seeded in June and July. These are then harvested in September and October and include bajra, pulses such as guar, jowar (Sorghum vulgare), maize (zea mays), sesame and groundnuts.`;

  const words = text.split(" ");

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setHighlightIndex((prevIndex) =>
          prevIndex < words.length - 1 ? prevIndex + 1 : -1
        );
      }, 520);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    setHighlightIndex(-1);
  };

  return (
    <div className="flex flex-col justify-between h-auto ">
      <div className="w-screen flex justify-between">
        <h1 className="pt-3 pl-3 md:pt-14 md:pl-36 text-3xl">Vegetation</h1>
        <MenuBtn />
      </div>

      <div className="mx-32 absolute bottom-14">
        <div className="flex  ">
          <img src={veg1} alt="Current Image" className="w-1/3 p-4 mb-2" />{" "}
          <img src={veg2} alt="Current Image" className="w-1/3 p-4 mb-2" />{" "}
          <img src={veg3} alt="Current Image" className="w-1/3 p-4 mb-2" />
        </div>

        <p className="text-md pl-4 pt-2 text-gray-500">
          {words.map((word, index) => (
            <span
              key={index}
              className={index <= highlightIndex ? "text-highlight" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <div className="z-0 mt-4 ml-4 sm:flex sm:justify-center lg:justify-start">
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

      <div className="absolute bottom-5">
        <Footer
          last={"/page/desert/sanddunes/"}
          next={"/page/desert/trivia/"}
        />
      </div>
      <VideoPlayer />
      {isPlaying && <ReactAudioPlayer src={audio1} autoPlay />}
    </div>
  );
}

export default Vegetation;
