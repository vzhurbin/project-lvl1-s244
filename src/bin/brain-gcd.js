#!/usr/bin/env node

import { gcdGame, gameRules } from '../games/brain-gcd';
import { welcomeMessage, getUserName } from '..';

welcomeMessage(gameRules);
const name = getUserName();
gcdGame(name);
