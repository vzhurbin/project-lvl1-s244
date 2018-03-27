export const getRandomInt = (min, max) =>
  // The maximum is exclusive and the minimum is inclusive
  Math.floor(Math.random() * (max - min)) + min;

export const isEven = number => number % 2 === 0;
