import React, { useState } from 'react' 
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar' 
import JSArrayQuiz from './components/JSArrayQuiz'
import jsQuizData from './jsQuizQuestions'
import HTMLQuiz from './components/HTMLQuiz'
import htmlQuizData from './htmlQuizQuestions'
import Home from './components/Home'
import CompSciTrivia from './components/CompSciTrivia'
import Resources from './components/Resources'
import './App.css';



const App = () => {

const [jsQuizArray, setJSQuizArray] = useState(jsQuizData)
const [jsScore, setJSScore] = useState(0)
const [htmlQuizArray, setHTMLQuizArray] = useState(htmlQuizData)
const [htmlScore, setHTMLScore] = useState(0)


const nextJSQuestion = (isCorrect) => {
  if (jsQuizArray.length >= 2 && isCorrect === true){
    setJSQuizArray(jsQuizArray.slice(1))
    setJSScore(jsScore + 1)
  }
  else if (jsQuizArray.length >= 2 && isCorrect !== true){
    setJSQuizArray(jsQuizArray.slice(1))
  }
  else {
    alert("Quiz Complete. Click 'Refresh' to try again.")
  }
}

const nextHTMLQ = (isCorrect) => {
  if(htmlQuizArray.length >=2 && isCorrect === true){
    setHTMLQuizArray(htmlQuizArray.slice(1))
    setHTMLScore(htmlScore + 1)
  }
  else if (htmlQuizArray.length >= 2 && isCorrect !== true){
    setHTMLQuizArray(htmlQuizArray.slice(1))
  }
  else {
    alert("Quiz Complete. Click 'Refresh' to try again.")
  }
}

  return (
    <div className="app-div">
      <NavBar />
      <Switch>
        <Route path="/compscitrivia">
          <CompSciTrivia />
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