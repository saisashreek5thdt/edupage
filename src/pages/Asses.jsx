import React, { useEffect, useState } from "react";
import userIcon from "../assets/images/user/userIcon.png";
import startbutton from "../assets/assess/start-button.svg";
// import bgImage from "../assets/assess/bg-image.svg";
import bgImage from "../assets/bg/activity__bg.png";
import newbg from "../assets/assess/newbg.svg";

import qBanner from "../assets/assess/questions-banner.svg";
import nextImage from "../assets/assess/next-img.svg";

import allquestion from "./questions.json";

import clickSound from "../assets/audio/click.wav";

// import { addMcqAnswers } from "../action/mcqAction";
import ScoreBoard from "./ScoreBoard";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addMcqAnswers } from "../action/mcqAction";

import MenuBtn from "./MenuBtn";

function Asses() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [zoomLevel, setZoomLevel] = useState(1);
  const dots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [show, setShow] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const clickAudio = new Audio(clickSound);

  useEffect(() => {
    const zoomInterval = setInterval(() => {
      setZoomLevel((prevZoomLevel) => (prevZoomLevel === 1 ? 1.05 : 1));
    }, 500);

    return () => clearInterval(zoomInterval);
  }, []);

  const handleShow = () => {
    setShow(true);
  };

  const questions = allquestion.questions;

  const handleNextQuestion = () => {
    if (selectedOptionIndex != null) {
      setSelectedOptionIndex(null);
      setShowResult(false);
      // setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

      if (currentQuestionIndex === questions.length - 1) {
        // navigate("/page/desert/assesment/scoreboard");
        navigate("/page/desert/assesment2");
      } else {
        setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
      }
    }
    // if (currentQuestionIndex === questions.length - 1) {
    //   console.log("goto mcq page");
    //   navigate("/page/desert/assesment2");
    // }
  };

  const renderOptions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return currentQuestion.options.map((option, index) => {
      const isSelected = selectedOptionIndex === index;
      const isCorrect = currentQuestion.correctAnswerIndex === index;
      let optionClass = "cursor-pointer text-white";
      if (showResult) {
        if (isSelected && isCorrect) {
          // select and correct
          optionClass += " bg-green-500";
        } else if (isSelected && !isCorrect) {
          // select and wrong
          optionClass += " bg-orange-500";
        } else if (!isSelected && isCorrect) {
          // not select and correct
          optionClass += " bg-green-500";
        }
      }

      const handleOptionClick = (optionIndex) => {
        if (!showResult) {
          setSelectedOptionIndex(optionIndex);
          setShowResult(true);
          clickAudio.play();

          dispatch(
            addMcqAnswers({
              questionId: currentQuestion.id,
              answer: currentQuestion.options[optionIndex],
            })
          );
        }
      };

      return (
        <label
          key={index}
          className={`flex items-center bg-white text-gray-900 rounded-full shadow-xl p-2 px-4 ${optionClass}`}
        >
          <input
            type="radio"
            className="mr-2 text-cyan-500 "
            name="option"
            checked={isSelected}
            onChange={() => handleOptionClick(index)}
          />
          <span className="text-md">{option}</span>
        </label>
      );
    });
  };

  return (
    <>
      <div
        className="bg-slate-500 w-screen h-screen"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      >
        <MenuBtn />
        <div className="w-screen flex justify-between flex-col h-40 ">
          <h1 className="pt-4 pl-4 md:pt-0 md:pl-16 text-4xl">
            Assessment : 1
          </h1>
          <div className="  mb-4 text-md ml-14 bg-sky-200 inline w-[350px] px-0 relative bottom-16 left-2">
            <button className="bg-purple-200 my-[3px] px-1 ml-[2px] rounded-md 1 mr-2 font-Linotte">
              MCQ
            </button>
            <button> I &emsp; True/False &emsp;</button>
            <button> I &emsp; Choose right answer</button>
          </div>
        </div>

        <div className="flex w-screen justify-center items-center flex-col h-96 relative ml-14 top-0">
          <img
            src={qBanner}
            alt="Current Image"
            className="object-full w-800 h-auto m-3"
          />
          <div className="absolute top-52 mr-28">
            <img
              src={nextImage}
              alt="Next Button"
              onClick={handleNextQuestion}
              className={`object-contain w-36 h-36 m-3 rounded-full transition-transform duration-1000`}
            />
          </div>
          <div className=" flex absolute bottom-[413px] mr-28 pr-2">
            {dots.map((i) => (
              <p
                className={`mx-2 p-2 rounded-full z-50 shadow-2xl ${
                  questions[currentQuestionIndex].id === i + 1
                    ? "bg-green-500"
                    : "bg-white"
                }`}
              />
            ))}
          </div>
          {/* <div className="flex flex-col  absolute w-[600px] top-2 left-[340px] "> */}
          <div className="flex flex-col absolute w-[600px] top-2 left-[47%] transform -translate-x-1/2">
            <h2 className="text-3xl text-center text-gray-700 pb-8">
              {questions[currentQuestionIndex].id}.{" "}
              {questions[currentQuestionIndex].question}
            </h2>
            <ul className="text-gray-600 grid grid-cols-2 gap-8">
              {renderOptions()}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Asses;
