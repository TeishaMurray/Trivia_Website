import React, { useState } from 'react' 
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar' 
import JSArrayQuiz from './components/JSArrayQuiz'
import jsQuizData from './jsQuizQuestions'
import Home from './components/Home'
import CompSciTrivia from './components/CompSciTrivia'
import './App.css';



const App = () => {

const [quizArray, setQuizArray] = useState(jsQuizData)
const [score, setScore] = useState(0)
// const [compQuestion, setCompQuestion] = useState( () => {
//   fetch()
// })

const nextQuestion = (isCorrect) => {
  if (quizArray.length >= 2 && isCorrect === true){
    setQuizArray(quizArray.slice(1))
    setScore(score + 1)
  }
  else if (quizArray.length >= 2 && isCorrect !== true){
    setQuizArray(quizArray.slice(1))
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

        {/* <Route path="/htmlcssquiz">
          <HtmlCSS />
        </Route> */}

        <Route path="/jsarrayquiz">
          <JSArrayQuiz 
          quiz={quizArray[0]}
          nextQuestion={nextQuestion}
          jsScoreDisplay={score}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App