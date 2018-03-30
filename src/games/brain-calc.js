import { gameBody } from '..';
import { generateArray, getRandomOperator, solveMathProblem } from '../helpers';

const getCalcQuestion = () => {
  const arr = generateArray();
  const operator = getRandomOperator();
  const correctAnswer = solveMathProblem(arr, operator);
  const question = arr.join(` ${operator} `);

  return {
    correctAnswer,
    question,
  };
};

const gameRules = 'What is the result of the expression?';

const calcGame = (userName) => {
  gameBody(userName, gameRules, getCalcQuestion);
};

export { calcGame, gameRules };
