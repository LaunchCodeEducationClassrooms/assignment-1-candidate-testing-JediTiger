const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = "";
let questions = [
  [ 'Who was the first American woman in space? ' ],
  [ 'True or false: 5000 meters = 5 kilometers. ' ],
  [ '(5 + 3)/2 * 10 = ? ' ],
  [ "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " ],
  [ 'What is the minimum crew size for the ISS? ' ]
];
let correctAnswers = [
  [ 'Sally Ride' ],
  [ 'True' ],
  [ '40' ],
  [ 'Trajectory' ],
  [ '3' ]
]
let candidateAnswers = [ ];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your first name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(question);

  for (let i = 0; i < 5; i++) {
    // To save the candidate from answering the first questions twice, this if statement will fill in the answer they already gave for the individual question as their answer for the first of the group of 5 questions but still ask the other 4
    if (i == 0) {
      candidateAnswers[i] = candidateAnswer;
    }
    else {
      candidateAnswers.push(input.question("\n" + questions[i] + " "));
    }
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // Saving but commenting out the original one question code
  /* if (candidateAnswer == "Sally Ride") {
    console.log(`\nYou answered: ${candidateAnswer}`);
    passfail = "correct!";
  }
  else {
    console.log(`You answered: ${candidateAnswer}`);
    passfail = "incorrect.";
  }
  console.log("\nThe correct answer is: Sally Ride");
  console.log(`\nYour answer is ${passfail}`); */

  console.log(`\nThank you for your answers, ${candidateName}. Here are the answers (both correct and given):`)
  for (let i = 0; i < 5; i++) {
    console.log(`\nQuestion ${i+1} was:\n${questions[i]}`);
    console.log(`You answered: ${candidateAnswers[i]}`);
    console.log(`The correct answer is: ${correctAnswers[i]}`);
  }

// Kept the same for the program -- Is the percent grade as a integer
  let grade;
// Added 'score' to hold the points correct
  let score;

  let str1 = "";
  let str2 = "";
  score = 0;
  for (let i = 0; i < 5; i++) {
    if (correctAnswers[i].toString().toLowerCase() === candidateAnswers[i].toString().toLowerCase()) {
      score = score + 1;
    }
  }
  console.log(`\nOut of 5 possible correct answers, you answered ${score} correct.`);
  grade = (score/5)*100;
  console.log(`\nThat gives you a percent score of: ${grade}%`);
  if (score >= 4) {
    console.log("\nCongratulations! You passed the test. Well done!");
  }
  else {
    console.log("\nUnfortunately, you did not score high enough to pass the test. A score of 80% or higher is required to pass. Better luck next time!");
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nGreetings, ${candidateName}!`);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};