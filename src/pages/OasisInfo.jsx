import React, { useState } from "react";

import DesertBg4 from "../assets/images/Oasis.png";
import { videoBtn, audioBtn } from "../pages/Btns";
import AudioPlayer from "./AudioPlayer";
import didYouKnow from "../assets/icons/Group 7345.png";

import MenuBtn from "./MenuBtn";
import VideoPlayer from "./VideoPlayer";
import OasisModalBox from "./OasisModalBox";

const OasisInfo = () => {
  const [clickedImg, setClickedImg] = useState(false);

  const handleClick = () => {
    setClickedImg(true);
  };
  return (
    <>
      <MenuBtn />
      <section className="text-gray-600 body-font h-[582px] overflow-y-hidden">
        <div className=" container mx-auto flex px-24  md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-5 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
            <h1 className="title-font font-normal sm:text-4xl text-3xl mb-4  font-Linotte text-gray-900">
              Oasis
            </h1>
            <p className="mb-4 leading-relaxed font-Linotte font-medium  text-left">
              Oasis is a natural source of water in a desert. A fertile place in
              a desert where water comes up to the surface from deep
              underground. Trees and other plants grow around an oasis, and
              animals come to drink, eat the plants, and find shade. Oases vary
              in size, ranging from about 1 hectare (2.5 acres) around small
              springs to vast areas of naturally watered or irrigated land.
            </p>
            <p className="mb-1 leading-relaxed font-Linotte font-medium  text-left">
              Popular deserts of the world <br />
              <ol className="list-decimal mx-10 py-3">
                <li>&emsp; &emsp; Thar desert – India - Hot</li>
                <li>&emsp; &emsp; Namib Desert – Africa - Cold</li>
                <li>&emsp; &emsp; Atacama Desert – South America - Hot</li>
                <li>&emsp; &emsp; Sahara Desert – Africa - Hot</li>
                <li>&emsp; &emsp; Gobi Desert – China/Mongolia - Cold</li>
                <li>&emsp; &emsp; Mojave Desert – Nevada/California</li>
                <li>&emsp; &emsp; Antarctic Desert – Antarctica</li>
                <li>&emsp; &emsp; Sonoran Desert – USA/Mexico</li>
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
          <div className=" relative h-6 bottom-72 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="desert-info"
              src={DesertBg4}
            />
            <img
              className=" cursor-pointer relative object-cover h-52 top-8 object-center rounded"
              alt="desert-info"
              onClickCapture={() => handleClick()}
              src={didYouKnow}
            />
          </div>
          {clickedImg && <OasisModalBox setClickedImg={setClickedImg} />}
        </div>
      </section>
      <VideoPlayer />
      <AudioPlayer />
    </>
  );
};

export default OasisInfo;
