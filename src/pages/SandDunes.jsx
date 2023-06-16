import React from "react";
import MenuBtn from "./MenuBtn";

import { videoBtn, audioBtn } from "../pages/Btns";

import AudioPlayer from "./AudioPlayer";
import VideoPlayer from "./VideoPlayer";

import Sand1 from "../assets/images/sand-dunes/sand1.jpg";
import Sand2 from "../assets/images/sand-dunes/sand2.jpg";
import Sand3 from "../assets/images/sand-dunes/sand3.jpg";
import Sand4 from "../assets/images/sand-dunes/sand4.jpg";
import Sand5 from "../assets/images/sand-dunes/sand5.jpg";
import Footer from "./Footer";

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
];

const SandDunes = () => {
  return (
    <>
      {/* 
            <div className="relative overflow-hidden bottom-16">
                <div className="mx-auto max-w-auto">
                    <div className="relative z-10 pb-8 left-8 sm:pb-16 md:pb-20 lg:w-auto lg:max-w-2xl lg:pb-28 lg:bottom-16 xl:pb-32">
                        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-20 lg:px-8 xl:mt-28 overflow-hidden">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl font-normal tracking-tight text-gray-900 text-justify sm:text-5xl md:text-4xl">
                                    <span className="block xl:inline">
                                        Sand Dunes
                                    </span>
                                </h1>

                                <div className="lg:absolute lg:inset-y-10 lg:w-1/2">
                                    <img
                                        className="h-56 lg:relative left-5 pr-20 lg:hidden w-2/4 object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
                                        src={Sanddune}
                                        alt=""
                                    />
                                </div>

                                <p className="mt-3 text-base text-gray-500 whitespace-nowrap sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:whitespace-normal md:text-base md:text-justify md:overflow-hidden lg:mx-0 sm:whitespace-normal">
                                    Sand dunes are a low hill-like shaped
                                    landforms formed by sand deposits in the
                                    deserts. While the wind blows, it lifts and
                                    moves sand from one place to another. While
                                    it stops blowing, the sand falls and gets
                                    deposited in low hill-like systems. Mounds
                                    of loose sand grains that are piled up by
                                    wind movement are referred to as sand dunes.
                                    They're mostly found in deserts.
                                </p>
                                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-base md:text-justify md:overflow-hidden lg:mx-0">
                                    Dunes are found wherever loose sand is
                                    windblown: in deserts, on beaches, and even
                                    on some eroded and abandoned farm fields in
                                    semi-arid regions, along with northwest
                                    India and parts of the southwestern USA.
                                    Sand dunes develop into all shapes and
                                    sizes. Sand dunes stop moving when they
                                    become overgrown with vegetation.
                                </p>
                                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-base md:text-justify md:overflow-hidden lg:mx-0">
                                    There are five major dune shapes:
                                    crescentic, linear, star, dome, and
                                    parabolic. The most common dune form on this
                                    planet and on Mars is crescentic.
                                    Crescent-fashioned mounds commonly are
                                    wider than long.
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
                <div className=" hidden md:-mx-40 md:py-5 lg:block lg:absolute lg:inset-y-10 lg:right-0 lg:w-1/2">
                    <figure className="relative max-w-full transition-all duration-300 cursor-pointer">
                        <img
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-2/4"
                            src={Sanddune}
                            alt=""
                        />
                        <figcaption className="absolute px-4 text-lg text-white bg-sky-500 lg:bottom-6 lg:text-lg md:text-sm md:bottom-0">
                            <p>Crescent-fashioned mounds : Desert</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
             */}
      <section className="text-gray-600 body-font h-[90vh] overflow-y-hidden">
        <MenuBtn />
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:relative lg:bottom-14 md:w-1/2 lg:pr-36 md:pr-16 flex flex-col md:items-start md:text-left pb-44 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-12 font-normal w-4/5 font-Linotte text-gray-900">
              Sand Dunes
            </h1>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-left">
              Sand dunes are a low hill-like shaped landforms formed by sand
              deposits in the deserts. While the wind blows, it lifts and moves
              sand from one place to another. While it stops blowing, the sand
              falls and gets deposited in low hill-like systems. Mounds of loose
              sand grains that are piled up by wind movement are referred to as
              sand dunes. They're mostly found in deserts.
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-left">
              Dunes are found wherever loose sand is windblown: in deserts, on
              beaches, and even on some eroded and abandoned farm fields in
              semi-arid regions, along with northwest India and parts of the
              southwestern USA. Sand dunes develop into all shapes and sizes.
              Sand dunes stop moving when they become overgrown with vegetation.
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-left">
              There are five major dune shapes: crescentic, linear, star, dome,
              and parabolic. The most common dune form on this planet and on
              Mars is crescentic. Crescent-fashioned mounds commonly are
              wider than long.
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
          <div className="lg:max-w-lg lg:w-full pb-60 md:w-1/2 w-5/6">
            <div className="grid grid-cols-2 pb-2 md:grid-cols-2 grid-rows-2 sm:gap-3 lg:gap-1 lg:pl-32 lg:mr-8">
              {dunesImgs.map((imgs) => (
                <img
                  className="w-72 h-52 object-cover object-center rounded shadow-lg"
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
      <AudioPlayer />
      <div>
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
