import React from "react";

import DesertBg4 from "../assets/images/Oasis.png";
import { videoBtn, audioBtn } from "../pages/Btns";
import AudioPlayer from "./AudioPlayer";

import MenuBtn from "./MenuBtn";
import VideoPlayer from "./VideoPlayer";

const OasisInfo = () => {
  return (
    <>
      <MenuBtn />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-Linotte text-gray-900">
              Oasis
            </h1>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-justify">
              Oasis is a natural source of water in a desert. A fertile place in
              a desert where water comes up to the surface from deep
              underground.
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-justify">
              Trees and other plants grow around an oasis, and animals come to
              drink, eat the plants, and find shade. Oases vary in size, ranging
              from about 1 hectare (2.5 acres) around small springs to vast
              areas of naturally watered or irrigated land.
            </p>
            <p className="mb-8 leading-relaxed font-Linotte font-medium text-justify">
              Popular deserts of the world <br />
              <ol className="list-decimal mx-10 py-3">
                <li>Thar desert – India - Hot</li>
                <li>Namib Desert – Africa - Cold</li>
                <li>Atacama Desert – South America - Hot</li>
                <li>Sahara Desert – Africa - Hot</li>
                <li>Gobi Desert – China/Mongolia - Cold</li>
                <li>Mojave Desert – Nevada/California</li>
                <li>Antarctic Desert – Antarctica</li>
                <li>Sonoran Desert – USA/Mexico</li>
              </ol>
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
              src={DesertBg4}
            />
          </div>
        </div>
      </section>
      <VideoPlayer />
      <AudioPlayer />
    </>
  );
};

export default OasisInfo;
