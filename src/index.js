import readlineSync from 'readline-sync';
import {
  getRandomInt,
  solveMathProblem,
  generateArray,
  getRandomOperator,
  formatString,
  isEven,
} from './helpers';

const welcomeToGame = (gameRules) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules === '' ? '' : `${gameRules}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const askQuestion = (value) => {
  console.log(`Question: ${value}`);
  return readlineSync.question('Your answer: ');
};

const checkAnswer = (userAnswer, correctAnswer) =>
  formatString(userAnswer) === formatString(correctAnswer);

const replyToUserAnswer = (counter, userName, userAnswer, correctAnswer, isCorrectAnswer) => {
  let message;
  if (!isCorrectAnswer) {
    message = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}" \nLet's try again, ${userName}!`;
  } else {
    message = 'Correct!';
  }
  if (counter === 2) {
    message = `Congratulations, ${userName}!`;
  }
  console.log(message);
};

export const evenGame = () => {
  const gameRules = 'Answer "yes" if number is even, otherwise answer "no".';
  const userName = welcomeToGame(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const questionValue = getRandomInt();
    const correctAnswer = isEven(questionValue) ? 'yes' : 'no';
    const userAnswer = askQuestion(questionValue);
    const isCorrectAnswer = checkAnswer(userAnswer, correctAnswer);
    replyToUserAnswer(i, userName, userAnswer, correctAnswer, isCorrectAnswer);
    if (i === 2 || !isCorrectAnswer) {
      break;
    }
  }
};

export const calcGame = () => {
  const gameRules = 'What is the result of the expression?';
  const userName = welcomeToGame(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const numArray = generateArray();
    const operator = getRandomOperator();
    const questionValue = numArray.join(` ${operator} `);
    const correctAnswer = solveMathProblem(numArray, operator);
    const userAnswer = askQuestion(questionValue);
    const isCorrectAnswer = checkAnswer(userAnswer, correctAnswer);
    replyToUserAnswer(i, userName, userAnswer, correctAnswer, isCorrectAnswer);
    if (i === 2 || !isCorrectAnswer) {
      break;
    }
  }
};
