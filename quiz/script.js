const questions = [
  {
    question: "which of the following is a markup language",
    answers: [
      {
        text: "Html",
        correct: true,
      },
      {
        text: "Js",
        correct: false,
      },
      {
        text: "React",
        correct: false,
      },
      {
        text: "Node",
        correct: false,
      },
    ],
  },
  {
    question: "which of the following is a Database language",
    answers: [
      {
        text: "Html",
        correct: false,
      },
      {
        text: "Js",
        correct: false,
      },
      {
        text: "mongoDb",
        correct: true,
      },
      {
        text: "Node",
        correct: false,
      },
    ],
  },
  {
    question: "which of the following is a Dom language",
    answers: [
      {
        text: "Html",
        correct: false,
      },
      {
        text: "Js",
        correct: true,
      },
      {
        text: "React",
        correct: false,
      },
      {
        text: "Node",
        correct: false,
      },
    ],
  },
  {
    question: "which of the following is a Styling language",
    answers: [
      {
        text: "Html",
        correct: false,
      },
      {
        text: "Js",
        correct: false,
      },
      {
        text: "React",
        correct: false,
      },
      {
        text: "CSS",
        correct: true,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });

  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // Quiz finished, display score or any other action
    alert("Quiz finished! Your score is: " + score);
  }
}

startQuiz();
