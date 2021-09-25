# Test Your Knowledge

Learning programming languages can be both exciting and frustrating. Everyday there are more and more interactive websites to make this learning experience more enjoyable. While repetition is a good practice for learning to code, it relies heavily on your short-term memory and recognition. Quizzing yourself on your knowledge can help to ensure you have the information stored well within your long-term memory loop because it relies on your ability to recall the information.

I developed a website that provides short quizzes on basic information for three common coding languages: HTML, CSS, and JavaScript. This interactive website would be a great tool for teens who are learning to code. Additionally, older and/or more advanced learners could use this repository and expand on these quizzes to test deeper knowledge and understanding software engineering. This could be done by adding more questions, making the questions more complex, or even adding more programming language quizzes.

# Challenges

The api that I used for the trivia information for the Computer Science page has the answers in two data structures depending on whether it's correct or incorrect. All of the correct answers are in key/value form while all of the incorrect answers are stored in an array.

This presents two problems:
1) The correct answer is always the first button which makes the quiz relatively easy for the user to figure out without learning the actual information.
2) I found it challenging to develop a function that could adequately handle both answers and ended up coding two separate event handlers for each answer-button.


# View Web App on Heroku
https://programming-trivia-website.herokuapp.com/