import { welcomeToGame, askQuestion, checkAnswer, replyToUserAnswer } from '..';
import { getRandomInt, isEven } from '../helpers';

const evenGame = () => {
  const gameRules = 'Answer "yes" if number is even, otherwise answer "no".';
  const userName = welcomeToGame(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const questionValue = getRandomInt();
    const correctAnswer = isEven(questionValue) ? 'yes' : 'no';
    const userAnswer = askQuestion(questionValue);
    const isCorrectAnswer = checkAnswer(userAnswer, correctAnswer);
    replyToUserAnswer(i, userName, userAnswer, correctAnswer, isCorrectAnswer);
    if (i === 2 || !isCorrectAnswer) {
      break;
    }
  }
};

export default evenGame;
