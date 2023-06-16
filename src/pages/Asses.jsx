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

const allQuestions = [
  {
    id: 1,
    question: "Who is making the Web Standards?",
    option1: "Mozilla",
    option2: "Microsoft",
    option3: "Opera",
    option4: "The WWW Consortium",
    rightAns: "The WWW Consortium",
  },
  {
    id: 2,
    question: "Choose the correct HTML tag for largest heading",
    option1: "Head",
    option2: "H1",
    option3: "H6",
    option4: "Heading",
    rightAns: "H1",
  },
  {
    id: 3,
    question: "Correct HTML tag for inserting a line break?",
    option1: "br /br",
    option2: "lb /",
    option3: "br /",
    option4: "br/",
    rightAns: "br/",
  },
  {
    id: 4,
    question: "Choose the correct HTML tag to make a text bold",
    option1: "bold",
    option2: "b",
    option3: "bb",
    option4: "br",
    rightAns: "b",
  },
  {
    id: 5,
    question: " HTML tag to make a text in italic",
    option1: "Italic",
    option2: "I",
    option3: "It",
    option4: "Ita",
    rightAns: "I",
  },
  {
    id: 6,
    question: " CSS stands for -",
    option1: "Cascade style sheet",
    option2: "Color and style sheets",
    option3: "Cascading style sheets",
    option4: "Cascading style sheets",
    rightAns: "Cascading style sheets",
  },
  {
    id: 7,
    question: " Are negative values allowed in padding property?",
    option1: "Yes",
    option2: "No",
    option3: "Can't say",
    option4: "May be",
    rightAns: "No",
  },
  {
    id: 8,
    question: "Which of the following is not a type of combinator?",
    option1: ">",
    option2: "~",
    option3: "+",
    option4: "*",
    rightAns: "*",
  },
  {
    id: 9,
    question: "Which type of CSS is used in the below code?",
    option1: "Inline CSS",
    option2: "Internal CSS",
    option3: "It",
    option4: "Ita",
    rightAns: "Internal CSS",
  },
  {
    id: 10,
    question: "Which CSS roperty controls the font-size?",
    option1: "font-size",
    option2: "font-style",
    option3: "text-size",
    option4: "text-style",
    rightAns: "font-style",
  },
];

function Asses() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [show, setShow] = useState(false);
  const dots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const zoomInterval = setInterval(() => {
      setZoomLevel((prevZoomLevel) => (prevZoomLevel === 1 ? 1.05 : 1));
    }, 500);

    return () => clearInterval(zoomInterval);
  }, []);

  const handleShow = () => {
    setShow(true);
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
        <div className="flex w-screen justify-center items-center flex-col h-96 relative ml-10 mt-7">
          <div className=" flex absolute bottom-[425px] left-[475px]">
            {dots.map(() => (
              <p className="mx-2 p-2 rounded-full shadow-2xl bg-green-500" />
            ))}
          </div>
          <img
            src={qBanner}
            alt="Current Image"
            className="object-full w-800 h-auto m-3 align-middle"
          />
          <div className="absolute top-[210px] rounded-full left-[555px]">
            <img
              src={nextImage}
              alt="Next Button"
              className={`object-contain w-36 h-36 m-3 transition-transform duration-1000`}
            />
          </div>
          <div className="absolute top-[-25px] flex flex-col left-[330px]  w-[44%]">
            <h2 className="text-2xl  p-4  text-gray-500 ">
              1. Are negative values allowed in padding property?
            </h2>
            <div className="text-gray-600 grid grid-cols-2 gap-6 pt-5">
              <label className="bg-white pb-3 rounded-full shadow-xl p-2 px-4">
                <input
                  type="radio"
                  className="shadow-xl "
                  id="radio"
                  name="option"
                />
                <span className="pl-4 text-md">Option 1</span>
              </label>

              <label className="bg-white pb-3 rounded-full shadow-xl p-2 px-4">
                <input
                  type="radio"
                  className="shadow-xl "
                  id="radio"
                  name="option"
                />
                <span className="pl-4 text-md">Option 2</span>
              </label>

              <label className="bg-white rounded-full shadow-xl p-2 px-4">
                <input
                  type="radio"
                  className="shadow-xl "
                  id="radio"
                  name="option"
                />
                <span className="pl-4 text-md">Option 3</span>
              </label>

              <label className="bg-white rounded-full shadow-xl p-2 px-4">
                <input
                  type="radio"
                  className="shadow-xl "
                  id="radio"
                  name="option"
                />
                <span className="pl-4 text-md">Option 4</span>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-screen justify-center items-center flex-col h-80 relative">
          <img
            src={newbg}
            alt="Current Image"
            className="object-full w-800 h-auto m-3"
          />
          <div className="absolute top-60">
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
