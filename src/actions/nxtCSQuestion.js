export const NEXT_QUESTION = "NEXT_QUESTION"

const nxtTriviaQuestion = () => {
    return (tryingDispatch) => {
        tryingDispatch({ 
            type: NEXT_QUESTION, 
            // payload: res.data.results
        })
    }
}

export default nxtTriviaQuestion