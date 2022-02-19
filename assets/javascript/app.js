// Javascript Trivia

  // The trivia object stores questions and answer choices.
  const trivia = [
    {
      "question": "In a browser, the 'this' keyword will refer to the global object. What is the global object in this context?",
      "answers": {
        "a": "The function.",
        "b": "The callback.",
        "c": "The closure.",
        "d": "The window."
      },
      "correctAnswer": "d"
    },
    {
      "question": "Which of the following is the proper use of the ternary operator?",
      "answers": {
        "a": "console.log(true ?: 1, 0)",
        "b": "console.log(? true, 1 : 0)",
        "c": "console.log(true ? 1 : 0)",
        "d": "console.log(true : 1 ? 0)"
      },
      "correctAnswer": "c"
    },
    {
      "question": "Which statement is true?",
      "answers": {
        "a": "The 'this' keyword takes the value of the invoking object in most situations.",
        "b": "The 'this' keyword always refers to the window object.",
        "c": "The 'this' keyword refers to any function.",
        "d": "The 'this' keyword is not very important in JavaScript."
      },
      "correctAnswer": "a"
    },
    {
      "question": "Which of the following is the proper way to write a function in JavaScript?",
      "answers": {
        "a": "function exampleFunction(), {...do something}",
        "b": "function exampleFunction() {...do something}",
        "c": "function = exampleFunction",
        "d": "exampleFunction function"
      },
      "correctAnswer": "b"
    },
    {
      "question": "To avoid automatic type conversion, which operator should be used?",
      "answers": {
        "a": "=",
        "b": "==",
        "c": "===",
        "d": "===="
      },
      "correctAnswer": "c"
    }
  ];

  // Global Variables

  const mainSection = document.getElementById('main');
  const timer = document.getElementById('time');
  const triviaQuestions = document.getElementById('questions');
  const triviaAnswers = document.getElementById('answers');
  const startButton = document.getElementById('start');
  const nextButton = document.getElementById('next');


  const quizLength = trivia.length;
  let time2Complete = 0;
  let intervalId;
  let finished = false;
  let numAnswersCorrect = 0;
  let numAnswersIncorrect = 0;
  let numAnswersBlank = 0;
  let index = 0;

  // Track the amount of time the user needed to complete the quiz
  const countUp = () => {

    time2Complete++;
    timer.textContent = 'Time to Complete: ' + time2Complete + ' seconds';

    if (finished) {
      clearInterval(intervalId);
      if (time2Complete < 59) {
        timer.textContent = 'You finished in approximately: ' + time2Complete + ' seconds';
      } else {
        timer.textContent = 'You finished in approximately: ' + time2Complete/60 + ' minutes';
      }

    }

  };


  const startQuiz = startButton.addEventListener('click', () => {

    intervalId = setInterval(countUp, 1000);
    displayQuestion();

  });


  const nextQuestion = nextButton.addEventListener('click', () => {

    let userChoice = document.querySelector('input[value]:checked').value;

    // Record answers
    if (userChoice === trivia[index-1].answers[trivia[index-1].correctAnswer]) {
      numAnswersCorrect++;
      displayQuestion();
    } else {
      numAnswersIncorrect++;
      displayQuestion();
    }

  });


  const displayQuestion = () => {
    // Clear triviaQuestions and triviaAnswers
    triviaQuestions.textContent = "";
    triviaAnswers.textContent = "";
    // Remove startButton
    startButton.remove();
    // Display nextButton
    nextButton.style.display = 'inline-block';

    // displayQuestion will be executed for each object (question) in the trivia array
    if (index < quizLength) {
      triviaQuestions.textContent = `${index + 1}. ${trivia[index].question}`;

      const question1AnswerDiv = document.createElement('div');
      question1AnswerDiv.setAttribute('class', 'answer-div');
      const answerLabel1 = document.createElement('label');
      answerLabel1.setAttribute('for', index);
      answerLabel1.setAttribute('class', 'space');
      answerLabel1.textContent = 'a. ' + trivia[index].answers.a;
      const answerInput1 = document.createElement('input');
      answerInput1.setAttribute('type', 'radio');
      answerInput1.setAttribute('name', index);
      answerInput1.setAttribute('class', 'input-size');
      answerInput1.setAttribute('value', trivia[index].answers.a);

      const question2AnswerDiv = document.createElement('div');
      question2AnswerDiv.setAttribute('class', 'answer-div');
      const answerLabel2 = document.createElement('label');
      answerLabel2.setAttribute('for', index);
      answerLabel2.setAttribute('class', 'space');
      answerLabel2.textContent = 'b. ' + trivia[index].answers.b;
      const answerInput2 = document.createElement('input');
      answerInput2.setAttribute('type', 'radio');
      answerInput2.setAttribute('name', index);
      answerInput2.setAttribute('value', trivia[index].answers.b);

      const question3AnswerDiv = document.createElement('div');
      question3AnswerDiv.setAttribute('class', 'answer-div');
      const answerLabel3 = document.createElement('label');
      answerLabel3.setAttribute('for', index);
      answerLabel3.setAttribute('class', 'space');
      answerLabel3.textContent = 'c. ' + trivia[index].answers.c;
      const answerInput3 = document.createElement('input');
      answerInput3.setAttribute('type', 'radio');
      answerInput3.setAttribute('name', index);
      answerInput3.setAttribute('value', trivia[index].answers.c);

      const question4AnswerDiv = document.createElement('div');
      question4AnswerDiv.setAttribute('class', 'answer-div');
      const answerLabel4 = document.createElement('label');
      answerLabel4.setAttribute('for', index);
      answerLabel4.setAttribute('class', 'space');
      answerLabel4.textContent = 'd. ' + trivia[index].answers.d;
      const answerInput4 = document.createElement('input');
      answerInput4.setAttribute('type', 'radio');
      answerInput4.setAttribute('name', index);
      answerInput4.setAttribute('value', trivia[index].answers.d);

      question1AnswerDiv.append(answerInput1);
      question1AnswerDiv.append(answerLabel1);
      triviaAnswers.append(question1AnswerDiv);

      question2AnswerDiv.appendChild(answerInput2);
      question2AnswerDiv.appendChild(answerLabel2);
      triviaAnswers.append(question2AnswerDiv);

      question3AnswerDiv.appendChild(answerInput3);
      question3AnswerDiv.appendChild(answerLabel3);
      triviaAnswers.append(question3AnswerDiv);

      question4AnswerDiv.appendChild(answerInput4);
      question4AnswerDiv.appendChild(answerLabel4);
      triviaAnswers.append(question4AnswerDiv);

      const message1 = document.createElement('p');
      message1.textContent = 'Please select an answer before clicking "Next".'
      message1.style.marginTop = '3em';
      triviaAnswers.append(message1);

      index++;

    } else {

      finished = true;
      nextButton.style.display = 'none';

      // Display results
      const message2 = document.createElement('h2');
      const score = document.createElement('p');
      const correctResults = document.createElement('p');
      const incorrectResults = document.createElement('p');
      const message3 = document.createElement('h2');
      const retakeQuiz = document.createElement('button');
      const endQuiz = document.createElement('button');

      message2.textContent = 'All Done! Here are your results.';
      score.textContent = 'Score: ' + (numAnswersCorrect / quizLength) * 100 + '\u0025';
      correctResults.textContent = 'Correct Answers: ' + numAnswersCorrect;
      incorrectResults.textContent = 'Incorrect Answers: ' + numAnswersIncorrect;
      retakeQuiz.setAttribute('class', 'btn');
      retakeQuiz.textContent = 'Restart';
      endQuiz.setAttribute('class', 'btn');
      endQuiz.textContent = 'End';

      retakeQuiz.style.marginRight = '.5em';
      endQuiz.style.marginLeft = '.5em';

      mainSection.append(message2);
      mainSection.append(score);
      mainSection.append(correctResults);
      mainSection.append(incorrectResults);
      mainSection.append(retakeQuiz);
      mainSection.append(endQuiz);


      retakeQuiz.addEventListener('click', () => {

        finished = false;
        time2Complete = 0;
        index = 0;
        numAnswersCorrect = 0;
        numAnswersIncorrect = 0;
        retakeQuiz.remove();
        endQuiz.remove();
        message2.remove();
        score.remove();
        correctResults.remove();
        incorrectResults.remove();

        intervalId = setInterval(countUp, 1000);
        displayQuestion();

      });


      endQuiz.addEventListener('click', () => {

        retakeQuiz.remove();
        endQuiz.remove();

        mainSection.append(message3);
        message3.style.marginTop = '2em';
        message3.style.marginBottom = '2em';
        message3.textContent = 'Thank you for participating!';

      });

    }

  };
