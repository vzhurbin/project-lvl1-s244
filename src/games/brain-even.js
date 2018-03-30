import { gameBody } from '..';
import { getRandomInt } from '../helpers';

const isEven = number => number % 2 === 0;

const getEvenQuestion = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    correctAnswer,
    question,
  };
};

export const gameRules = 'Answer "yes" if number is even, otherwise answer "no".';

export const evenGame = () => {
  gameBody(gameRules, getEvenQuestion);
};
