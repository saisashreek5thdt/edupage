// export const updateScore = () => ({
//   type: 'UPDATE_SCORE',
// });

export const addMcqAnswers = (answer) => ({
  type: "ADD_MCQ_ANSWER",
  payload: answer,
});

export const addTrueOrFalse = (answer) => ({
  type: "ADD_TRUE_FALSE",
  payload: answer,
});

export const addDropDown = (answer) => ({
  type: "ADD_DROP_DOWN",
  payload: answer,
});
