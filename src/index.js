import readlineSync from 'readline-sync';
import {
  getRandomInt,
  solveMathProblem,
  generateArray,
  getRandomOperator,
  formatString,
  isEven,
} from './helpers';

const welcomeMessage = () => console.log('Welcome to the Brain Games!');
const getUserName = () => readlineSync.question('May I have your name? ');
const sayHello = name => console.log(`Hello, ${name}!`);
const askQuestion = (value) => {
  console.log(`Question: ${value}`);
  return readlineSync.question('Your answer: ');
};
const checkAnswer = (userAnswer, correctAnswer) =>
  formatString(userAnswer) === formatString(correctAnswer);

export const welcomeToGame = (gameRules = '') => {
  welcomeMessage();
  console.log(gameRules === '' ? gameRules : `${gameRules}\n`);
  const name = getUserName();
  sayHello(name);
  console.log('');
  return name;
};

const gameBody = (counter, userName, questionValue, correctAnswer) => {
  const userAnswer = askQuestion(questionValue);
  const isCorrectAnswer = checkAnswer(userAnswer, correctAnswer);
  if (isCorrectAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}" \nLet's try again, ${userName}!`);
  }
  if (counter === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const evenGame = () => {
  const gameRules = 'Answer "yes" if number is even, otherwise answer "no".';
  const userName = welcomeToGame(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const questionValue = getRandomInt();
    const correctAnswer = isEven(questionValue) ? 'yes' : 'no';
    gameBody(i, userName, questionValue, correctAnswer);
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
    gameBody(i, userName, questionValue, correctAnswer);
  }
};
