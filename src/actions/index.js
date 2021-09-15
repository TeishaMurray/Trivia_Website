import axios from 'axios'

export const GET_TRIVIA_START = "GET_TRIVIA_START"
//^^variable^^      ^^type^^
export const GET_TRIVIA_SUCCESS = "GET_TRIVIA_SUCCESS"
export const GET_TRIVIA_FAIL = "GET_TRIVIA_FAIL"

const fetchTrivia = () => {
    return (dispatch) => {
        dispatch({ type: GET_TRIVIA_START })
        //^dispatch is our state setter^
        axios
            .get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean")
            .then(res => {
                dispatch({
                    type: GET_TRIVIA_SUCCESS, 
                    payload: res.data.results
                })  
            })
            .catch(error => {
                dispatch({
                    type: GET_TRIVIA_FAIL,
                    payload: error.message
                })
            })
    }
}

export default fetchTrivia