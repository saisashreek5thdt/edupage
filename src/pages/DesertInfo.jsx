import React from "react";

import DesertBg1 from "../assets/images/DesertImg.png";
import { videoBtn, audioBtn } from "../pages/Btns";
import AudioPlayer from "./AudioPlayer";

import MenuBtn from "./MenuBtn";
import VideoPlayer from "./VideoPlayer";

const DesertInfo = () => {
  return (
    <>
      <MenuBtn />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-Linotte text-gray-900">
              What is a Desert?
            </h1>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-justify">
              A desert is a large region that gets very little rain each year.
              Most deserts get less than 10 inches of rain in a year.
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-justify">
              Some deserts are hot and some are cold. Some deserts are huge
              areas of sand while others have rocky hills and mountains. The
              Deserts are found on every continent, and they cover more than 20%
              of the Earth. They are classified into two types – hot and cold
              based on their temperature.
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-justify">
              Although both the lands are dry and have unfavourable climatic
              conditions, they are different from each other in terms of their
              climate and, flora and fauna. Very few plants or animals live in
              desert areas.
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
              src={DesertBg1}
            />
          </div>
        </div>
      </section>
      <VideoPlayer />
      <AudioPlayer />
    </>
  );
};

export default DesertInfo;
