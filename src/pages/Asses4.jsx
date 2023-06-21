import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";

import MenuBtn from "./MenuBtn";
import nextBtn from "../assets/buttons/NXT_Btn.png";
import { addDropDown } from "../action/mcqAction";
import questions from "./asses4questions.json";

const Asses4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState([]);

  const handleClick = () => {
    answers.forEach((answer) => {
      dispatch(addDropDown(answer));
    });

    setAnswers([]);

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

    const updatedAnswers = [...answers];
    const currentAnswer = updatedAnswers[source.index] || "";
    updatedAnswers[source.index] = currentAnswer + " " + draggedOption.text;
    setAnswers(updatedAnswers);
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
          <div className="grid grid-cols-2 gap-1 relative my-2 left-80">
            <Droppable droppableId="input-1">
              {(provided) => (
                <div
                  className="bg-white border border-gray-300 rounded-md p-1"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <input
                    type="text"
                    placeholder=""
                    className="text-2xl overflow-x-hidden hover:outline-none w-full py-0 align-bottom border-b-gray-600 focus:ring-0 outline-transparent border-b-2 border-x-0 border-t-0 bg-transparent"
                    value={answers[0] || ""}
                    onChange={(e) => {
                      const updatedAnswers = [...answers];
                      updatedAnswers[0] = e.target.value;
                      setAnswers(updatedAnswers);
                    }}
                  />
                </div>
              )}
            </Droppable>
            <Droppable droppableId="options">
              {(provided) => (
                <div
                  className="flex flex-wrap bg-white border border-gray-300 rounded-md p-1"
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
                          className="hover:bg-yellow-400 p-1 bg-white border border-gray-300 rounded-md m-1"
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
          </div>
          <div className="flex flex-col">
            {questions.asses4questions.map((q, index) => (
              <div key={q.id} className="flex justify-start mt-2 flex-grow">
                <Droppable droppableId={`question-${q.id}`}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <input
                        type="text"
                        placeholder=""
                        className="text-2xl overflow-x-hidden hover:outline-none w-56 py-0 align-bottom border-b-gray-600 focus:ring-0 outline-transparent border-b-2 border-x-0 border-t-0 bg-transparent"
                        value={answers[index + 1] || ""}
                        onChange={(e) => {
                          const updatedAnswers = [...answers];
                          updatedAnswers[index + 1] = e.target.value;
                          setAnswers(updatedAnswers);
                        }}
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
