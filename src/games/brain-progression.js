import { gameBody } from '..';
import { getRandomInt } from '../helpers';

const generateProgression = () => {
  const start = getRandomInt(1, 100);
  const stepValue = getRandomInt(2, 10);
  const makeArray = (arr, step) => {
    const len = arr.length;
    if (len === 10) return arr;
    const newValue = arr[len - 1] + step;
    return makeArray([...arr, newValue], step);
  };

  return makeArray([start], stepValue);
};

const getProgressQuestion = () => {
  const arr = generateProgression();
  const removedIndex = getRandomInt(0, 10);
  const correctAnswer = arr[removedIndex];
  arr.splice(removedIndex, 1, '..');
  const question = arr.join(' ');

  return {
    correctAnswer,
    question,
  };
};

export const gameRules = 'What number is missing in this progression?';

export const progresGame = () => {
  gameBody(gameRules, getProgressQuestion);
};
