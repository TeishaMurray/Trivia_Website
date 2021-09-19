import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchTrivia from '../actions/index'
// import nxtTriviaQuestion from '../actions/index'


const mapStateToProps = (state) => {
    return {
        csTriviaData: state.triviaReducer.csTriviaData,
        //would score for this go here
    }
}


const CompSciTrivia = (props) => {
    useEffect(() => {
        props.fetchTrivia()

        // console.log("first question", props.csTriviaData[0].question)
    }, [])
    useEffect(() => {

    }, [])

    console.log("comp sci trivia mounted", props)
    console.log("just props", props)
    console.log("props.csTriviaData", props.csTriviaData)

    return (
        <div className="cstrivia">
            <h2 className="quiztitle">Computer Science Trivia</h2>
            <div>
                {props.csTriviaData.length > 0 ?
                    <div>
                        <h3>{props.csTriviaData[0].question}</h3>
                        <button onClick={fetchTrivia()}>{props.csTriviaData[0].correct_answer}</button>
                        <button onClick={fetchTrivia()}>{props.csTriviaData[0].incorrect_answers}</button>
                    </div>
                    : "Loading"}
            </div>
            Hello we're inside compSciQuiz
        </div>
    )
}

export default connect(mapStateToProps, { fetchTrivia })(CompSciTrivia)


//^^connect method ties everything together 1st param is state/mapstate to props 2nd para is our action
// onClick={() => nxtTriviaQuestion()}
// onClick={() => nxtTriviaQuestion()}