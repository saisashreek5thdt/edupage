import React from "react";
import { useSelector } from "react-redux";
import questionsData from "./asses2questions.json";
import allquestions from "./questions.json";
import bgImage from "../assets/bg/activity__bg.png";
import asses3questions from "./asses3questions.json";
import asses4questions from "./asses4questions.json";
import submitBtn from "../assets/buttons/Submit_Btn.png";
import { useNavigate } from "react-router-dom";

function ScoreBoard() {
  const mcqs = useSelector((state) => state.mcq);
  const { mcqAnswers } = mcqs;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  const tf = useSelector((state) => state.trueorfalse);
  const { TFAnswers } = tf;

  const DD = useSelector((state) => state.dropDown);
  const { dropAnswers } = DD;

  console.log("dropAnswers", dropAnswers);

  const Drag_Drop = useSelector((state) => state.dragdrops);
  const { dragdrop } = Drag_Drop;

  console.log("dragdrop", dragdrop);

  const mcqQuestions = allquestions.questions; // mcq data
  const tfQuestions = questionsData.asses2questions; // true/false data
  const ddQuestions = asses3questions.asses3questions; // Dropdown data
  const drdQuestions = asses4questions.asses4questions; // dnd data

  console.log(drdQuestions);

  let totalCorrectAnswers = 0;

  return (
    <div
      className="scoreboard-container bg-gray-300 py-4 px-6 w-screen h-screen rounded-sm"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <h2 className="scoreboard-heading text-3xl font-semibold mb-4">
        Your Score Board
      </h2>
      <div className="shadow-md rounded-2xl   flex flex-col">
        <div className=" flex py-3 px-3 rounded-sm border-2 border-black-500 bg-gray-200 text-gray-700 font-semibold">
          <div className=" flex-1 ">Question</div>
          <div className=" flex-1">Correct Answer</div>
          <div className=" flex-1">Your Answer</div>
        </div>
        {mcqAnswers?.map((mcq) => {
          const question = mcqQuestions.find((q) => q.id === mcq.questionId);
          const correctAnswer = question.options[question.correctAnswerIndex];
          const userAnswer = mcq.answer;
          const isCorrect = userAnswer === correctAnswer;

          if (isCorrect) {
            totalCorrectAnswers++;
          }

          return (
            <div
              key={mcq.questionId}
              className={`flex p-1  text-gray-900 px-3 rounded-sm  ${
                isCorrect ? "bg-blue-200" : "bg-white"
              }`}
            >
              <div className=" flex-1 ">{question.question}</div>
              <div className=" flex-1 px-2 ">{correctAnswer}</div>
              <div className=" flex-1 px-2">{userAnswer}</div>
            </div>
          );
        })}

        {TFAnswers?.map((tfAnswer) => {
          const question = tfQuestions.find((q) => q.id === tfAnswer.id);
          const correctAnswer = question.trueOrFalse ? "True" : "False";
          const userAnswer = tfAnswer.answer ? "True" : "False";
          const isCorrect = userAnswer === correctAnswer;

          if (isCorrect) {
            totalCorrectAnswers++;
          }

          return (
            <div
              key={tfAnswer.id}
              className={`flex p-1 text-gray-700 px-3 shadow-green-500 rounded-sm ${
                isCorrect ? "bg-blue-200" : "bg-white"
              }`}
            >
              <div className=" flex-1">{question.question}</div>
              <div className=" flex-1">{correctAnswer}</div>
              <div className=" flex-1">{userAnswer}</div>
            </div>
          );
        })}

        {dropAnswers?.map((ddAnswer) => {
          const question = ddQuestions.find((q) => q.id === ddAnswer.id);

          const correctAnswer = question.options[question.correctAnswerIndex];

          const userAnswer = ddAnswer.answer;

          const isCorrect = userAnswer === correctAnswer;

          if (isCorrect) {
            totalCorrectAnswers++;
          }

          return (
            <div
              key={ddAnswer.id}
              className={`flex text-gray-700 p-1 rounded-sm  ${
                isCorrect ? "bg-blue-200" : "bg-white"
              }`}
            >
              <div className="flex-1 px-2">
                {question.Piece1}________{question.Piece2}
              </div>
              <div className="flex-1 mr-5 relative left-1">{correctAnswer}</div>
              <div className="flex-1 mr-5">{userAnswer}</div>
            </div>
          );
        })}

        {dragdrop?.map((dd) => {
          const question = drdQuestions.find((q) => parseInt(dd.id) === q.id);

          const correctAnswer = question?.correctAnswer;

          const userAnswer = dd.answer;

          const isCorrect = userAnswer === correctAnswer;

          if (isCorrect) {
            totalCorrectAnswers++;
          }

          return (
            <div
              key={dd.id}
              className={`flex text-gray-700 p-1 rounded-sm  ${
                isCorrect ? "bg-blue-200" : "bg-white"
              }`}
            >
              <div className=" flex-1">{question.question}</div>
              <div className=" flex-1">{correctAnswer}</div>
              <div className=" flex-1">{userAnswer.split(".")[1]}</div>
            </div>
          );
        })}
      </div>
      <div className="flex mx-16 mt-4  justify-between">
        <div className="total-correct-answers font-semibold text-2xl p-3 relative bottom-1">
          Total Correct Answers: {totalCorrectAnswers}
        </div>
        <img
          src={submitBtn}
          alt="next"
          className="h-12 w-32  cursor-pointer  "
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
}

export default ScoreBoard;
