import React from "react";

const HTMLQuiz = (props) => {
    console.log("HTML quiz", props, props.hquiz)
    return (
        <div className="hquiz">
            <h2 className="quiztitle">HTML Quiz</h2>
            <div className="question-block">
                <h3>{props.hquiz.question}</h3>
            </div>
            <div className="hanswer-btns">
                {props.hquiz.answers.map((hAnswerOptions) => <button className="hbuttons" onClick={() => props.nextHTMLQ(hAnswerOptions.isCorrect)}>{hAnswerOptions.answr}</button>)}
            </div>
            <div className="score">
                <h2>Your Score</h2>
                <div><span className="actual-score">{props.htmlScoreDisplay}</span><span className="total-score">/10</span>
                </div>
            </div>
        </div>
    )
}

export default HTMLQuiz