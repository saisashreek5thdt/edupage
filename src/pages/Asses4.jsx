import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";

import MenuBtn from "./MenuBtn";
import nextBtn from "../assets/buttons/NXT_Btn.png";
import { addDragDrop } from "../action/mcqAction";
import questions from "./asses4questions.json";

const Asses4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});

  console.log("answers------>", answers);

  const handleClick = () => {
    // const answersList = Object.values(answers);
    // console.log(answersList);

    const answersList = Object.entries(answers).map(([id, answer]) => ({
      id,
      answer,
    }));

    answersList.forEach((answer) => {
      dispatch(addDragDrop(answer));
    });

    // setAnswers({});

    navigate("/page/desert/assesment/scoreboard");
  };

  const options = [
    { id: 1, text: "A. hot and dry desert" },
    { id: 2, text: "B. coastal desert" },
    { id: 3, text: "C. semi-arid desert" },
    { id: 4, text: "D. cold desert" },
  ];

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const draggedOption = options.find(
      (option) => option.id.toString() === result.draggableId
    );

    const questionId = destination.droppableId.split("-")[1];
    const answer = answers[questionId] || "";

    if (answer.includes(draggedOption.text)) {
      // If the answer already contains the dragged option, replace it
      const updatedAnswer = answer.replace(draggedOption.text, "");
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: updatedAnswer,
      }));
    } else {
      // Otherwise, add the dragged option to the answer
      const updatedAnswer = draggedOption.text;
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: updatedAnswer,
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-cover absolute top-0 text-gray-700 bg-center h-screen w-screen bg-asses2_image">
        <MenuBtn />
        <div className="flex flex-col mx-24 my-4">
          <div className="text-4xl pb-1 pl-6">Assessment : 4</div>
          <div className="mt-2 mb-4 text-md ml-7 bg-sky-200 inline w-[129px] relative left-2">
            <button className="bg-purple-200 my-[3px] px-1 ml-[4px] rounded-md">
              Fill in the blanks
            </button>
          </div>
          <h3 className="mb-2 mt-4 text-4xl">
            Drag and drop the correct answer
          </h3>

          <Droppable droppableId="options">
            {(provided) => (
              <div
                className="grid grid-cols-2 p-2 text-2xl w-[520px] gap-2 relative m-2 left-80"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {options.map((option) => (
                  <Draggable
                    key={option.id}
                    draggableId={option.id.toString()}
                    index={option.id}
                  >
                    {(provided) => (
                      <p
                        className="border-2  border-dashed border-gray-500 rounded-lg cursor-pointer  hover:bg-yellow-300 p-1 m-1"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {option.text}
                      </p>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <div className="flex flex-col">
            {questions.asses4questions.map((q) => (
              <div key={q.id} className="flex justify-start mt-2 flex-grow">
                <Droppable droppableId={`question-${q.id}`}>
                  {(provided) => (
                    <div>
                      <input
                        type="text"
                        placeholder=""
                        className="text-2xl overflow-x-hidden hover:outline-none w-72 py-0 align-bottom border-b-gray-600 focus:ring-0 outline-transparent border-b-2 border-x-0 border-t-0 bg-transparent"
                        value={answers[q.id] || ""}
                        onChange={(e) => {
                          const updatedAnswers = { ...answers };
                          updatedAnswers[q.id] = e.target.value;
                          setAnswers(updatedAnswers);
                        }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <p className="w-[72vw] mt-2 ml-4 text-[27px] flex-1">
                  {q.question}
                </p>
              </div>
            ))}
          </div>
          <button className="flex mt-16 justify-end" onClick={handleClick}>
            <img
              src={nextBtn}
              alt="next"
              className="h-12 w-32 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Asses4;
