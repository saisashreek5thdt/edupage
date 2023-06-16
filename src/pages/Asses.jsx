// import React from "react";
// import userIcon from "../assets/images/user/userIcon.png";

// import startbutton from "../assets/assess/start-button.svg";
// import bgImage from "../assets/assess/bg-image.svg";

// function Asses() {
//   return (
//     <div
//       className="bg-slate-500 w-screen h-screen"
//       style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
//     >
//       <div className="w-screen flex justify-between h-44 ">
//         <h1 className="pt-4 pl-4 md:pt-16 md:pl-16 text-2xl">
//           Assess Your Mindset
//         </h1>
//         <img
//           src={userIcon}
//           alt="Current Image"
//           className="object-contain w-16 h-16 m-3 rounded-full mr-10"
//         />
//       </div>

//       <div className="flex w-screen justify-center items-center flex-col h-72 ">
//         <div className="bg-gray-200 text-center pt-10 pb-10 text-2xl rounded-xl items-center flex flex-col w-fit h-700 h-screen shadow-xl">
//           <h1>GROWING A GROWTH MINDSET</h1>
//           <h3 className="pt-6 text-2xl">
//             Are You Ready for a Positivity Change
//           </h3>
//           <h3 className="pt-6 text-xl text-center w-3/4">
//             Our mindset decides if our character, intelligent and creative
//             abilities are either are either fixed or can be changed
//           </h3>
//           <img
//             src={startbutton}
//             alt="startbutton"
//             className="object-contain absolute w-40 h-40 m-3 rounded-full mr-10 top-1/2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Asses;
// import React, { useEffect, useState } from "react";
// import userIcon from "../assets/images/user/userIcon.png";
// import startbutton from "../assets/assess/start-button.svg";
// import bgImage from "../assets/assess/bg-image.svg";

// import newbg from "../assets/assess/newbg.svg";

// function Asses() {
//   const [zoomLevel, setZoomLevel] = useState(1);

//   useEffect(() => {
//     const zoomInterval = setInterval(() => {
//       setZoomLevel((prevZoomLevel) => (prevZoomLevel === 1 ? 1.2 : 1));
//     }, 2000);

//     return () => clearInterval(zoomInterval);
//   }, []);

//   return (
//     <div
//       className="bg-slate-500 w-screen h-screen"
//       style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
//     >
//       <div className="w-screen flex justify-between h-44 ">
//         <h1 className="pt-4 pl-4 md:pt-16 md:pl-16 text-2xl">
//           Assess Your Mindset
//         </h1>
//         <img
//           src={userIcon}
//           alt="Current Image"
//           className="object-contain w-16 h-16 m-3 rounded-full mr-10"
//         />
//       </div>
//       {/*
//       <div className="flex w-screen justify-center items-center flex-col h-80 ">
//         <div className="bg-white text-center pt-10 pb-20 text-2xl rounded-xl items-center flex flex-col w-fit h-700 h-screen shadow-xl relative">
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
//             <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 ">
//               <div className="h-6 w-96 bg-indexLine rounded-xl"></div>
//             </div>
//           </div>

//           <h1>GROWING A GROWTH MINDSET</h1>
//           <h3 className="pt-6 text-2xl">
//             Are You Ready for a Positivity Change
//           </h3>
//           <h3 className="pt-6 text-xl text-center w-3/4">
//             Our mindset decides if our character, intelligence, and creative
//             abilities are fixed or can be changed.
//           </h3>
//           <div className="absolute top-56">
//             <img
//               src={startbutton}
//               alt="startbutton"
//               className="object-contain w-40 h-40 m-3 rounded-full"
//             />
//           </div>
//         </div> */}

//       <div className="flex w-screen justify-center items-center flex-col h-80 relative">
//         <img
//           src={newbg}
//           alt="Current Image"
//           className="object-full w-800 h-auto m-3"
//         />
//         <div className="absolute top-56">
//           <img
//             src={startbutton}
//             alt="startbutton"
//             className={`object-contain w-40 h-40 m-3 rounded-full transform scale-${zoomLevel}`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Asses;
import React, { useEffect, useState } from "react";
import userIcon from "../assets/images/user/userIcon.png";
import startbutton from "../assets/assess/start-button.svg";
import bgImage from "../assets/assess/bg-image.svg";
import newbg from "../assets/assess/newbg.svg";

import qBanner from "../assets/assess/questions-banner.svg";
import nextImage from "../assets/assess/next-img.svg";

import allquestion from "./questions.json";

function Asses() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const dots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [show, setShow] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

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
  console.log(questions);

  const handleOptionClick = (optionIndex) => {
    if (!showResult) {
      setSelectedOptionIndex(optionIndex);
      setShowResult(true);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOptionIndex != null) {
      setSelectedOptionIndex(null);
      setShowResult(false);
      setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    }
  };

  const renderOptions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return currentQuestion.options.map((option, index) => {
      const isSelected = selectedOptionIndex === index;
      const isCorrect = currentQuestion.correctAnswerIndex === index;
      let optionClass = "cursor-pointer text-white";
      if (showResult) {
        if (isSelected && isCorrect) {
          //select and correct
          optionClass += " bg-green-500";
        } else if (isSelected && !isCorrect) {
          // select and wrong
          optionClass += " bg-orange-500";
        } else if (!isSelected && isCorrect) {
          // not select and correct
          optionClass += " bg-green-500";
        }
      }
      return (
        <>
          <label
            className={`bg-white text-gray-900 rounded-full shadow-xl p-2 px-4 ${optionClass} `}
          >
            <input
              type="radio"
              className={optionClass}
              id="radio"
              key={index}
              name="option"
              onClick={() => handleOptionClick(index)}
            />
            <span className="pl-4 text-md">{option}</span>
          </label>
        </>
      );
    });
  };

  return (
    <div
      className="bg-slate-500 w-screen h-screen"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <div className="w-screen flex justify-between h-44 ">
        <h1 className="pt-4 pl-4 md:pt-16 md:pl-16 text-2xl">Assessment</h1>
        <img
          src={userIcon}
          alt="User Icon"
          className="object-contain w-16 h-16 m-3 rounded-full mr-10"
        />
      </div>

      {show ? (
        <div className="flex w-screen justify-center items-center flex-col h-96 relative ml-14 top-4">
          <img
            src={qBanner}
            alt="Current Image"
            className="object-full w-800 h-auto m-3"
          />
          <div className="absolute top-52 left-[557px]">
            <img
              src={nextImage}
              alt="Next Button"
              onClick={handleNextQuestion}
              className={`object-contain w-36 h-36 m-3 rounded-full transition-transform duration-1000`}
            />
          </div>
          <div className=" flex absolute bottom-[413px] left-[475px]">
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
          <div className="flex flex-col  absolute w-[600px] top-2 left-[340px] ">
            <h2 className="text-3xl text-center text-gray-700 pb-8">
              {questions[currentQuestionIndex].id}.{" "}
              {questions[currentQuestionIndex].question}
            </h2>
            <ul className="text-gray-600 grid grid-cols-2 gap-8">
              {renderOptions()}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex w-screen justify-center items-center flex-col h-80 relative">
          <img
            src={newbg}
            alt="Current Image"
            className="object-full w-800 h-auto m-3"
          />
          <div className="absolute top-60 left-[615px]">
            <img
              src={startbutton}
              alt="Start Button"
              onClick={handleShow}
              className={`object-contain w-36 h-36 m-3 rounded-full transition-transform duration-1000 ${
                zoomLevel === 1.05 ? "scale-125" : ""
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Asses;
