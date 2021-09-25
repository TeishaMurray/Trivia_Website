import { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import fetchTrivia from '../actions/index'


const mapStateToProps = (state) => {
    return {
        csTriviaData: state.triviaReducer.csTriviaData,
    }
}

const CompSciTrivia = (props) => {
    console.log(props)
    let [index, setIndex] = useState(0)
    let [csScore, setCSScore] = useState(0)
    
    const handleCorrect = () => {
        if(index <= 8) {
            setIndex(index + 1)
            setCSScore(csScore + 1)
        }
        else if(index = 9){
            setCSScore(csScore + 1)
            alert("Quiz Complete. Click 'Refresh' to try again.")
        }
        else{
            alert("Quiz Complete. Click 'Refresh' to try again.")
        }            
    }

    const handleIncorrect = () => {
        if(index <= 8){
            setIndex(index + 1)
        }
        else{
            alert("Quiz Complete. Click 'Refresh' to try again.")
        }
    }
    //scorekeeping is working
    //make sure when they click on either button the entire array gets printed first

    useEffect(() => {
        props.fetchTrivia()
    }, [])
    console.log(index)
    console.log("comp sci trivia mounted", props)
    console.log("just props", props)
    console.log("props.csTriviaData", props.csTriviaData)
    // console.log("answers", props.csTriviaData[0].correct_answer, props.csTriviaData[0].incorrect_answers)

    return (
        <div className="cstrivia">
            <h2 className="quiztitle">Computer Science Trivia</h2>
            <div className="question-block">
                {props.csTriviaData.length > 0 ?
                    <div className="cstrivia">
                        <h3 className="cs-question">{props.csTriviaData[index].question.replace("&quot;", "'")}</h3>
                        <div className="csanswer-btns">
                        <button className="cs-btn" onClick={handleCorrect}>{props.csTriviaData[index].correct_answer}</button>
                        <button className="cs-btn" onClick={handleIncorrect}>{props.csTriviaData[index].incorrect_answers}</button>
                        </div>
                    </div>
                    : "Loading"}
            </div>
            <div className="score">
                <h2>Your Score</h2>
                <div><span className="actual-score">{csScore}</span><span className="total-score">/10</span></div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { fetchTrivia })(CompSciTrivia)
                                        //^^destructured mapDispatchtoProps^^

//^^connect method ties everything together 1st param is state/mapstate to props 2nd para is our action
// onClick={() => nxtTriviaQuestion()}
// onClick={() => nxtTriviaQuestion()}