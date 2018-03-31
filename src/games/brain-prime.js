import { gameBody } from '..';
import { getRandomInt } from '../helpers';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const getPrimeQuestion = () => {
  const num = getRandomInt(1, 30);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const question = num;

  return {
    correctAnswer,
    question,
  };
};

export const gameRules = 'Answer "yes" if number is prime, otherwise answer "no".';
// 'Is this number prime?';

export const primeGame = () => {
  gameBody(gameRules, getPrimeQuestion);
};
