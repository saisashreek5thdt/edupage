import React from "react";
import questions from "./asses2questions.json";
import brownCamel from "../assets/icons/Camel__brown.png";
import redCamel from "../assets/icons/Camel__red.png";
import trueBtn from "../assets/buttons/Btn__true.png";
import falseBtn from "../assets/buttons/Btn__false.png";
import MenuBtn from "./MenuBtn";

const Asses2 = () => {
  return (
    <div className="bg-cover absolute top-0 text-gray-700 bg-center h-screen w-screen bg-asses2_image">
      <MenuBtn />
      <div className="flex flex-col absolute top-8 mx-24 my-14">
        <div className="text-4xl pb-1 pl-6 ">Assessment : 2</div>
        <div className=" mt-2 mb-4 text-md ml-7 bg-sky-200 inline w-[240px] px-0 relative left-2">
          <button className="bg-purple-200 my-[3px] px-1 ml-[2px] rounded-md 1 mr-2">
            True/False
          </button>
          <button> I &emsp; Fill in the blanks</button>
        </div>
        <div className="flex flex-col">
          {questions.asses2questions.map((q) => (
            <div key={q.id} className="flex justify-start mt-5 gap-4 ">
              <img
                alt="camel_logo"
                src={q.id == 1 ? redCamel : brownCamel}
                className="h-12"
              />
              <p className="w-[72vw] mt-2 ml-4 text-3xl">{q.question}</p>
              <img alt="true_button" src={trueBtn} className="w-32 h-12" />
              <img alt="false_button" src={falseBtn} className="w-32 h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asses2;
