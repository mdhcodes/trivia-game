// Javascript Trivia

// The trivia object stores questions and answer choices.
var trivia = [
  {
    "question": "In a browser, the 'this' keyword will refer to the global object. What is the global object in this context?",
    "choice1": "The function.",
    "choice2": "The callback.",
    "choice3": "The closure.",
    "choice4": "The window."
  },
  {
    "question": "Which of the following is the proper use of the ternary operator?",
    "choice1": "console.log(true ?: 1, 0)",
    "choice2": "console.log(? true, 1 : 0)",
    "choice3": "console.log(true ? 1 : 0)",
    "choice4": "console.log(true : 1 ? 0)"
  },
  {
    "question": "Which statement is true?",
    "choice1": "The 'this' keyword takes the value of the invoking object in most situations.",
    "choice2": "The 'this' keyword always refers to the window object.",
    "choice3": "The 'this' keyword refers to any function.",
    "choice4": "The 'this' keyword is not very important in JavaScript."
  },
  {
    "question": "Which of the following is the proper way to write a function in JavaScript?",
    "choice1": "function exampleFunction(), {...do something}",
    "choice2": "function exampleFunction() {...do something}",
    "choice3": "function = exampleFunction",
    "choice4": "exampleFunction function"
  },
  {
    "question": "To avoid automatic type conversion, which operator should be used?",
    "choice1": "=",
    "choice2": "==",
    "choice3": "===",
    "choice4": "===="
  },
];

// Global Variables

// Store answer key in an array.
var answerKey = [4, 3, 1, 2, 3];

var num = 30;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var emptyAnswers = 0;
var outOfTime = false;

// The countDown timer displays numbers from 30 to 0.
// The player is able to see how much time they have left.
var countDown = function() {
  num--;
  $('#count-down').html('<h2>Time Remaining: ' + num + ' Seconds</h2>');
  if(num === 0) {
    outOfTime = true;
    clearInterval(intervalId);
  }

    // If the player does not submit their answers and the countDown timer reads 0, submitChoices() is set to run after a 30 second delay.
    setTimeout(function() {
      if(outOfTime) {
        submitChoices();
      }
      outOfTime = false;
    }, 30000);

}; // end countDown()


var startGame = function() {
  // Click the start button to start the game.
  $('#start').on('click', function() {
    // Remove the start button.
    $('#start').remove();
    // Execute displayQuestions()
    displayQuestions();
  }); // end the #start click event
}; // end startGame()


var displayQuestions = function() {

  // Reset variables if the restart button is clicked.
  num = 30;
  correctAnswers = 0;
  incorrectAnswers = 0;
  emptyAnswers = 0;
  $('.message').remove();
  $('#results').remove();
  $('#restart-button').remove();

  // Display time Remaining - countDown from 30 seconds
  intervalId = setInterval(countDown, 1000);

  // Create div for Question1
  var div1 = $('<div id="question1" class="question">');
  $('main').append(div1);
  // Display question 1
  $('#question1').append('<h2>' + trivia[0].question + '</h2>');

  // Display question 1 answer choices
  $('#question1').append('<form action="#" method="post"><ol>' +
                     '<li><input type="radio" name="this" value="1">1. ' + trivia[0]["choice1"] + '</li>' +
                     '<li><input type="radio" name="this" value="2">2. ' + trivia[0]["choice2"] + '</li>' +
                     '<li><input type="radio" name="this" value="3">3. ' + trivia[0]["choice3"] + '</li>' +
                     '<li><input type="radio" name="this" value="4">4. ' + trivia[0]["choice4"] + '</li>' +
                     '</ol></form>');

  // Create div for Question2
  var div2 = $('<div id="question2" class="question">');
  $('main').append(div2);
  // Display question 2
  $('#question2').append('<h2>' + trivia[1].question + '</h2>');

  // Display question 2 answer choices
  $('#question2').append('<form><ol>' +
                         '<li><input type="radio" name="ternary" value="1">1. ' + trivia[1]["choice1"] + '</li>' +
                         '<li><input type="radio" name="ternary" value="2">2. ' + trivia[1]["choice2"] + '</li>' +
                         '<li><input type="radio" name="ternary" value="3">3. ' + trivia[1]["choice3"] + '</li>' +
                         '<li><input type="radio" name="ternary" value="4">4. ' + trivia[1]["choice4"] + '</li>' +
                         '</ol></form>');

  // Create div for Question3
  var div3 = $('<div id="question3" class="question">');
  $('main').append(div3);
  // Display question 3
  $('#question3').append('<h2>' + trivia[2].question + '</h2>');

  // Display question 3 answer choices
  $('#question3').append('<form><ol>' +
                         '<li><input type="radio" name="javascript" value="1">1. ' + trivia[2]["choice1"] + '</li>' +
                         '<li><input type="radio" name="javascript" value="2">2. ' + trivia[2]["choice2"] + '</li>' +
                         '<li><input type="radio" name="javascript" value="3">3. ' + trivia[2]["choice3"] + '</li>' +
                         '<li><input type="radio" name="javascript" value="4">4. ' + trivia[2]["choice4"] + '</li>' +
                         '</ol></form>');

  // Create div for Question4
  var div4 = $('<div id="question4" class="question">');
  $('main').append(div4);
  // Display question 4
  $('#question4').append('<h2>' + trivia[3].question + '</h2>');

  // Display question 4 answer choices
  $('#question4').append('<form><ol>' +
                         '<li><input type="radio" name="function" value="1">1. ' + trivia[3]["choice1"] + '</li>' +
                         '<li><input type="radio" name="function" value="2">2. ' + trivia[3]["choice2"] + '</li>' +
                         '<li><input type="radio" name="function" value="3">3. ' + trivia[3]["choice3"] + '</li>' +
                         '<li><input type="radio" name="function" value="4">4. ' + trivia[3]["choice4"] + '</li>' +
                         '</ol></form>');

  // Create div for Question5
  var div5 = $('<div id="question5" class="question">');
  $('main').append(div5);
  // Display question 5
  $('#question5').append('<h2>' + trivia[4].question + '</h2>');

  // Display question 5 answer choices
  $('#question5').append('<form><ol>' +
                         '<li><input type="radio" name="conversion" value="1">1. ' + trivia[4]["choice1"] + '</li>' +
                         '<li><input type="radio" name="conversion" value="2">2. ' + trivia[4]["choice2"] + '</li>' +
                         '<li><input type="radio" name="conversion" value="3">3. ' + trivia[4]["choice3"] + '</li>' +
                         '<li><input type="radio" name="conversion" value="4">4. ' + trivia[4]["choice4"] + '</li>' +
                         '</ol></form>');

    // Create a button for the player to click when they are finished answering the questions.
    var finished = $('<button id="finished">');
    finished.html('Finished');
    $('main').append(finished);

    // Execute submitChoices() when the #finished button is clicked.
    $('#finished').on('click', function() {
      submitChoices();
    }); // end #finished click event

}; // end displayQuestions()


var submitChoices = function() {

    // Stop the setInterval(countdown, 1000)
    clearInterval(intervalId);

    // Set variables for each answer in the answerKey.
    var question1answer = answerKey[0];
    var question2answer = answerKey[1];
    var question3answer = answerKey[2];
    var question4answer = answerKey[3];
    var question5answer = answerKey[4];

    // Set variables for each answer choice selected by the player.
    var playerChoiceQ1 = $('input[name=this]:checked').val();
    var playerChoiceQ2 = $('input[name=ternary]:checked').val();
    var playerChoiceQ3 = $('input[name=javascript]:checked').val();
    var playerChoiceQ4 = $('input[name=function]:checked').val();
    var playerChoiceQ5 = $('input[name=conversion]:checked').val();

    // console.log the answer results.
    console.log('Question 1 Answer: ' + question1answer);
    console.log('Question 2 Answer: ' + question2answer);
    console.log('Question 3 Answer: ' + question3answer);
    console.log('Question 4 Answer: ' + question4answer);
    console.log('Question 5 Answer: ' + question5answer);

    // console.log the playerChoice results.
    console.log('Player Choice Question 1: ' + playerChoiceQ1);
    console.log('Player Choice Question 2: ' + playerChoiceQ2);
    console.log('Player Choice Question 3: ' + playerChoiceQ3);
    console.log('Player Choice Question 4: ' + playerChoiceQ4);
    console.log('Player Choice Question 5: ' + playerChoiceQ5);

    // Check to see if the player's answer choices are correct or incorrect.
    if(playerChoiceQ1 === undefined) {
      emptyAnswers++;
    }
    if(playerChoiceQ2 === undefined) {
      emptyAnswers++;
    }
    if(playerChoiceQ3 === undefined) {
      emptyAnswers++;
    }
    if(playerChoiceQ4 === undefined) {
      emptyAnswers++;
    }
    if(playerChoiceQ5 === undefined) {
      emptyAnswers++;
    }
    if(parseInt(playerChoiceQ1) === question1answer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
    if(parseInt(playerChoiceQ2) === question2answer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
    if(parseInt(playerChoiceQ3) === question3answer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
    if(parseInt(playerChoiceQ4) === question4answer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
    if(parseInt(playerChoiceQ5) === question5answer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }

    // console.log the final trivia result calculations.
    console.log('Correct Answers: ' + correctAnswers);
    console.log('Incorrect Answers: ' + incorrectAnswers);
    console.log('Unanswered Questions: ' + emptyAnswers);

    // Clear or remove html elements that are no longer needed.
    $('#count-down').html('');
    $('#finished').remove();
    $('.question').remove();

    // Create an element to inform the player that the quiz results have been calculated.
    var message = $('<h2 class="message">');
    message.html('All Done! Here are your results.');
    $('main').append(message);

    // Create an element to display the player's trivia results.
    var results = $('<div id="results">');
    $('main').append(results);

    // Display correctAnswers.
    var h3correct = $('<h3>');
    h3correct.html('Correct Answers: ' + correctAnswers);
    $('#results').append(h3correct);

    // Display incorrectAnswers.
    var h3incorrect = $('<h3>');
    h3incorrect.html('Incorrect Answers: ' + incorrectAnswers);
    $('#results').append(h3incorrect);

    // Display emptyAnswers.
    var h3empty = $('<h3>');
    h3empty.html('Unanswered: ' + emptyAnswers);
    $('#results').append(h3empty);

    // Create a button element to restart the game.
    var restart = $('<button id="restart-button">');
    restart.html('Restart');
    $('main').append(restart);

    // Execute restartQuiz()
    restartQuiz();

}; // end submitChoices()


var restartQuiz = function() {
  // When the restart button is clicked, ...
  $('#restart-button').on('click', function() {
    // Stop all previous click events.
    $('#start').off();
    $('#finished').off();
    $('#restart-button').off();
    // Execute displayQuestions()
    displayQuestions();
  });
};

// When the document loads, execute startGame()
$('document').ready(function() {
  startGame();
});
