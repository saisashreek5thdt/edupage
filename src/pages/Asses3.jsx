import React, { useState } from "react";
import { useDispatch } from "react-redux";
import questions from "./asses3questions.json";
import brownCamel from "../assets/icons/Camel__brown.png";

import redCamel from "../assets/icons/Camel__red.png";
import greenCamel from "../assets/icons/Camel__green.png";

import nextBtn from "../assets/buttons/NXT_Btn.png";
import submitBtn from "../assets/buttons/Submit_Btn.png";

import { addDropDown } from "../action/mcqAction";
import { useNavigate } from "react-router-dom";
import MenuBtn from "./MenuBtn";
import clickSound from "../assets/audio/click.wav";

const Asses3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState([]);
  const clickAudio = new Audio(clickSound);

  const renderOptions = (options) => {
    return options.map((op, index) => (
      <option key={index} className="rounded-xl">
        {op}
      </option>
    ));
  };

  const handleOptionSelection = (questionId, selectedOption) => {
    const answeredQuestion = answers.find((a) => a.id === questionId);
    clickAudio.play();
    if (answeredQuestion) {
      const updatedAnswers = answers.map((a) =>
        a.id === questionId ? { ...a, answer: selectedOption } : a
      );
      setAnswers(updatedAnswers);
    } else {
      setAnswers([...answers, { id: questionId, answer: selectedOption }]);
    }
  };

  const handleClick = () => {
    answers.forEach((answer) => {
      dispatch(addDropDown(answer));
    });

    setAnswers([]);

    navigate("/page/desert/assesment4");
  };

  // const isNextButtonDisabled =
  // answers.length !== questions.asses3questions.length;
  const isNextButtonDisabled = answers.length < 1;

  return (
    <div className="bg-cover absolute top-0 text-gray-700 bg-center h-screen w-screen bg-asses2_image">
      <MenuBtn />
      <div className="flex flex-col mx-24 my-4">
        <div className="text-4xl pb-1 pl-6 ">Assessment : 3</div>
        <div className=" mt-2 mb-4 text-md ml-7 bg-sky-200 inline w-[330px] relative left-2">
          <button className="bg-purple-200 my-[3px] px-1 ml-[4px] rounded-md ">
            Choose right answer
          </button>
          &emsp;
          <button className=" my-[3px] px-1 ml-[4px] rounded-md ">
            I &emsp; Fill in the blanks
          </button>
        </div>
        <h3 className="mb-2 mt-4 text-4xl">Choose the correct answer</h3>
        <div className="flex flex-col">
          {questions.asses3questions.map((q) => {
            const answeredQuestion = answers.find((a) => a.id === q.id);
            const selectedOption = answeredQuestion
              ? answeredQuestion.answer
              : "";
            const camelImage =
              selectedOption === q.options[q.correctAnswerIndex]
                ? greenCamel
                : selectedOption === ""
                ? brownCamel
                : redCamel;

            return (
              <div
                key={q.id}
                className="flex justify-start mt-2 gap-2 flex-grow"
              >
                <img alt="camel_logo" src={camelImage} className="w-16" />

                <p className="w-[72vw] mt-2 ml-4 text-[27px] flex-1">
                  {q.Piece1}
                  <select
                    className="mx-3 border-none rounded-md"
                    value={selectedOption}
                    onChange={(e) =>
                      handleOptionSelection(q.id, e.target.value)
                    }
                  >
                    <option>Select</option>
                    {renderOptions(q.options)}
                  </select>
                  {q.Piece2}
                </p>
              </div>
            );
          })}
        </div>

        <button
          className="flex mt-16 justify-end"
          disabled={isNextButtonDisabled}
          onClick={handleClick}
        >
          <img src={nextBtn} alt="next" className="h-12 w-32 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Asses3;
