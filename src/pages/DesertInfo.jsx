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
      {/*
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
      */}

      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-auto lg:max-w-2xl lg:pb-28 xl:pb-32">

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-20 lg:px-8 xl:mt-28 overflow-hidden">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold font-Jost tracking-tight text-gray-900 text-justify sm:text-5xl md:text-6xl">
                  <span className="block xl:inline font-Jost">What is a Desert?</span>
                </h1>
                <p className="mt-3 font-Jost text-base text-gray-500 whitespace-nowrap sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:whitespace-normal md:text-base md:text-justify md:overflow-hidden lg:mx-0 sm:whitespace-normal">
                  A desert is a large region that gets very little rain each
                  year. Most deserts get less than 10 inches of rain in a year.
                </p>
                <p className="mt-3 font-Jost text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-base md:text-justify md:overflow-hidden lg:mx-0">
                  Some deserts are hot and some are cold. Some deserts are huge
                  areas of sand while others have rocky hills and mountains. The
                  Deserts are found on every continent, and they cover more than
                  20% of the Earth. They are classified into two types – hot and
                  cold based on their temperature.
                </p>
                <p className="mt-3 font-Jost text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-base md:text-justify md:overflow-hidden lg:mx-0">
                  Although both the lands are dry and have unfavourable climatic
                  conditions, they are different from each other in terms of
                  their climate and, flora and fauna. Very few plants or animals
                  live in desert areas.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div
                    className="rounded-md shadow cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                  >
                    {videoBtn()}
                  </div>
                  <div
                    className="mt-3 sm:mt-0 sm:ml-3 cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#audioModal"
                  >
                    {audioBtn()}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-10 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
            src={DesertBg1}
            alt=""
          />
        </div>
      </div>

      <VideoPlayer />
      <AudioPlayer />
    </>
  );
};

export default DesertInfo;
