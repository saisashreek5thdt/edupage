import React from "react";

import { videoBtn, audioBtn } from "../pages/Btns";
import MenuBtn from "./MenuBtn";

import Gal1 from "../assets/images/gallery/gallery-1.png";
import Gal2 from "../assets/images/gallery/gallery-2.png";
import Gal3 from "../assets/images/gallery/gallery-3.png";
import Gal4 from "../assets/images/gallery/gallery-4.png";
import Gal5 from "../assets/images/gallery/gallery-5.png";
import Gal6 from "../assets/images/gallery/gallery-6.png";
import Gal7 from "../assets/images/gallery/gallery-7.png";
import Gal8 from "../assets/images/gallery/gallery-8.png";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import Footer from "./Footer";

const galleryImgs = [
  {
    id: 1,
    imgSrc: Gal1,
    alt: "desert images",
  },
  {
    id: 2,
    imgSrc: Gal2,
    alt: "desert images",
  },
  {
    id: 3,
    imgSrc: Gal3,
    alt: "desert images",
  },
  {
    id: 4,
    imgSrc: Gal4,
    alt: "desert images",
  },
  {
    id: 5,
    imgSrc: Gal5,
    alt: "desert images",
  },
  {
    id: 6,
    imgSrc: Gal6,
    alt: "desert images",
  },
  {
    id: 7,
    imgSrc: Gal7,
    alt: "desert images",
  },
  {
    id: 8,
    imgSrc: Gal8,
    alt: "desert images",
  },
];

const HabitatInfo = () => {
  return (
    <>
      <section className="text-gray-600 body-font h-[94.5vh] overflow-y-hidden">
        <MenuBtn />
        <div className="container  mx-auto flex px-5 pb-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:relative lg:bottom-28 md:w-1/2 lg:pr-36 md:pr-16 flex flex-col md:items-start md:text-left pb-20 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-normal w-4/5 font-Linotte text-gray-900">
              Habitat
            </h1>
            <p className="mb-3 leading-relaxed font-Linotte font-medium text-left">
              Despite such extremes in temperature and precipitation amounts,
              animal life as large as camels and snow leopards inhabits the
              region. The desert is also home to small rodents, such as jerboas.
              Such small mammals serve as food for predators such as the golden
              eagle.
            </p>
            <p className="mb-3 leading-relaxed font-Linotte font-medium text-left">
              Animals survive in deserts by living underground or resting in
              burrows during the heat of the day.
            </p>
            <p className="mb-3 leading-relaxed font-Linotte font-medium text-left">
              Desert plants and animals have features that help them survive in
              the dry climate. Some plants have special roots that help them
              absorb the small amount of water that is available.
            </p>
            <p className="mb-0 leading-relaxed font-Linotte font-medium text-left">
              Desert plants deal with water shortage as: <br />
              <ul className="list-item mx-10 py-3">
                <li>
                  i). They have very long and deep roots to get water from under
                  the ground
                </li>
                <li>
                  ii). They have thick leaves to store water and prevent loss of
                  water through transpiration
                </li>
              </ul>
            </p>
            <div className="flex lg:flex-row md:flex-col relative bottom-4">
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
          <div className="lg:max-w-md lg:w-full pb-80 md:w-1/2 w-5/6">
            <div className="grid grid-cols-2 pb-2 md:grid-cols-2 grid-rows-2 sm:gap-3 lg:gap-1 lg:pl-36 lg:mr-2">
              {galleryImgs.map((imgs) => (
                <img
                  className="w-40  object-cover object-center rounded"
                  alt={imgs.alt}
                  src={imgs.imgSrc}
                  key={imgs.id}
                />
              ))}
            </div>
            <button className="bg-blue-400 relative left-[150px] w-[285px] py-3 px-4  text-white font-medium mt-auto">
              Desert Animals and Plants
            </button>
          </div>
        </div>
        <VideoPlayer />
        <AudioPlayer />
      </section>
      <div className="relative bottom-9">
        <Footer
          last={"/page/desert/types/"}
          next={"/page/desert/oasis/info/"}
          hidePageBtn={false}
        />
      </div>
    </>
  );
};

export default HabitatInfo;
