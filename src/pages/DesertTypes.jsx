import React, { useState } from "react";

import DesertType1 from "../assets/images/Desert-Type-1.png";
import DesertType2 from "../assets/images/Desert-Type-2.png";
import AudioPlayer from "./AudioPlayer";
import factsBtn from "../assets/icons/Group_7314.png";
import clickHereBtn from "../assets/icons/Group_7344.png";

import MenuBtn from "./MenuBtn";
import VideoPlayer from "./VideoPlayer";
import ModalBox from "./ModalBox";
import Footer from "./Footer";

const DesertTypes = () => {
  const [desertTypes, setDesertTypes] = useState("");
  const handleClick = () => {
    setDesertTypes([DesertType1, DesertType2]);
  };

  return (
    <>
      <MenuBtn />
      <section className="  text-gray-600  ">
        <div className="h-[75vh] mx-auto flex px-20   md:flex-row flex-col items-center">
          <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col     md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-normal sm:text-3xl text-3xl mb-9  font-Linotte text-gray-900 ">
              Types of Deserts
            </h1>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-left">
              A hot desert has very high temperature during the day, but nights
              are quite cold, sometimes freezing cold. There is very little or
              no rainfall. There is no cold season in the hot deserts.
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-left">
              Cold deserts are farther from the equator than hot deserts. Though
              they are very dry, the main reason they have few plants is that it
              is so cold there. They have mildly hot summers and extremely cold
              winters.
            </p>

            <div
              class=" flex cursor-pointer flex-grow  shadow-xl"
              onClick={() => handleClick()}
            >
              <img
                src={factsBtn}
                className=" border-r-4 border-purple-700 relative left-1 object-cover ml-2 mt-8 object-center  h-auto md:h-16"
                alt="desert-info"
              />
              <div class="w-full  md:w-1/2 lg:w-1/3 xl:w-1/4 py-8 pl-8 pr-64 align-top grow bg-yellow-100  ">
                <h6>Difference Between</h6>
                <ul>
                  <li>* Hot Desert</li>
                  <li>* Cold Desert</li>
                </ul>
              </div>
            </div>
            <div className="flex mt-10 cursor-pointer ">
              <img
                className="object-cover inline object-center rounded h-auto md:h-16"
                alt="desert-info"
                src={clickHereBtn}
              />
              <div class="flex h-10 relative top-1 justify-center ">
                <button class="bg-sky-200  font-normal py-2 px-2  ">
                  MCQ &emsp; |
                </button>
                <button class="bg-sky-200  font-normal py-2 px-2  ">
                  True/False &emsp; |
                </button>
                <button class="bg-sky-200  font-normal py-2 px-2  ">
                  Choose right answer
                </button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row md:flex-col">
            <img
              className="object-cover object-center rounded h-auto md:h-64"
              alt="desert-info"
              src={DesertType1}
            />
            <img
              className="object-cover object-center rounded h-auto md:h-64"
              alt="desert-info"
              src={DesertType2}
            />
          </div>
          {desertTypes && (
            <ModalBox
              desertTypes={desertTypes}
              setDesertTypes={setDesertTypes}
            />
          )}
        </div>
        <div className="absolute bottom-5">
          <Footer
            last={"/page/desert/habitat/"}
            next={"/page/desert/sanddunes/"}
            hidePageBtn={false}
          />
        </div>
      </section>
      {/* 
            <div className="relative overflow-hidden">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h1 className="text-4xl font-bold font-Jost tracking-tight text-gray-900 text-justify sm:text-5xl md:text-6xl">
                            <span className="block xl:inline font-Jost">
                                Types of Deserts
                            </span>
                        </h1>
                        <p className="mt-3 font-Jost text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-lg lg:mx-0">
                            A hot desert has very high temperature during the
                            day, but nights are quite cold, sometimes freezing
                            cold. There is very little or no rainfall. There is
                            no cold season in the hot deserts.
                        </p>
                        <p className="mt-3 font-Jost text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-base md:mt-5 md:text-lg lg:mx-0">
                            Cold deserts are farther from the equator than hot
                            deserts. Though they are very dry, the main reason
                            they have few plants is that it is so cold there.
                            They have mildly hot summers and extremely cold
                            winters.
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
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
                        src={DesertType1}
                        alt=""
                    />
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
                        src={DesertType2}
                        alt=""
                    />
                </div>
            </div>
             
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Types of Desert
                        </h2>
                        <p className="mt-4 text-gray-500">
                            A hot desert has very high temperature during the
                            day, but nights are quite cold, sometimes freezing
                            cold. There is very little or no rainfall. There is
                            no cold season in the hot deserts.
                        </p>
                        <p className="mt-4 text-gray-500">
                            Cold deserts are farther from the equator than hot
                            deserts. Though they are very dry, the main reason
                            they have few plants is that it is so cold there.
                            They have mildly hot summers and extremely cold
                            winters.
                        </p>
                        <div className="grid grid-cols-2 grid-rows-2 py-8 gap-2 sm:gap-4 lg:gap-2">
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#videoModal"
                            >
                                {videoBtn()}
                            </div>
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#audioModal"
                            >
                                {audioBtn()}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 lg:gap-2">
                        <img className="rounded-lg" src={DesertType1} alt="" />
                        <img className="rounded-lg" src={DesertType2} alt="" />
                    </div>
                </div>
            </div>
              */}

      <VideoPlayer />
      <AudioPlayer />
    </>
  );
};

export default DesertTypes;
