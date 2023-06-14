import React from "react";
import MenuBtn from "./MenuBtn";
import Vege1 from "../assets/images/vegetation/vege1.png";
import Vege2 from "../assets/images/vegetation/vege2.png";
import Vege3 from "../assets/images/vegetation/vege3.png";

import { videoBtn, audioBtn } from "../pages/Btns";

import AudioPlayer from "./AudioPlayer";
import VideoPlayer from "./VideoPlayer";

const Vegetation = () => {
    return (
        <>
            <MenuBtn />
            <div className="flex-auto w-full">
                <h1 className="flex flex-row mx-44 text-gray-800 font-semibold text-lg md:text-lg lg:text-4xl">
                    Vegetation
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly my-10">
                <div>
                    <img className="h-60" src={Vege1} alt="" />
                </div>
                <div>
                    <img className="h-60" src={Vege2} alt="" />
                </div>
                <div>
                    <img className="h-60" src={Vege3} alt="" />
                </div>
            </div>
            <div className="flex flex-row flex-grow mt-6 mx-44">
                <p className="text-gray-800 font-semibold text-justify text-base md:text-xl">
                    Desert environments are so dry that they support only
                    extremely sparse vegetation; trees are usually absent and,
                    under normal climatic conditions, shrubs or herbaceous
                    plants provide only very incomplete ground cover. In desert
                    water is lost due to evaporation as the transpiration rate
                    is more than precipitation. Most of the Desert plants are
                    salt and drought tolerant. They store water in their stems,
                    roots and leaves.
                </p>
            </div>
            <div className="flex flex-row flex-grow mt-6 mx-44">
                <p className="text-gray-800 font-semibold text-justify text-base md:text-xl">
                    Desert vegetation is found in Central and South-West Asia.
                    Arabian desert, Thar desert, Gobi desert are some of the
                    deserts of Asia. Cacti and Acacia are the most common
                    vegetation found in desert regions. Agricultural production
                    is mainly from kharif crops, which are grown in the summer
                    season and seeded in June and July. These are then harvested
                    in September and October and include bajra, pulses such as
                    guar, jowar (Sorghum vulgare), maize (zea mays), sesame and
                    groundnuts.
                </p>
            </div>
            <div className="flex flex-wrap mt-6 mx-36">
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
            <VideoPlayer />
            <AudioPlayer />
        </>
    );
};

export default Vegetation;
