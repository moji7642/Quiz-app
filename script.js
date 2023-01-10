const quizData = [
  {
    question: "how old is niloofar?",
    a: "10",
    b: "18",
    c: "23",
    d: "40",
    correct: "c",
  },
  {
    question: "What is the most used programing language in 2022",
    a: "Javascript",
    b: "C++",
    c: "Python",
    d: "Java",
    correct: "a",
  },
  {
    question: "Who is the president of US",
    a: "Barack Obama",
    b: "Joe Biden",
    c: "Donald Trump",
    d: "Mojtaba Ardani",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "hypertext Markup language",
    b: "Cascading style sheet",
    c: "jason object Notation",
    d: "Application programing interface",
    correct: "b",
  },
  {
    question: "What year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of above",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEL.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  // check to see the answer
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
      <button
      onclick="location.reload()">Reload</button>`;
    }
  }
});
