const initialState = {
    questions: []
};

const questionsReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_QUESTION":
            return {
                ...state,
                questions: action.payload.results
            }
        default:
            return state
    }
};

export default questionsReducer;
    