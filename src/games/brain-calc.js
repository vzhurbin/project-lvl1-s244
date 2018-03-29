import { generateArray, getRandomOperator, solveMathProblem } from '../helpers';
import { welcomeToGame, askQuestion, checkAnswer, replyToUserAnswer } from '..';

const calcGame = () => {
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

export default calcGame;
