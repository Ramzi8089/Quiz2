const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "None of the above"],
        answer: "Cascading Style Sheets"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    questions[currentQuestion].choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = checkAnswer;
        choicesElement.appendChild(button);
        ``
    });
}

function checkAnswer() {
    if (this.textContent === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    const timerElement = document.getElementById("time-left");
    const timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    // Display score or any other ending actions
    alert(`Quiz ended! Your score is: ${score}`);
}

document.getElementById("submit").addEventListener("click", () => {
    startTimer();
    displayQuestion();
});
