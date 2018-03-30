#!/usr/bin/env node

import { calcGame, gameRules } from '../games/brain-calc';
import { welcomeMessage, getUserName } from '..';

welcomeMessage(gameRules);
const name = getUserName();
calcGame(name);
