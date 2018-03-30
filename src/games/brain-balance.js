import { gameBody } from '..';
import { generateNumArray } from '../helpers';

const balanceNumber = (numArray) => {
  const newArray = [...numArray];
  newArray.sort((a, b) => a - b);
  const lastIndex = newArray.length - 1;
  const min = newArray[0];
  const max = newArray[lastIndex];
  if (max - min <= 1) {
    return newArray.join('');
  }
  newArray[0] = min + 1;
  newArray[lastIndex] = max - 1;

  return balanceNumber(newArray);
};

const getBalanceQuestion = () => {
  const numArray = generateNumArray(3);
  const correctAnswer = balanceNumber(numArray);
  const question = numArray.join('');
  // console.log(`Cheater's help --- ${correctAnswer}`);

  return {
    correctAnswer,
    question,
  };
};

export const gameRules = 'Balance the given number.';

export const balanceGame = () => {
  gameBody(gameRules, getBalanceQuestion);
};
