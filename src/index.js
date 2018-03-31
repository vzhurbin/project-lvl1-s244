import readlineSync from 'readline-sync';
import { formatString } from './helpers';

const welcomeMessage = (gameRules = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules === '' ? '' : `${gameRules}\n`);
};

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const askQuestion = (value, message) => {
  console.log(`${message} ${value}`);
  return readlineSync.question('Your answer: ');
};

const checkAnswer = (userAnswer, correctAnswer) =>
  formatString(userAnswer) === formatString(correctAnswer);

const getResponseMessages = (userAnswer, correctAnswer, userName) => {
  const messages = {
    wrong: `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${userName}!`,
    correct: 'Correct!',
    win: `Congratulations, ${userName}!`,
  };

  return messages;
};

const iterateQuestions = (name, fn, message, counter) => {
  const { correctAnswer, question } = fn();
  const userAnswer = askQuestion(question, message);
  const { wrong, correct, win } = getResponseMessages(userAnswer, correctAnswer, name);
  const isCorrectAnswer = checkAnswer(userAnswer, correctAnswer);
  if (!isCorrectAnswer) {
    return console.log(wrong);
  }
  if (isCorrectAnswer) {
    console.log(correct);
    if (counter === 2) {
      return console.log(win);
    }
  }

  return iterateQuestions(name, fn, message, counter + 1);
};

const gameBody = (gameRules, getQuestion, questionMessage = 'Question:') => {
  welcomeMessage(gameRules);
  const userName = getUserName();
  return iterateQuestions(userName, getQuestion, questionMessage, 0);
};

export { gameBody, getUserName, checkAnswer, askQuestion, welcomeMessage };
