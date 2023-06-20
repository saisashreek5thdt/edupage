import React, { useState } from "react";
import { useDispatch } from "react-redux";
import questions from "./asses2questions.json";
import brownCamel from "../assets/icons/Camel__brown.png";
import redCamel from "../assets/icons/Camel__red.png";
import greenCamel from "../assets/icons/Camel__green.png";
import trueBtn from "../assets/buttons/Btn__true.png";
import falseBtn from "../assets/buttons/Btn__false.png";
import { addTrueOrFalse } from "../action/mcqAction";
import { useNavigate } from "react-router-dom";
import clickSound from "../assets/audio/click.wav";
import MenuBtn from "./MenuBtn";

const Assess2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickAudio = new Audio(clickSound);

  const [answers, setAnswers] = useState([]);

  const handleAnswerSelection = (questionId, answer) => {
    const updatedAnswers = answers.filter((a) => a.id !== questionId);
    setAnswers([...updatedAnswers, { id: questionId, answer }]);
    clickAudio.play();
  };

  console.log(answers);

  const handleNextClick = () => {
    answers.forEach((answer) => {
      dispatch(addTrueOrFalse(answer));
    });
    navigate("/page/desert/assesment3");
  };

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
          {questions.asses2questions.map((q) => {
            const answeredQuestion = answers.find((a) => a.id === q.id);
            const userAnswer = answeredQuestion
              ? answeredQuestion.answer
              : null;
            const camelImage =
              userAnswer === q.trueOrFalse
                ? greenCamel
                : userAnswer === null
                ? brownCamel
                : redCamel;

            return (
              <div key={q.id} className="flex justify-start mt-5 gap-4 ">
                <img alt="camel_logo" src={camelImage} className="h-12" />

                <p className="w-[72vw] mt-2 ml-4 text-3xl">{q.question}</p>

                <button onClick={() => handleAnswerSelection(q.id, true)}>
                  <img alt="true_button" src={trueBtn} className="w-32 h-12" />
                </button>

                <button onClick={() => handleAnswerSelection(q.id, false)}>
                  <img
                    alt="false_button"
                    src={falseBtn}
                    className="w-32 h-12"
                  />
                </button>
              </div>
            );
          })}
        </div>
        <button
          className="text-end bg-green-500 p-3 w-fit"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Asses2;
