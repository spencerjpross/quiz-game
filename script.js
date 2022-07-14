const timeEl = document.getElementById("timer");
const startButton = document.getElementById("start-button")
const questionContainerEl = document.getElementById("question-container")

startButton.addEventListener("click", startQuiz)

let timeLeft = 30;

function setTime() {
    let timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timesUp();
        }
    }, 1000)
}

function timesUp() {
    timeEl.textContent = "Times Up!",
}

setTime();

function startQuiz() {
    startButton.classList.add("hide"),
    questionContainerEl.classList.remove("hide"),
}

function nextQuestion() {

}

function selectAnswer() {

}