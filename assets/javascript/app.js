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
  // const countDownTimer = document.getElementById('count-down');
  const triviaQuestions = document.getElementById('questions');
  const triviaAnswers = document.getElementById('answers');
  const startButton = document.getElementById('start');
  const nextButton = document.getElementById('next');

  let numAnswersCorrect = 0;
  let numAnswersIncorrect = 0;
  let numAnswersBlank = 0;
  let index = 0;


  const startQuiz = startButton.addEventListener('click', () => {
    quiz();
  });


  const nextQuestion = nextButton.addEventListener('click', () => {

    nextButton.style.display = 'none';
    let userChoice = document.querySelector('input[value]:checked').value;
    // console.log(userChoice);
    console.log(userChoice, trivia[index-1].answers[trivia[index-1].correctAnswer]);

    // Record answers
    if (userChoice === undefined) {
      numAnswersBlank++;
      console.log('numAnswersBlank', numAnswersBlank);
      displayQuestion();
    } else if (userChoice === trivia[index-1].answers[trivia[index-1].correctAnswer]) {
      numAnswersCorrect++;
      console.log('numAnswersCorrect', numAnswersCorrect);
      displayQuestion();
    } else {
      numAnswersIncorrect++;
      console.log('numAnswersIncorrect', numAnswersIncorrect);
      displayQuestion();
    }

  });


  const displayQuestion = () => {
    // Clear triviaQuestions and triviaAnswers
    triviaQuestions.textContent = "";
    triviaAnswers.textContent = "";
    // Remove startButton
    startButton.remove();
    nextButton.style.display = 'inline-block';

    const quizLength = trivia.length;

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

      index++;

    } else {

      nextButton.style.display = 'none';

      // Display results
      let message = document.createElement('h2');
      let correctResults = document.createElement('p');
      let incorrectResults = document.createElement('p');
      let emptyResults = document.createElement('p');

      message.textContent = 'All Done! Here are your results.';
      correctResults.textContent = 'Correct Answers: ' + numAnswersCorrect;
      incorrectResults.textContent = 'Incorrect Answers: ' + numAnswersIncorrect;
      emptyResults.textContent = 'Unanswered: ' + numAnswersBlank;

      mainSection.append(message);
      mainSection.append(correctResults);
      mainSection.append(incorrectResults);
      mainSection.append(emptyResults);

      emptyResults.style.marginBottom = '100px';

    }

  };


  const quiz = () => {

    displayQuestion();

  }; // end quiz()



  /*-----------------------------------------------------------------------------------------------------------------------*/
  /* The quiz only works when all questions are answered - If question left unanswered, quiz crashes with following error: */
  /* Uncaught TypeError: document.querySelector(...) is null */
  /* No timed features yet
  /* Maybe I could implement a SKIP question if the user doesn't know - NOT IDEAL */
  /*-----------------------------------------------------------------------------------------------------------------------*/
