const mcqResultsReducer = (state = { mcqAnswers: [] }, action) => {
  switch (action.type) {
    case "ADD_MCQ_ANSWER":
      return {
        ...state,
        mcqAnswers: [...state.mcqAnswers, action.payload],
      };

    default:
      return state;
  }
};

export default mcqResultsReducer;
