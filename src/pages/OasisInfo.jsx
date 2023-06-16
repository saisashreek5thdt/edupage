import React, { useState } from "react";

import DesertBg4 from "../assets/images/Oasis.png";
import { videoBtn, audioBtn } from "../pages/Btns";
import AudioPlayer from "./AudioPlayer";
import didYouKnow from "../assets/icons/Group 7345.png";

import MenuBtn from "./MenuBtn";
import VideoPlayer from "./VideoPlayer";
import OasisModalBox from "./OasisModalBox";
import Footer from "./Footer";

import ReactAudioPlayer from "react-audio-player";
import audio1 from "../assets/audio/audio1.mp3";
import Audio from "./Audio";

const OasisInfo = () => {
  const [clickedImg, setClickedImg] = useState(false);

  const handleClick = () => {
    setClickedImg(true);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <>
      <section className="text-gray-600 body-font h-[632px] overflow-y-hidden">
        <MenuBtn />
        <div className=" h-[85vh] mx-auto flex px-24  md:flex-row flex-col items-center">
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
            <div className="z-0 pt-0  sm:flex sm:justify-center lg:justify-start">
              <div
                className="rounded-md shadow cursor-pointer mr-4"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
              >
                {videoBtn()}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 cursor-pointer">
                {/* {audioBtn()} */}

                <div onClick={handlePlayPause}>
                  <Audio isPlaying={isPlaying} />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative h-4 bottom-72 left-8 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover h-80 object-center rounded"
              alt="desert-info"
              src={DesertBg4}
            />
            <img
              className=" cursor-pointer relative object-cover h-52 top-3 object-center rounded"
              alt="desert-info"
              onClickCapture={() => handleClick()}
              src={didYouKnow}
            />
          </div>
          {clickedImg && <OasisModalBox setClickedImg={setClickedImg} />}
        </div>
      </section>
      <VideoPlayer />
      {/* <AudioPlayer /> */}
      {isPlaying && <ReactAudioPlayer src={audio1} autoPlay />}
      <div className="absolute bottom-5">
        <Footer
          last={"/page/desert/habitat/"}
          next={"/page/desert/sanddunes/"}
          hidePageBtn={false}
        />
      </div>
    </>
  );
};

export default OasisInfo;
