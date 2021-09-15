import { GET_TRIVIA_START, GET_TRIVIA_SUCCESS, GET_TRIVIA_FAIL } from '../actions/'
import jsQuizData from '../jsQuizQuestions'

const initialState = {
    jsTriviaData: jsQuizData,
    csTriviaData: [],
    error: "",
    isFetching: false,
}

function triviaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TRIVIA_START:
            return { ...state, isFetching: true }
        case GET_TRIVIA_SUCCESS:
            return { ...state, isFetching: false, csTriviaData: action.payload }
        case GET_TRIVIA_FAIL:
            return { ...state, isFetching: false, error: action.payload }
        default:
            return state
    }
}

export default triviaReducer

// const initialState = {example: ‘’, isExample: true, errors: ‘’}
// function exampleReducer(state = exampleState, action){
// switch(action.type){
// case EXAMPLE_START :
// return {...state, isExample: false}

// default: return state
// } }



