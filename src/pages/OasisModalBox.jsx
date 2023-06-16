import React from "react";
import img1 from "../assets/images/oasis/indian-men-resting-by-bonfire-with-their-camel.png";
import img2 from "../assets/images/oasis/wooden-house-poor-people.png";
import img3 from "../assets/images/oasis/young-european-tourist-girl-with-purple-berber-scarf-merzouga-desert.png";

const OasisModalBox = ({ setClickedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay  dismiss z-50" onClick={handleClick}>
        <div
          className="mainContainer bg-orange-200
         px-5 py-10 pb-16 rounded-3xl h-[1100px]  w-[30%]"
        >
          <div className="flex w-full">
            <div className="w-[60%] ">
              <img alt="" className="mb-2" src={img1} />
              <img alt="" src={img2} />
            </div>
            <img className="h-[250px] w-[40%] ml-2" alt="" src={img3} />
          </div>
          <div className="pt-10 pb-7 text-3xl ">
            Adaptations of humans in deserts
          </div>
          <div className="mb-10">
            Man inhabits almost every patch of land available to him. He cannot
            choose the climate; he can only adapt himself, up to a certain
            degree. Changes in terms of clothing, shelter, food-seeking and the
            nature of the tribe have evolved over time.
          </div>
        </div>

        <span className="dismiss overlaySpan" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
};

export default OasisModalBox;
