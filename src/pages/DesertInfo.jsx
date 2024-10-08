import React, { useEffect, useState } from "react";
import DesertBg1 from "../assets/images/DesertImg.png";
import { videoBtn, audioBtn } from "../pages/Btns";
import AudioPlayer from "./AudioPlayer";

import MenuBtn from "./MenuBtn";
import VideoPlayer from "./VideoPlayer";
import ReactAudioPlayer from "react-audio-player";
import Footer from "./Footer";

import audio1 from "../assets/audio/audio1.mp3";
import Audio from "./Audio";

const DesertInfo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  // Split the paragraph text into an array of words
  const paragraph =
    "A desert is a large region that gets very little rain each year. Most deserts get less than 10 inches of rain in a year. Some deserts are hot and some are cold. Some deserts are huge areas of sand while others have rocky hills and mountains.".split(
      " "
    );

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setHighlightIndex((prevIndex) => {
          if (prevIndex === paragraph.length - 1) {
            clearInterval(intervalId);
            setIsPlaying(false);
          }
          return prevIndex + 1;
        });
      }, 310);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  return (
    <>
      <section className="text-gray-600 ">
        <MenuBtn />
        <div className="relative   h-[550px] overflow-y-hidden overflow-hidden bottom-12 ">
          <div className=" relative bottom-24 mx-auto max-w-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-auto lg:max-w-2xl lg:pb-28 xl:pb-32">
              <main className="mx-auto relative top-9  mt-10 m max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-20 lg:px-8 xl:mt-28 overflow-hidden">
                <div className="sm:text-center ml-8 sm:ml-14 md:ml-20 lg:ml-28  lg:text-left">
                  <h1 className="text-3xl   tracking-tight text-gray-900 text-justify  sm:text-4xl md:text-1xl mb-5">
                    <span className="block pt-7 xl:inline ">
                      What is a Desert?
                    </span>
                  </h1>
                  <img
                    className="h-56 lg:relative left-5  pr-20 lg:hidden  w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
                    src={DesertBg1}
                    alt=""
                  />
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-base md:text-justify md:overflow-hidden lg:mx-0 sm:whitespace-normal text-left">
                    {paragraph.map((word, index) => (
                      <span
                        key={index}
                        className={`
              ${isPlaying && index <= highlightIndex ? "text-highlight" : ""}
            `}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </p>
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-base md:text-justify md:overflow-hidden lg:mx-0 sm:whitespace-normal text-left">
                    The Deserts are found on every continent, and they cover
                    more than 20% of the Earth. They are classified into two
                    types – hot and cold based on their temperature. Although
                    both the lands are dry and have unfavorable climatic
                    conditions, they are different from each other in terms of
                    their climate and, flora and fauna. Very few plants or
                    animals live in desert areas.
                  </p>
                  <div className="z-0 pt-10  sm:mt-8 sm:flex sm:justify-center lg:justify-start">
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
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-10 lg:right-0 lg:w-1/2">
            <img
              className="h-56 lg:relative hidden  left-0 lg:block pr-20   w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
              src={DesertBg1}
              alt=""
            />
          </div>
        </div>
      </section>
      <VideoPlayer />
      {isPlaying && <ReactAudioPlayer src={audio1} autoPlay />}

      {/* <AudioPlayer /> */}
      <div className="absolute bottom-5">
        <Footer
          last={""}
          next={"/page/desert/types/"}
          hideFirstTopicBtn={true}
        />
      </div>
    </>
  );
};

export default DesertInfo;
