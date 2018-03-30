import { gameBody } from '..';
import { getRandomInt } from '../helpers';

const generateProgression = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(2, 10);
  const arr = [start];
  for (let i = 0; i < 10; i += 1) {
    arr.push(arr[i] + step);
  }

  return arr;
};

const getProgressQuestion = () => {
  const arr = generateProgression();
  const removedIndex = getRandomInt(0, 10);
  const correctAnswer = arr[removedIndex];
  const newArr = [...arr];
  newArr.splice(removedIndex, 1, '..');
  const question = newArr.join(' ');

  return {
    correctAnswer,
    question,
  };
};

export const gameRules = 'What number is missing in this progression?';

export const progresGame = () => {
  gameBody(gameRules, getProgressQuestion);
};
