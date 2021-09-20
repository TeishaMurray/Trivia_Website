import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchTrivia from '../actions/index'
import nxtTriviaQuestion from '../actions/nxtCSQuestion'


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
            <div className="question-block">
                {props.csTriviaData.length > 0 ?
                    <div className="cstrivia">
                        <h3 className="cs-question">{props.csTriviaData[0].question}</h3>
                        <div className="csanswer-btns">
                        <button className="cs-btn" onClick={nxtTriviaQuestion()}>{props.csTriviaData[0].correct_answer}</button>
                        <button className="cs-btn" onClick={nxtTriviaQuestion()}>{props.csTriviaData[0].incorrect_answers}</button>
                        </div>
                    </div>
                    : "Loading"}
            </div>
            <div className="score">
                <h2>Your Score</h2>
                <div><span className="actual-score"></span><span className="total-score">/10</span></div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { fetchTrivia })(CompSciTrivia)


//^^connect method ties everything together 1st param is state/mapstate to props 2nd para is our action
// onClick={() => nxtTriviaQuestion()}
// onClick={() => nxtTriviaQuestion()}