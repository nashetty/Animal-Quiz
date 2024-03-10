// variable to track the question number
let questionNumber = 0;
let score = 0;
// yourName to be saved as global variable, so it can be used at the end of the game
let yourName = "";
// get all the necessary elements
const question = document.getElementById("question");
const answers = document.getElementById("listOfAnswers");
const response = document.getElementById("response");
const submitBtn = document.getElementById("submitBtn");

// list of all the quiz questions and answers
const quizQuestions = [
  {
    question:
      "Which animal is considered the most intelligent non-human primate?",
    options: ["1. Chimpanzee", "2. Gorilla", "3. Orangutan", "4. Bonobo"],
    correctAnswer: "1", // Corresponding to "Chimpanzee"
  },
  {
    question: "What is the world's smallest species of whale?",
    options: [
      "1. Blue Whale",
      "2. Sperm Whale",
      "3. Beluga Whale",
      "4. Dwarf Sperm Whale",
    ],
    correctAnswer: "4", // Corresponding to "Dwarf Sperm Whale"
  },
  {
    question:
      "Which bird is known for its incredible long-distance migration, covering thousands of miles?",
    options: [
      "1. Swallow-tailed Kite",
      "2. Arctic Tern",
      "3. Bar-tailed Godwit",
      "4. Ruby-throated Hummingbird",
    ],
    correctAnswer: "2", // Corresponding to "Arctic Tern"
  },
  {
    question: "Which animal has the most complex eyes in the animal kingdom?",
    options: [
      "1. Mantis Shrimp",
      "2. Dragonfly",
      "3. Chameleon",
      "4. Hawk Moth",
    ],
    correctAnswer: "1", // Corresponding to "Mantis Shrimp"
  },
  {
    question: "What is the largest living lizard species?",
    options: [
      "1. Monitor Lizard",
      "2. Iguana",
      "3. Komodo Dragon",
      "4. Gila Monster",
    ],
    correctAnswer: "3", // Corresponding to "Komodo Dragon"
  },
  {
    question: "Which mammal is capable of echolocation?",
    options: ["1. Dolphin", "2. Elephant", "3. Hippopotamus", "4. Giraffe"],
    correctAnswer: "1", // Corresponding to "Dolphin"
  },
  {
    question: "What is the only venomous primate in the world?",
    options: ["1. Slow Loris", "2. Tarsier", "3. Gibbon", "4. Colobus Monkey"],
    correctAnswer: "1", // Corresponding to "Slow Loris"
  },
  {
    question:
      "Which animal is known for its exceptional memory and problem-solving skills?",
    options: ["1. Octopus", "2. Elephant", "3. Dolphin", "4. Honey Bee"],
    correctAnswer: "2", // Corresponding to "Elephant"
  },
  {
    question: "What is the world's largest flying bird?",
    options: ["1. Harpy Eagle", "2. Condor", "3. Albatross", "4. Bald Eagle"],
    correctAnswer: "3", // Corresponding to "Albatross"
  },
  {
    question:
      "Which big cat is known for its ability to swim and hunt in water?",
    options: ["1. Tiger", "2. Jaguar", "3. Cheetah", "4. Snow Leopard"],
    correctAnswer: "2", // Corresponding to "Jaguar"
  },
];

// wait for the page to load, and for click to begin
document.addEventListener("DOMContentLoaded", clickToBegin);

function clickToBegin() {
  submitBtn.addEventListener("click", main);
}

// add event listener to the button to submit answers & enable the key shortcut (Enter)
response.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitBtn.click();
  }
});

function main() {
  // remove the initial eventListener
  submitBtn.removeEventListener("click", main);
  // welcome the user and get their name, unless they press cancel button
  while (!yourName) {
    yourName = prompt("Please enter your name.");
    if (yourName === null) {
      question.textContent = "Cancelling so soon? Please come back again.";
      submitBtn.classList.toggle("hidden");
      return;
    }
  }

  console.log(`Welcome ${yourName}`);
  alert(`Welcome ${yourName}. Please press OK when you're ready to begin.`);

  // show the input field
  response.classList.toggle("hidden");
  // add event listener to submit and check the answers
  submitBtn.textContent = "Answer";
  submitBtn.addEventListener("click", submitAndCheckAnswer);

  // display the initial question
  displayQuestionAndAnswers(questionNumber);
}

// function to display questions and answers
function displayQuestionAndAnswers(questionNumber) {
  // clear the previous text
  question.innerHTML = "";
  answers.innerHTML = "";
  // display new question
  question.classList.remove("centered");
  question.textContent = quizQuestions[questionNumber].question;
  // display answers
  // create temporary fragment to append to the answers div
  const fragment = document.createDocumentFragment();
  quizQuestions[questionNumber].options.forEach((answer) => {
    const li = document.createElement("li");
    li.textContent = answer;
    fragment.appendChild(li);
  });
  answers.appendChild(fragment);
  // focus in the input field
  response.focus();
}

function submitAndCheckAnswer() {
  let userAnswer = response.value.trim();
  // save the number for correct answer in a variable
  const correct = quizQuestions[questionNumber].correctAnswer;
  // check if answer correct
  if (userAnswer === correct) {
    alert("That is correct!");
    // update score
    score++;
    console.log(`Questions answered: ${questionNumber + 1}, Score: ${score}`);
  } else {
    alert(
      `Sorry, that is incorrect, the correct answer is ${
        quizQuestions[questionNumber].options[Number(correct) - 1]
      }`
    );
    console.log(`Questions answered: ${questionNumber + 1}, Score: ${score}`);
  }
  // clear response field
  response.value = "";
  // when alert clicked ok, load the next question
  nextQuestion();
}

function nextQuestion() {
  // update current question number
  questionNumber++;
  // load the next question
  if (questionNumber < quizQuestions.length) {
    displayQuestionAndAnswers(questionNumber);
  }
  // or display thank you for playing and offer to play again, if all questions completed
  else {
    answers.innerHTML = "";
    response.classList.toggle("hidden");
    question.classList.add("centered");
    // ask user if they want to play again
    // remove event listener for submitting answers
    submitBtn.removeEventListener("click", submitAndCheckAnswer);
    submitBtn.textContent = "Play again";
    question.textContent = `Thank you for playing ${yourName}. You answered ${score} out of ${questionNumber} questions correctly. 
    Please click the button if you wish to play again.`;
    //reset the question number
    questionNumber = 0;
    score = 0;
    // start main when button clicked
    submitBtn.addEventListener("click", main);
  }
}
