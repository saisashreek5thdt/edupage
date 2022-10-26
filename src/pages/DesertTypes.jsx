import React from "react";

import DesertType1 from "../assets/images/Desert-Type-1.png";
import DesertType2 from "../assets/images/Desert-Type-2.png";
import { videoBtn, audioBtn } from "../pages/Btns";
import AudioPlayer from "./AudioPlayer";

import MenuBtn from "./MenuBtn";
import VideoPlayer from "./VideoPlayer";

const DesertTypes = () => {
  return (
    <>
      <MenuBtn />
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-Linotte text-gray-900">
              Types of Deserts
            </h1>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-justify">
              A hot desert has very high temperature during the day, but nights
              are quite cold, sometimes freezing cold. There is very little or
              no rainfall. There is no cold season in the hot deserts.
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-justify">
              Cold deserts are farther from the equator than hot deserts. Though
              they are very dry, the main reason they have few plants is that it
              is so cold there. They have mildly hot summers and extremely cold
              winters.
            </p>
            <div className="flex lg:flex-row md:flex-col">
              <button
                type="button"
                className="inline-flex py-3 px-5 items-center focus:outline-none"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
              >
                {videoBtn()}
              </button>
              <button
                type="button"
                className="inline-flex py-3 px-5 items-center focus:outline-none"
                data-bs-toggle="modal"
                data-bs-target="#audioModal"
              >
                {audioBtn()}
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="desert-info"
              src={DesertType1}
            />
            <img
              className="object-cover object-center rounded"
              alt="desert-info"
              src={DesertType2}
            />
          </div>
        </div>
      </section>
      <VideoPlayer />
      <AudioPlayer />
    </>
  );
};

export default DesertTypes;
