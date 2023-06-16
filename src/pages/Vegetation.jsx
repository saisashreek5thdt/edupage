import React from "react";
import veg1 from "../assets/images/vegetation/vege1.png";
import veg2 from "../assets/images/vegetation/vege2.png";
import veg3 from "../assets/images/vegetation/vege3.png";
// import veg1 from "../assets/images/vegetation/close-up-view-combine-harvester-pouring-tractortrailer-with-grain-during-harvesting (1).png";
// import veg2 from "../assets/images/vegetation/millet-sorghum-field-feed-livestock.png";
// import veg3 from "../assets/images/vegetation/taking-peanuts-from-stock-grocery-high-quality-photo.png";
// import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import { audioBtn, videoBtn } from "./Btns";
import Footer from "./Footer";
import MenuBtn from "./MenuBtn";

function Vegetation() {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div className="w-screen flex justify-between">
        <h1 className="pt-3 pl-3 md:pt-14 md:pl-16 text-3xl">Vegetation</h1>
        <MenuBtn />
      </div>

      <div className="mx-32">
        <div className="flex ">
          <img src={veg1} alt="Current Image" className="w-1/3 p-4" />{" "}
          <img src={veg2} alt="Current Image" className="w-1/3 p-4" />{" "}
          <img src={veg3} alt="Current Image" className="w-1/3 p-4" />
        </div>

        <p className="text-lg pl-4 pt-3 text-gray-500">
          Desert environments are so dry that they support only extremely sparse
          vegetation; trees are usually absent and, under normal climatic
          conditions, shrubs or herbaceous plants provide only very incomplete
          ground cover. In desert water is lost due to evaporation as the
          transpiration rate is more than precipitation. Most of the Desert
          plants are salt and drought tolerant. They store water in their stems,
          roots and leaves.{" "}
        </p>

        {/* <br /> */}

        <p className="text-lg pl-4  pt-3 text-gray-500">
          Desert vegetation is found in Central and South-West Asia. Arabian
          desert, Thar desert, Gobi desert are some of the deserts of Asia.
          Cacti and Acacia are the most common vegetation found in desert
          regions. Agricultural production is mainly from kharif crops, which
          are grown in the summer season and seeded in June and July. These are
          then harvested in September and October and include bajra, pulses such
          as guar, jowar (Sorghum vulgare), maize (zea mays), sesame and
          groundnuts.{" "}
        </p>

        <div className="sm:flex sm:justify-center lg:justify-start">
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

      <div>
        <Footer
          last={"/page/desert/sanddunes/"}
          next={"/page/desert/trivia/"}
          hidePageBtn={false}
        />
      </div>
    </div>
  );
}

export default Vegetation;
