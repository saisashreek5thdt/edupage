export const mcqResultsReducer = (state = { mcqAnswers: [] }, action) => {
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

export const trueFalseReducer = (state = { TFAnswers: [] }, action) => {
  switch (action.type) {
    case "ADD_TRUE_FALSE":
      return {
        ...state,
        TFAnswers: [...state.TFAnswers, action.payload],
      };

    default:
      return state;
  }
};

export const dropDownReducer = (state = { dropAnswers: [] }, action) => {
  switch (action.type) {
    case "ADD_DROP_DOWN":
      return {
        ...state,
        dropAnswers: [...state.dropAnswers, action.payload],
      };

    default:
      return state;
  }
};

// export default mcqResultsReducer;
