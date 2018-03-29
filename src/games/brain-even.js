import { welcomeToGame, gameBody } from '..';
import { getEvenQuestion } from '../helpers';

const brainEven = () => {
  const gameRules = 'Answer "yes" if number is even, otherwise answer "no".';
  const userName = welcomeToGame(gameRules);
  gameBody(gameRules, userName, getEvenQuestion);
};

export default brainEven;
