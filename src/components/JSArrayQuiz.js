import React from "react";

const JSArrayQuiz = (props) => {
    console.log("JS quiz", props.jsScoreDisplay)
    return (
        <div className="jsquiz">
            <h2 className="quiztitle">JavaScript Array Methods Quiz</h2>
            <div className="question-block">
                <h3>{props.quiz.question}</h3>
            </div>
            <div className="jsanswer-btns">
                {props.quiz.answers.map((answerOptions) => <button className="jsbuttons" onClick={() => props.nextJSQuestion(answerOptions.isCorrect)}>{answerOptions.answr}</button>)}
            </div>
            <div className="score">
                <h2>Your Score</h2>
                <div><span className="actual-score">{props.jsScoreDisplay}</span><span className="total-score">/10</span></div>
            </div>
        </div>
    )
}

export default JSArrayQuiz