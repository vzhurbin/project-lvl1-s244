import { gameBody } from '..';
import { getRandomInt, isEven } from '../helpers';

const getEvenQuestion = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    correctAnswer,
    question,
  };
};

export const gameRules = 'Answer "yes" if number is even, otherwise answer "no".';

export const evenGame = (userName) => {
  gameBody(userName, gameRules, getEvenQuestion);
};
