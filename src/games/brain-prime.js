import { gameBody } from '..';
import { getRandomInt } from '../helpers';

const isPrime = (num) => {
  // Loop
  // for (let i = 2; i < num; i += 1) {
  //   if (num % i === 0) return false;
  // }
  // return num !== 1;

  // Recursive
  const iter = (x, div) => {
    if (x === div) return true;
    if (x === 1 || x % div === 0) return false;
    return iter(x, div + 1);
  };

  return iter(num, 2);
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
const questionMessage = 'Is this number prime?';

export const primeGame = () => {
  gameBody(gameRules, getPrimeQuestion, questionMessage);
};
