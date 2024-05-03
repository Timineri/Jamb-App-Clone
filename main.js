const english = [
  {
    question: "The team ___________ experienced and inexperienced players.",
    correctAns: "comprises of",
    wrongAns1: 'comprises',
    wrongAns2: 'comprise',
    wrongAns3: 'comprise of'
  },
  {
    question: "Wunmi as well as julius ____________ nominated",
    correctAns: "are being",
    wrongAns1: 'has been',
    wrongAns2: 'have been',
    wrongAns3: 'is being'
  },
  {
    question: "He had an accident because his brakes ______________ bad.",
    correctAns: "were",
    wrongAns1: 'was',
    wrongAns2: 'is',
    wrongAns3: 'are'
  }
];

const chevronDown = document.querySelector('.chevron-down');
const questionSentence = document.querySelector('.question-sent');

chevronDown.addEventListener('click', () => {
  if (questionSentence.style.display == 'none') {
    questionSentence.style.display = 'block';
  } else {
    questionSentence.style.display = 'none';
  }
});

const subject = document.querySelector('.subjects');
const prevButton = document.querySelector('.button1');
const nextButton = document.querySelector('.button2');
const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const option4 = document.querySelector('.option4')

function movement() {
let currentQuestionIndex = 0;

const showQuestion = (index) => {
questionSentence.textContent = english[index].question;
option1.textContent = english[index].correctAns;
option2.textContent = english[index].wrongAns1;
option3.textContent = english[index].wrongAns2;
option4.textContent = english[index].wrongAns3;
};

const nextQuestion = () => {
  currentQuestionIndex++;
  if(currentQuestionIndex >= english.length){
    currentQuestionIndex = 0;
  }
  showQuestion(currentQuestionIndex);
};

const prevQuestion = () => {
  currentQuestionIndex--;
  if(currentQuestionIndex < 0){
    currentQuestionIndex = english.length - 1;
  }
  showQuestion(currentQuestionIndex);
};

nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);

showQuestion(currentQuestionIndex);
}

movement();