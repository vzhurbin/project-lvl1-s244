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

const askQuestion = (value) => {
  console.log(`Question: ${value}`);
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

const gameBody = (userName, gameRules, getQuestion) => {
  for (let i = 0; i < 3; i += 1) {
    const { correctAnswer, question } = getQuestion();
    const userAnswer = askQuestion(question);
    const { wrong, correct, win } = getResponseMessages(userAnswer, correctAnswer, userName);
    const isCorrectAnswer = checkAnswer(userAnswer, correctAnswer);
    if (!isCorrectAnswer) {
      console.log(wrong);
      break;
    }
    if (isCorrectAnswer) {
      console.log(correct);
      if (i === 2) {
        console.log(win);
      }
    }
  }
};

export { gameBody, getUserName, checkAnswer, askQuestion, welcomeMessage };
