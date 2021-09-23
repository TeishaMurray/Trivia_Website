import { GET_TRIVIA_START, GET_TRIVIA_SUCCESS, GET_TRIVIA_FAIL } from '../actions/'



const initialState = {
    csTriviaData: [], 
    error: "",
    isFetching: false,
    //could have a global score that adds all the scores
}



export const triviaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRIVIA_START:
            return { ...state, isFetching: true }
        case GET_TRIVIA_SUCCESS:
            return { ...state, isFetching: false, csTriviaData: action.payload }
        case GET_TRIVIA_FAIL:
            return { ...state, isFetching: false, error: action.payload }
        // case NEXT_QUESTION:
        //     const currentQuestion = state.csTriviaData
        //     currentQuestion.shift()
        //     return { ...state, csTriviaData: currentQuestion}
                    //spread out state, access what's inside : reassign new data
        default:
            return state
    }
}

export default triviaReducer





