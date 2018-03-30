import { gameBody } from '..';
import { generateNumArray } from '../helpers';

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const getGcdQuestion = () => {
  const arr = generateNumArray(2);
  const correctAnswer = gcd(arr[0], arr[1]);
  const question = `${arr[0]} ${arr[1]}`;

  return {
    correctAnswer,
    question,
  };
};

export const gameRules = 'Find the greatest common divisor of given numbers.';

export const gcdGame = () => {
  gameBody(gameRules, getGcdQuestion);
};
