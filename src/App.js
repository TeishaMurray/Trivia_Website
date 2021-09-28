import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import JSArrayQuiz from './components/JSArrayQuiz'
import jsQuizData from './jsQuizQuestions'
import HTMLQuiz from './components/HTMLQuiz'
import htmlQuizData from './htmlQuizQuestions'
import Home from './components/Home'
import CompSciTrivia from './components/CompSciTrivia'
import GlobalScore from './components/GlobalScore'
import Resources from './components/Resources'
// import csTriviaData from './reducers/triviaReducer'
import './App.css';



const App = () => {

  const [jsQuizArray, setJSQuizArray] = useState(jsQuizData)
  const [jsScore, setJSScore] = useState(0)
  const [htmlQuizArray, setHTMLQuizArray] = useState(htmlQuizData)
  const [htmlScore, setHTMLScore] = useState(0)
  
  // const [csQuizArray, setCSQuizArray] = useState(csTriviaData)
  //can work with fetched data here see sticky note
  const nextJSQuestion = (isCorrect) => {
    if (jsQuizArray.length >= 2 && isCorrect === true) {
      setJSQuizArray(jsQuizArray.slice(1))
      setJSScore(jsScore + 1)
    }
    else if (jsQuizArray.length >= 2 && isCorrect !== true) {
      setJSQuizArray(jsQuizArray.slice(1))
    }
    else {
      alert("Quiz Complete. Click 'Refresh' to try again.")
    }
  }

  const nextHTMLQ = (isCorrect) => {
    if (htmlQuizArray.length >= 2 && isCorrect === true) {
      setHTMLQuizArray(htmlQuizArray.slice(1))
      setHTMLScore(htmlScore + 1)
    }
    else if (htmlQuizArray.length >= 2 && isCorrect !== true) {
      setHTMLQuizArray(htmlQuizArray.slice(1))
    }
    else {
      alert("Quiz Complete. Click 'Refresh' to try again.")
    }
  }

  // const nextCSQuestion = () => {
  //   if (csQuizArray.length >= 2 ){
  //     setCSQuizArray(csQuizArray.slice(1))
  //   }
  //   else {
  //     alert("Quiz Complete. Click 'Refresh' to try again.")
  //   }
  // }

  return (
    <div className="app-div">
        <NavBar />
        <Switch>
          <Route path="/compscitrivia">
            <CompSciTrivia
              // csQuiz={csQuizArray[0]}
              // nextCSQ={nextCSQuestion}
            />
          </Route>

          <Route path="/htmlquiz">
            <HTMLQuiz
              hquiz={htmlQuizArray[0]}
              nextHTMLQ={nextHTMLQ}
              htmlScoreDisplay={htmlScore}
            />
          </Route>

          <Route path="/jsarrayquiz">
            <JSArrayQuiz
              quiz={jsQuizArray[0]}
              nextJSQuestion={nextJSQuestion}
              jsScoreDisplay={jsScore}
            />
          </Route>

          <Route path="/globalscore">
            <GlobalScore />
          </Route>

          <Route path="/resources">
            <Resources />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  )
}

export default App