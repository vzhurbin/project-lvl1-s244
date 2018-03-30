import { gameBody } from '..';
import { generateNumArray, getRandomOperator, solveMathProblem } from '../helpers';

const getCalcQuestion = () => {
  const arr = generateNumArray();
  const operator = getRandomOperator();
  const correctAnswer = solveMathProblem(arr, operator);
  const question = arr.join(` ${operator} `);

  return {
    correctAnswer,
    question,
  };
};

export const gameRules = 'What is the result of the expression?';

export const calcGame = () => {
  gameBody(gameRules, getCalcQuestion);
};
