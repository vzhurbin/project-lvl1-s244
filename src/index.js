import readlineSync from 'readline-sync';

const welcomeMessage = () => console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const sayHello = name => console.log(`Hello, ${name}!`);
const getRandomInt = (min, max) =>
  // The maximum is exclusive and the minimum is inclusive
  Math.floor(Math.random() * (max - min)) + min;
const isEven = number => number % 2 === 0;

export const welcomeToBrainGames = () => {
  welcomeMessage();
  const name = getName();
  sayHello(name);
};

export const brainEven = () => {
  const YES = 'yes';
  const NO = 'no';

  welcomeMessage();
  console.log(`Answer "${YES}" if number is even, otherwise answer "${NO}".\n`);
  const name = getName();
  sayHello(name);
  console.log('');
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
