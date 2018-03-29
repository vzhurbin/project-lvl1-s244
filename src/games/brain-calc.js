import { welcomeToGame, gameBody } from '..';
import { getCalcQuestion } from '../helpers';

const brainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const userName = welcomeToGame(gameRules);
  gameBody(gameRules, userName, getCalcQuestion);
};

export default brainCalc;
