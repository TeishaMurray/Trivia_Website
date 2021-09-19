import axios from 'axios'

export const GET_TRIVIA_START = "GET_TRIVIA_START"
export const GET_TRIVIA_SUCCESS = "GET_TRIVIA_SUCCESS"
export const GET_TRIVIA_FAIL = "GET_TRIVIA_FAIL"
export const NEXT_QUESTION = "NEXT_QUESTION"


// export const nxtTriviaQuestion = () => () => {
//     return (dispatch) => {
//         dispatch({ type: NEXT_QUESTION })
//     }   
// }

const fetchTrivia = () => dispatch => {
    // return (dispatch) => {
        dispatch({ type: GET_TRIVIA_START })
        //^dispatch is our state setter^
        axios
        .get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean")
            .then(res => 
                dispatch({
                    type: GET_TRIVIA_SUCCESS,
                    payload: res.data.results
                })
            )
            .then(res => 
                dispatch({
                    type: NEXT_QUESTION,
                    payload: res.data.results
                })
            )  
            .catch(error => 
                dispatch({
                    type: GET_TRIVIA_FAIL,
                    payload: error.message
                })
            )
            // }
}




export default fetchTrivia
