import React from "react";

const GlobalScore = (props) => {
    console.log("We are in the Global Score")
    console.log("Checking props ", props)
    return (
        <div className= "mainscore-div">
          <div className= "compsci-score">
              <h2>Computer Science Trivia Score</h2>
          </div>
            <div className= "html-score">
                <h2>HTML Quiz Score</h2>
            </div>
            <div className= "js-score">
                <h2>JavaScript Array Methods Score</h2>
            </div>
            <div className= "global-score"></div>  
                <h2>Global Score</h2>
        </div>        
    )
}

export default GlobalScore