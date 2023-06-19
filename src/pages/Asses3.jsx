import React from "react";
import questions from "./asses3questions.json";
import brownCamel from "../assets/icons/Camel__brown.png";
import redCamel from "../assets/icons/Camel__red.png";
import nextImage from "../assets/assess/next-img.svg";

const Asses3 = () => {
  const renderOptions = (options) => {
    const option = options.map((op) => (
      <option className="rounded-xl">{op}</option>
    ));
    return option;
  };
  return (
    <div className="bg-cover absolute top-0 text-gray-700 bg-center h-screen w-screen bg-asses2_image">
      <div className="flex flex-col mx-24 my-14">
        <div className="text-4xl pb-1 pl-6 ">Assessment : 3</div>
        <div className=" mt-2 mb-4 text-md ml-7 bg-sky-200 inline w-[128px] relative left-2">
          <button className="bg-purple-200 my-[3px] px-1 ml-[4px] rounded-md ">
            Fill in the blanks
          </button>
        </div>
        <h4 className="absolute left-72 text-3xl top-32">
          Deserts Are abandoned regions of the earth
        </h4>
        <h3 className="mb-2 mt-8 text-4xl">Choose the correct answer</h3>
        <div className="flex flex-col">
          {questions.asses3questions.map((q) => (
            <div
              key={q.id}
              className="flex justify-start mt-2 gap-2 flex-grow "
            >
              <img alt="camel_logo" src={brownCamel} className=" w-16 " />
              <p className="w-[72vw] mt-2 ml-4 text-[27px] flex-1">
                {q.Piece1}
                <select className="mx-3 border-none rounded-md">
                  {renderOptions(q.options)}
                </select>
                {q.Piece2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asses3;
