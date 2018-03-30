#!/usr/bin/env node

import { evenGame, gameRules } from '../games/brain-even';
import { welcomeMessage, getUserName } from '..';

welcomeMessage(gameRules);
const name = getUserName();
evenGame(name);
