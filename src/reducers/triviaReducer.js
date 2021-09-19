import { GET_TRIVIA_START, GET_TRIVIA_SUCCESS, GET_TRIVIA_FAIL } from '../actions/'
import { NEXT_QUESTION } from '../actions/nxtCSQuestion'


const initialState = {
    csTriviaData: [],
    error: "",
    isFetching: false,
}

export const triviaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRIVIA_START:
            return { ...state, isFetching: true }
        case GET_TRIVIA_SUCCESS:
            return { ...state, isFetching: false, csTriviaData: action.payload }
        case GET_TRIVIA_FAIL:
            return { ...state, isFetching: false, error: action.payload }
        case NEXT_QUESTION:
            return { ...state.csTriviaData.shift()}
        default:
            return state
    }
}

export default triviaReducer





