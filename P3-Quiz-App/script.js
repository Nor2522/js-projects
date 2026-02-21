// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("questions-container");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question");
const answersBtns = document.querySelectorAll(".answer-btns");
const currentQuestionSpan = document.getElementById("q-count");
const totalQuestionsSpan = document.getElementById("total-q");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-msg");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");

const quizQuestions = [
  {
    question: "Imisa ayay yihiin tiirarka Islaamku?",
    answers: [
      { text: "4 Tiir", correct: false },
      { text: "6 Tiir", correct: false },
      { text: "5 Tiir", correct: true },
      { text: "3 Tiir", correct: false },
    ],
  },
  {
    question: "Nabigii ugu horreeyay ee Ilaahay (SWT) abuuray magaciisu waa?",
    answers: [
      { text: "Nabi Nuux (CS)", correct: false },
      { text: "Nabi Aadam (CS)", correct: true },
      { text: "Nabi Ibraahim (CS)", correct: false },
      { text: "Nabi Muuse (CS)", correct: false },
    ],
  },
  {
    question: "Magaaladee ayuu ku dhashay Nabigeena Maxamed (NNKH)?",
    answers: [
      { text: "Madiina", correct: false },
      { text: "Quds", correct: false },
      { text: "Makkah", correct: true },
      { text: "Baqdaad", correct: false },
    ],
  },
  {
    question: "Imisa Suuradood ayuu ka kooban yahay Qur'aanka Kariimka ah?",
    answers: [
      { text: "110 Suuradood", correct: false },
      { text: "120 Suuradood", correct: false },
      { text: "114 Suuradood", correct: true },
      { text: "104 Suuradood", correct: false },
    ],
  },
  {
    question: "Bisha ay Muslimiintu soomaan ee Qur'aanku soo dagay waa bisha?",
    answers: [
      { text: "Shacbaan", correct: false },
      { text: "Ramadaan", correct: true },
      { text: "Rajab", correct: false },
      { text: "Shawaal", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Initialize total questions
totalQuestionsSpan.textContent = quizQuestions.length;

// Start Quiz
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  // Clear any existing classes and enable buttons for the new question
  answersBtns.forEach(btn => {
    btn.classList.remove("correct", "incorrect");
    btn.disabled = false;
  });

  let currentQuestion = quizQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  
  answersBtns.forEach((btn, index) => {
    btn.textContent = currentQuestion.answers[index].text;
  });
  
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  updateProgressBar();
}

// Handle Answer Selection
answersBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = currentQuestion.answers[index].correct;

    // Disable all buttons immediately after selection
    answersBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
      btn.classList.add("correct");
      score++;
      scoreSpan.textContent = score;
    } else {
      btn.classList.add("incorrect");
      // Optional: Highlight the correct answer automatically if they got it wrong
      answersBtns.forEach((b, i) => {
        if (currentQuestion.answers[i].correct) {
          b.classList.add("correct");
        }
      });
    }

    // Wait for 1.5 seconds before moving to the next question
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      } else {
        showResults();
      }
    }, 1500); // 1500 milliseconds = 1.5 seconds
  });
});

function updateProgressBar() {
  // SAXITAANKA: Ka saar "+ 1" si uu 0 ka bilaawdo
  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  
  const progressBar = document.getElementById("progress-bar");
  const flame = document.getElementById("flame");

  progressBar.style.width = progressPercent + "%";

  // Dabka muuji haddii progress-ku kordho
  if (progressPercent > 0) {
    flame.style.display = "block";
    
    // Dabka sii weyneey marba marka ka dambaysa (Scale)
    const scaleFactor = 1 + (progressPercent / 100); 
    flame.style.transform = `scale(${scaleFactor})`;
  } else {
    flame.style.display = "none";
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScoreSpan.textContent = score;
  maxScoreSpan.textContent = quizQuestions.length;
  
  if (score === quizQuestions.length) {
    resultMessage.textContent = "Guul! Dhammaan waad wada saxday. Illahay cilmiga hakuu kordhiyo! 🌙";
  } else if (score >= quizQuestions.length / 2) {
    resultMessage.textContent = "waad roontahay adiga lakin sidani wax ka bedel. 👍";
  } else {
    resultMessage.textContent = "wax baro nio. 📚";
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}


// Theme Toggle Logic
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check if user has a preference saved in LocalStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.setAttribute("data-theme", "dark");
  themeToggleBtn.textContent = "☀️ Light Mode";
}

themeToggleBtn.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌙 Dark Mode";
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️ Light Mode";
  }
});