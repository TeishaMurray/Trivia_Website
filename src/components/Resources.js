const resources = () => {
    return (
        <div className="resources-pg">
            <h2>Resources</h2>
            <h3>I had a ton of help along the way.
                Below are some links to the videos and articles I found helpful. </h3>
            <ul>
                <li><a href="https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/">How to Build a Quiz App: Article*</a></li>
                <li><a href="https://www.youtube.com/watch?v=Lya-qYiDqIA">How to Build a Quiz App: Video Tutorial</a></li>
                <li><a href="https://opentdb.com/">Open Trivia Database</a></li>
                <li><a href="https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML">W3 Schools HTML Quiz</a></li>
                <li><a href="https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0">A List of JavaScript Array Methods</a></li>
            </ul>
            <p>*This website is an extension of another design. Although I did use the above article for guidance, I decided to stretch my skills a bit by taking it a step further and passing the quiz data as props.</p>
            <p>You can see the original version and more details at:</p>
            <a href="https://github.com/TeishaMurray/React_Quiz.git">Murray's React Quiz</a>
        </div>
    )
}

export default resources