import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import questions from "./asses3questions.json";
import questions from "./asses4questions.json";

import nextBtn from "../assets/buttons/NXT_Btn.png";

import { addDropDown } from "../action/mcqAction";
import { useNavigate } from "react-router-dom";
import MenuBtn from "./MenuBtn";

const Asses4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [answer, setAnswer] = useState([]);

  const handleClick = () => {
    // answers.forEach((answer) => {
    //   dispatch(addDropDown(answer));
    // });

    // setAnswers([]);

    navigate("/page/desert/assesment/scoreboard");
  };

  //   const isNextButtonDisabled =
  //     answers.length !== questions.asses4questions.length;

  return (
    <div className="bg-cover absolute top-0 text-gray-700 bg-center h-screen w-screen bg-asses2_image">
      <MenuBtn />
      <div className="flex flex-col mx-24 my-4">
        <div className="text-4xl pb-1 pl-6 ">Assessment : 4</div>
        <div className=" mt-2 mb-4 text-md ml-7 bg-sky-200 inline w-[129px] relative left-2">
          <button className="bg-purple-200 my-[3px] px-1 ml-[4px] rounded-md ">
            Fill in the blanks
          </button>
        </div>
        <h3 className="mb-2 mt-4 text-4xl">Drag and drop the correct answer</h3>
        <div className="grid grid-cols-2  text-2xl w-[460px] gap-1 relative my-2 left-80">
          <p className="hover:bg-yellow-400 p-1"> A. hot and dry desert</p>
          <p className="hover:bg-yellow-400 p-1 w-48"> B. coastal desert</p>
          <p className="hover:bg-yellow-400 p-1 w-56"> C. semi- arid desert</p>
          <p className="hover:bg-yellow-400 p-1 w-44"> D. cold desert</p>
        </div>
        <div className="flex flex-col">
          {questions.asses4questions.map((q) => {
            return (
              <div key={q.id} className="flex justify-start mt-2  flex-grow">
                <input
                  type="text"
                  placeholder=""
                  className="text-2xl overflow-x-hidden hover:outline-none w-56 py-0 align-bottom  border-b-gray-600 focus:ring-0  outline-transparent  border-b-2 border-x-0  border-t-0 bg-transparent"
                />
                <p className="w-[72vw] mt-2 ml-4 text-[27px] flex-1">
                  {q.question}
                </p>
              </div>
            );
          })}
        </div>
        <button
          className="flex mt-16 justify-end"
          //   disabled={isNextButtonDisabled}
          onClick={handleClick}
        >
          <img src={nextBtn} alt="next" className="h-12 w-32 cursor-pointer" />
        </button>
        {/* <div className="flex mt-8 justify-end">
          <img
            src={nextBtn}
            alt="next"
            className="h-12 w-32 cursor-pointer"
            onClick={handleClick}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Asses4;
