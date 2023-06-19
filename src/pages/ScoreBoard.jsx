import React from "react";
import { useSelector } from "react-redux";
import allquestions from "./questions.json";

function ScoreBoard() {
  const mcqs = useSelector((state) => state.mcq);

  const { mcqAnswers } = mcqs;

  const questions = allquestions.questions;

  let totalCorrectAnswers = 0;

  return (
    <div className="scoreboard-container bg-gray-100 py-4 px-6 rounded-lg">
      <h2 className="scoreboard-heading text-2xl font-semibold mb-4">
        Your ScoreBoard
      </h2>
      <div className="scoreboard-table">
        <div className="scoreboard-row flex bg-gray-200 text-gray-700 font-semibold">
          <div className="scoreboard-cell flex-1">Question</div>
          <div className="scoreboard-cell flex-1">Correct Answer</div>
          <div className="scoreboard-cell flex-1">Your Answer</div>
        </div>
        {mcqAnswers?.map((mcq) => {
          const question = questions.find((q) => q.id === mcq.questionId);
          const correctAnswer = question.options[question.correctAnswerIndex];
          const userAnswer = mcq.answer;
          const isCorrect = userAnswer === correctAnswer;

          if (isCorrect) {
            totalCorrectAnswers++;
          }

          return (
            <div
              key={mcq.questionId}
              className={`scoreboard-row flex text-gray-700 ${
                isCorrect ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <div className="scoreboard-cell flex-1">{question.question}</div>
              <div className="scoreboard-cell flex-1">{correctAnswer}</div>
              <div className="scoreboard-cell flex-1">{userAnswer}</div>
            </div>
          );
        })}
      </div>
      <div className="total-correct-answers">
        Total Correct Answers: {totalCorrectAnswers}
      </div>
    </div>
  );
}

export default ScoreBoard;
