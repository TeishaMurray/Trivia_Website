import { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import fetchTrivia from '../actions/index'
// import { nxtTriviaQuestion } from '../actions/nxtCSQuestion'


const mapStateToProps = (state) => {
    return {
        csTriviaData: state.triviaReducer.csTriviaData,
    }
}

const CompSciTrivia = (props) => {
    const [index, setIndex] = useState(0)
    // const [csScore, setCSScore] = useState(0)
    const handleClick = () => {
        if(props.csTriviaData.length >= 2) {
            setIndex(index + 1)
        }
                     
    }

    useEffect(() => {
        props.fetchTrivia()
    }, [])
    // console.log(index)
    // console.log("comp sci trivia mounted", props)
    // console.log("just props", props)
    console.log("props.csTriviaData", props.csTriviaData)

    return (
        <div className="cstrivia">
            <h2 className="quiztitle">Computer Science Trivia</h2>
            <div className="question-block">
                {props.csTriviaData.length > 0 ?
                    <div className="cstrivia">
                        <h3 className="cs-question">{props.csTriviaData[index].question.replace("&quot;", "'")}</h3>
                        <div className="csanswer-btns">
                        <button className="cs-btn" onClick={handleClick}>{props.csTriviaData[index].correct_answer}</button>
                        <button className="cs-btn" onClick={handleClick}>{props.csTriviaData[index].incorrect_answers}</button>
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
                                        //^^destructured mapDispatchtoProps^^

//^^connect method ties everything together 1st param is state/mapstate to props 2nd para is our action
// onClick={() => nxtTriviaQuestion()}
// onClick={() => nxtTriviaQuestion()}