import readlineSync from 'readline-sync';
import { getRandomInt, isEven } from './helpers';

const welcomeMessage = () => console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('\nMay I have your name? ');
const sayHello = name => console.log(`Hello, ${name}!\n`);

export const welcomeGame = (gameRules) => {
  welcomeMessage();
  console.log(gameRules);
  const name = getName();
  sayHello(name);
  return name;
};

export const evenGame = () => {
  const YES = 'yes';
  const NO = 'no';
  const gameRules = `Answer "${YES}" if number is even, otherwise answer "${NO}".`;
  const name = welcomeGame(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const testNumber = getRandomInt(1, 100);
    console.log(`Question: ${testNumber}`);
    const correctAnswer = isEven(testNumber) ? YES : NO;
    const answer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = answer.toLowerCase().trim() === correctAnswer;

    if (isCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}" \nLet's try again, ${name}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};
