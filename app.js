const allQuestions = [
  {
    question: "Quem é o actual presidente da República?",
    choices: [
      "a) Marcelo Rebelo de Sousa ",
      "b) Durão Barroso ",
      "c) A tua mãe ",
      "d) Todas as opções anteriores",
    ],
    correctOption: 0,
  },
  {
    question: "Que rei bateu na mãe?",
    choices: [
      "a) D. Dinis ",
      "b) D. Afonso Henriques ",
      "c) D. Pedro I ",
      "d) Todas as opções anteriores",
    ],
    correctOption: 1,
  },
  {
    question: "Qual é a capital da Finlândia?",
    choices: ["a) Lisboa ", "b) Talinn ", "c) Estocolmo ", "d) Helsínquia"],
    correctOption: 3,
  },
  {
    question: "Qual o maior planeta do sistema solar?",
    choices: ["a) Marte ", "b) Júpiter ", "c) Saturno ", "d) Terra"],
    correctOption: 1,
  },
  {
    question: "Quem foi a primeira pessoa a viajar pelo Espaço?",
    choices: [
      "a) Yuri Gagarin ",
      "b) A cadela Laika ",
      "c) Buzz Aldrin ",
      "d) Neil Armstrong",
    ],
    correctOption: 0,
  },
  {
    question: "Qual é a montanha mais alta do mundo?",
    choices: [
      "a) Mauna Kea ",
      "b) Dhaulagiri ",
      "c) Monte Everest ",
      "d) Monte Chimborazo",
    ],
    correctOption: 2,
  },
  {
    question: "Onde se localiza Machu Picchu?",
    choices: ["a) Colômbia ", "b) Peru ", "c) China ", "d) Bolívia"],
    correctOption: 1,
  },
  {
    question: "Que país tem o formato de uma bota?",
    choices: ["a) Portugal ", "b) Brasil ", "c) França ", "d) Itália"],
    correctOption: 3,
  },
  {
    question: "Quem inventou a lâmpada?",
    choices: [
      "a) Graham Bell ",
      "b) Thomas Edison ",
      "c) Steve Jobs ",
      "d) Henry Ford",
    ],
    correctOption: 1,
  },
  {
    question: "A que temperatura a água ferve?",
    choices: ["a) 200 ºC ", "b) 100 ºC ", "c) 0 ºC ", "d) 180 ºC"],
    correctOption: 1,
  },
  {
    question: "Qual é a capital da Austrália?",
    choices: ["a) Sydney", "b) Melbourne", "c) Canberra", "d) Brisbane"],
    correctOption: 2,
  },
  {
    question: "Quem é o autor da obra 'Dom Quixote'?",
    choices: [
      "a) William Shakespeare",
      "b) Miguel de Cervantes",
      "c) Leo Tolstoy",
      "d) Jane Austen",
    ],
    correctOption: 1,
  },
  {
    question: "Quem foi o primeiro presidente dos Estados Unidos?",
    choices: [
      "a) Abraham Lincoln",
      "b) George Washington",
      "c) Thomas Jefferson",
      "d) John F. Kennedy",
    ],
    correctOption: 1,
  },
  {
    question: "Qual é o metal líquido à temperatura ambiente?",
    choices: ["a) Ouro", "b) Mercúrio", "c) Alumínio", "d) Cobre"],
    correctOption: 1,
  },
  {
    question:
      "Em que ano foi assinada a Declaração de Independência dos Estados Unidos?",
    choices: ["a) 1776", "b) 1789", "c) 1800", "d) 1825"],
    correctOption: 0,
  },
  {
    question: "Quem escreveu 'Romeu e Julieta'?",
    choices: [
      "a) Charles Dickens",
      "b) William Shakespeare",
      "c) Jane Austen",
      "d) Fyodor Dostoevsky",
    ],
    correctOption: 1,
  },
  {
    question: "Qual é o maior oceano do mundo?",
    choices: [
      "a) Oceano Índico",
      "b) Oceano Atlântico",
      "c) Oceano Pacífico",
      "d) Mar Mediterrâneo",
    ],
    correctOption: 2,
  },
  {
    question:
      "Quem foi o líder espiritual da Índia que defendeu a não-violência?",
    choices: [
      "a) Mahatma Gandhi",
      "b) Jawaharlal Nehru",
      "c) Subhas Chandra Bose",
      "d) Indira Gandhi",
    ],
    correctOption: 0,
  },
  {
    question: "Qual é a capital do Japão?",
    choices: ["a) Seul", "b) Tóquio", "c) Pequim", "d) Bangkok"],
    correctOption: 1,
  },
  {
    question: "Quem é o autor da pintura 'Mona Lisa'?",
    choices: [
      "a) Pablo Picasso",
      "b) Vincent van Gogh",
      "c) Leonardo da Vinci",
      "d) Rembrandt",
    ],
    correctOption: 2,
  },
  {
    question: "Qual é o segundo maior país do mundo em área territorial?",
    choices: ["a) Rússia", "b) Canadá", "c) China", "d) Estados Unidos"],
    correctOption: 1,
  },
  {
    question: "Quem foi o primeiro ser humano a viajar para o espaço?",
    choices: [
      "a) Yuri Gagarin",
      "b) Neil Armstrong",
      "c) Buzz Aldrin",
      "d) Valentina Tereshkova",
    ],
    correctOption: 0,
  },
  {
    question: "Em que ano ocorreu a Revolução Francesa?",
    choices: ["a) 1776", "b) 1789", "c) 1804", "d) 1832"],
    correctOption: 1,
  },
  {
    question: "Qual é o rio mais longo do mundo?",
    choices: [
      "a) Rio Amazonas",
      "b) Rio Nilo",
      "c) Rio Yangtzé",
      "d) Rio Mississippi",
    ],
    correctOption: 0,
  },
  {
    question: "Quem é o cientista famoso pela teoria da relatividade?",
    choices: [
      "a) Isaac Newton",
      "b) Galileo Galilei",
      "c) Albert Einstein",
      "d) Stephen Hawking",
    ],
    correctOption: 2,
  },
  {
    question: "Qual é a montanha mais alta do mundo?",
    choices: [
      "a) Monte Everest",
      "b) Mont Blanc",
      "c) Aconcágua",
      "d) Kilimanjaro",
    ],
    correctOption: 0,
  },
  {
    question: "Quem é o autor de 'Cem Anos de Solidão'?",
    choices: [
      "a) Gabriel García Márquez",
      "b) Mario Vargas Llosa",
      "c) Isabel Allende",
      "d) Julio Cortázar",
    ],
    correctOption: 0,
  },
  {
    question: "Qual é o animal símbolo da Austrália?",
    choices: ["a) Canguru", "b) Koala", "c) Emu", "d) Dingo"],
    correctOption: 0,
  },
  {
    question: "Quem foi o líder sul-africano que lutou contra o apartheid?",
    choices: [
      "a) Nelson Mandela",
      "b) Desmond Tutu",
      "c) Steve Biko",
      "d) F.W. de Klerk",
    ],
    correctOption: 0,
  },
  {
    question: "Qual é o elemento químico com símbolo 'O'?",
    choices: ["a) Oxigénio", "b) Ouro", "c) Ozônio", "d) Ósmio"],
    correctOption: 0,
  },
  {
    question: "Quem é a autora de 'Harry Potter'?",
    choices: [
      "a) J.R.R. Tolkien",
      "b) J.K. Rowling",
      "c) George R.R. Martin",
      "d) Suzanne Collins",
    ],
    correctOption: 1,
  },
  {
    question: "Qual é a cidade conhecida como 'Cidade Eterna'?",
    choices: ["a) Paris", "b) Atenas", "c) Roma", "d) Istambul"],
    correctOption: 2,
  },
  {
    question: "Quem é o autor de '1984'?",
    choices: [
      "a) Aldous Huxley",
      "b) Ray Bradbury",
      "c) George Orwell",
      "d) Franz Kafka",
    ],
    correctOption: 2,
  },
  {
    question: "Em que país se situa a Grande Barreira de Coral?",
    choices: ["a) México", "b) Austrália", "c) Filipinas", "d) Brasil"],
    correctOption: 1,
  },
  {
    question: "Qual é o primeiro livro da Bíblia?",
    choices: ["a) Gênesis", "b) Êxodo", "c) Levítico", "d) Números"],
    correctOption: 0,
  },
  {
    question:
      "Quem foi o físico alemão que desenvolveu a Teoria da Relatividade Geral?",
    choices: [
      "a) Max Planck",
      "b) Niels Bohr",
      "c) Werner Heisenberg",
      "d) Albert Einstein",
    ],
    correctOption: 3,
  },
  {
    question: "Qual é o instrumento musical associado a Johann Sebastian Bach?",
    choices: ["a) Piano", "b) Violino", "c) Órgão", "d) Trompete"],
    correctOption: 2,
  },
  {
    question:
      "Quem é a figura mitológica conhecida por ter a cabeça de uma serpente?",
    choices: ["a) Medusa", "b) Minotauro", "c) Quimera", "d) Ciclope"],
    correctOption: 0,
  },
  {
    question: "Qual é o nome da primeira mulher a viajar para o espaço?",
    choices: [
      "a) Sally Ride",
      "b) Valentina Tereshkova",
      "c) Mae Jemison",
      "d) Peggy Whitson",
    ],
    correctOption: 1,
  },
];

allQuestions.sort(() => 0.5 - Math.random());

const questions = allQuestions.slice(0, 5);
const questionText = document.getElementById("question-text");
const choices = document.getElementById("choices");
const result = document.querySelector("#result");
const lastScore = document.getElementById("last-score");
const highScore = document.getElementById("high-score");
const resetButton = document.getElementById("reset-button");
const lastScoreValue = localStorage.getItem("lastScore");
const highScoreValue = localStorage.getItem("highScore");
let currentQuestion = 0;
let correctAnswers = 0;
let gameStarted = false;
let timer;

function startGame() {
  currentQuestion = 0;
  correctAnswers = 0;
  result.innerHTML = "";
  lastScore.innerHTML = lastScoreValue || "";
  highScore.innerHTML = highScoreValue || "";
  gameStarted = true;
  hideStartButton();
  resetScoreButton();
  showQuestion();
  showQuizBox();
}

function hideStartButton() {
  const btnStart = document.getElementById("btn-start");
  if (btnStart) {
    btnStart.style.display = "none";
  }
}

function showQuizBox() {
  const quizBox = document.getElementById("quiz-box");
  if (quizBox) {
    quizBox.style.display = "block";
    setTimeout(() => {
      quizBox.classList.add("active");
    }, 10); // Delay the addition of 'active' class for a smoother transition
  }
}

function showQuestion() {
  const resultBox = document.querySelector(".result-box");

  if (!lastScoreValue && !highScoreValue && !gameStarted) {
    resultBox.innerHTML = `<h1>Quiz</h1><p>Bem-vindo! Clica em "Start Game" para começares.</p>`;
    return;
  }

  if (gameStarted && currentQuestion >= 0 && currentQuestion <= 4) {
    const messages = [
      "Boa sorte!",
      "Já foste!",
      "Estava a brincar!",
      "Ficaste aborrecido?",
      "Tenho a certeza que vais acertar em todas!",
    ];

    resultBox.innerHTML = `<h1>Quiz</h1><p>${messages[currentQuestion]}</p>`;
  }

  if (lastScoreValue != null) {
    lastScore.innerHTML = lastScoreValue;
  }

  if (highScoreValue != null) {
    highScore.innerHTML = highScoreValue;
  }

  if (gameStarted) {
    questionText.innerHTML = questions[currentQuestion].question;
    for (let key in questions[currentQuestion].choices) {
      const choice = document.createElement("li");
      choice.setAttribute("answer", key);
      choice.addEventListener("click", validateAnswer);
      choice.innerHTML = questions[currentQuestion].choices[key];
      choices.appendChild(choice);
    }

    startTimer(10);
  }
}

function startTimer(seconds) {
  let timeLeft = seconds;

  function updateTimer() {
    document.getElementById(
      "timer-display"
    ).innerHTML = `Tempo restante: ${timeLeft}s`;

    if (timeLeft === 0) {
      if (currentQuestion < questions.length - 1) {
        clearTimeout(timer);
        // O tempo acabou, avançar para a próxima pergunta
        choices.innerHTML = ""; // Limpar as opções
        questionText.innerHTML = ""; // Limpar o texto da pergunta
        currentQuestion++;
        showQuestion();
      } else {
        // Última pergunta e tempo esgotado, exibir resultado final
        clearTimeout(timer);
        choices.innerHTML = ""; // Limpar as opções
        questionText.innerHTML = ""; // Limpar o texto da pergunta
        document.getElementById("timer-display").style.display = "none";
        displayResult();
      }
    } else {
      timeLeft--;
      timer = setTimeout(updateTimer, 1000);
    }
  }
  clearTimeout(timer);
  updateTimer();
}

function validateAnswer() {
  const answer = this.getAttribute("answer");
  if (answer == questions[currentQuestion].correctOption) {
    correctAnswers++;
  }

  currentQuestion++;

  choices.innerHTML = "";
  questionText.innerHTML = "";

  if (currentQuestion < questions.length) {
    startTimer(10);
    showQuestion();
  } else {
    displayResult();
    document.getElementById("timer-display").style.display = "none";
  }
}

function displayResult() {
  if (correctAnswers == questions.length) {
    result.innerHTML = `${correctAnswers} em ${questions.length}! És o maior! Nunca duvidei de ti!`;
  } else if (correctAnswers == 0) {
    result.innerHTML = `${correctAnswers} em ${questions.length}... fdx, tiraste o 4.ª ano à noite?`;
  } else {
    result.innerHTML = `Acertaste em ${correctAnswers} resposta(s) de ${questions.length} perguntas.`;
  }

  localStorage.setItem("lastScore", correctAnswers);

  if (!highScoreValue || correctAnswers > highScoreValue) {
    localStorage.setItem("highScore", correctAnswers);
  }
  setTimeout(() => {
    location.reload();
  }, 4000);
}

if (resetButton) {
  resetButton.addEventListener("click", resetScores);
}

function resetScores() {
  localStorage.removeItem("lastScore");
  localStorage.removeItem("highScore");
  location.reload();
}

function resetScoreButton() {
  const resetButton = document.getElementById("reset-button");
  if (resetButton) {
    resetButton.style.display = "none";
  }
}

function toggleAudio() {
  const audio = document.getElementById("background-music");
  const toggleButton = document.getElementById("toggle-audio");
  const volumeIcon = toggleButton.querySelector("i");

  audio.muted = !audio.muted;

  if (audio.muted) {
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.add("fa-volume-xmark");
  } else {
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.add("fa-volume-high");
  }

  audio.play();
}

showQuestion();
