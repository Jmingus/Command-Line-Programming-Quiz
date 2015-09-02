var fs = require('fs');
var prompt = require('prompt-sync').prompt;
var questionsArray = require('./questions.js');
console.log(questionsArray.tier1[0].answers[0].answer);
console.log(questionsArray.tier1[0].answers[0].answer);

var amountCorrect = 0;
var questionTier = 1;
var currentQuestion = 0;

var quiz = function() {
  while(currentQuestion <= 15){
    switch (questionTier) {
      case questionTier === 2:
        for (var i = currentQuestion ; i <= currentQuestion + 1; i--) {
          console.log(questionsArray.tier1[currentQuestion - 1]);
          for (var i =)
        };
    }
  }
};
//Default Questions
console.log('Question 1');
console.log('What is an example of a tag selector?');
console.log('A. .iron');
console.log('B. #yard');
console.log('C. div');
var userAnswer = prompt();

if (userAnswer.toLowerCase() === 'div') {
  console.log('Correct! | Good Job!');
  amountCorrect = amountCorrect += 1;
  if(questionTier < 2) {
  questionTier = questionTier +=1;
  };
  quiz();
}else {
  var correctAnswer = 'correctanswer'
  console.log('Incorrect! | Correct Answer: ' + correctAnswer);
    if(questionTier > 0) {
    questionTier = questionTier -=1;
  };
  quiz();
};
// console.log('You have gotten ' + amountCorrect + ' correct so far!');

// if(questionTier === 1) {
//   console.log('Question 2');
//   console.log('default content');
//   var userAnswer = prompt();

//   if (userAnswer.toLowerCase() === 'correct') {
//     console.log('Correct! | Good Job!');
//     amountCorrect = amountCorrect += 1;
//     if(questionTier < 2) {
//       questionTier = questionTier +=1;
//     };
//   }else {
//     var correctAnswer = 'correctanswer'
//     console.log('Incorrect! | Correct Answer: ' + correctAnswer);
//     if(questionTier > 0) {
//       questionTier = questionTier -=1;
//     }
//   };
// }else if(questionTier === 2){
//   console.log('Question 2');
//   console.log('hard content');
//   var userAnswer = prompt();

//   if (userAnswer.toLowerCase() === 'correct') {
//     console.log('Correct! | Good Job!');
//     amountCorrect = amountCorrect += 1;
//   }else {
//     var correctAnswer = 'correctanswer'
//     console.log('Incorrect! | Correct Answer: ' + correctAnswer);
//   }
// }else {
//   console.log('Question 2');
//   console.log('easy content');
//   var userAnswer = prompt();

//   if (userAnswer.toLowerCase() === 'correct') {
//     console.log('Correct! | Good Job!');
//     amountCorrect = amountCorrect += 1;
//   }else {
//     var correctAnswer = 'correctanswer'
//     console.log('Incorrect! | Correct Answer: ' + correctAnswer);
//   };
// };


// console.log('You have gotten ' + amountCorrect + ' correct so far!');

//Harder Questions

//Easy Questions
