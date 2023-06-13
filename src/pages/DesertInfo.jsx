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
            <div className="relative overflow-hidden bottom-16 ">
        <div className="mx-auto max-w-auto">
          <div className="relative z-10 pb-8 left-8 sm:pb-16 md:pb-20 lg:w-auto lg:max-w-2xl lg:pb-28  lg:bottom-16 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-20     lg:px-8 xl:mt-28 overflow-hidden">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-normal  font-Linotte tracking-tight text-gray-900 text-justify sm:text-5xl md:text-6xl">
                  <span className="block xl:inline font-Linotte">
                    What is a Desert?
                  </span>
                </h1>

                <div className="lg:absolute  lg:inset-y-10  lg:w-1/2">
                  <img
                    className="h-56 lg:relative left-5  pr-20 lg:hidden  w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
                    src={DesertBg1}
                    alt=""
                  />
                </div>

                <p className="mt-3 font-Linotte text-base text-gray-500 whitespace-nowrap sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:whitespace-normal md:text-base md:text-justify md:overflow-hidden lg:mx-0 sm:whitespace-normal">
                  A desert is a large region that gets very little rain each
                  year. Most deserts get less than 10 inches of rain in a year.
                </p>
                <p className="mt-3 font-Linotte text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-base md:text-justify md:overflow-hidden lg:mx-0">
                  Some deserts are hot and some are cold. Some deserts are huge
                  areas of sand while others have rocky hills and mountains. The
                  Deserts are found on every continent, and they cover more than
                  20% of the Earth. They are classified into two types – hot and
                  cold based on their temperature.
                </p>
                <p className="mt-3 font-Linotte text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-base md:text-justify md:overflow-hidden lg:mx-0">
                  Although both the lands are dry and have unfavorable climatic
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
        <div className=" hidden lg:block lg:absolute lg:inset-y-10 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
            src={DesertBg1}
            alt=""
          />
        </div>
      </div>
            {/* 
            <div className="overflow-hidden bg-white py-24 sm:py-8">
                <div className="mx-auto max-w-full px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-4xl font-semibold leading-7 text-indigo-600 sm:order-1">
                                    What is a Desert
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600 font-medium text-justify sm:order-3">
                                    A desert is a large region that gets very
                                    little rain each year. Most deserts get less
                                    than 10 inches of rain in a year.
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600 font-medium text-justify sm:order-4">
                                    Some deserts are hot and some are cold. Some
                                    deserts are huge areas of sand while others
                                    have rocky hills and mountains. The Deserts
                                    are found on every continent, and they cover
                                    more than 20% of the Earth. They are
                                    classified into two types – hot and cold
                                    based on their temperature.
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600 font-medium text-justify sm:order-5">
                                    Although both the lands are dry and have
                                    unfavourable climatic conditions, they are
                                    different from each other in terms of their
                                    climate and, flora and fauna. Very few
                                    plants or animals live in desert areas.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row md:gap-x-8 py-5">
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
                        <img
                            src={DesertBg1}
                            alt="Product screenshot"
                            className="w-[37rem] max-w-none sm:w-[37rem] sm:order-2 md:w-[35rem] lg:w-[50rem]"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
             */}

            <VideoPlayer />
            <AudioPlayer />
        </>
    );
};

export default DesertInfo;
