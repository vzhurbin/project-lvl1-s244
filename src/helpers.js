export const getRandomInt = (min = 0, max = 10) =>
  // max is exclusive and min is inclusive
  Math.floor(Math.random() * (max - min)) + min;

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomInt(0, operators.length);
  return operators[index];
};

export const generateNumArray = (length = 2) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(getRandomInt());
  }

  return arr;
};

export const solveMathProblem = (numArray, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = numArray.reduce((acc, el) => acc + el);
      break;
    case '-':
      result = numArray.reduce((acc, el) => acc - el);
      break;
    case '*':
      result = numArray.reduce((acc, el) => acc * el);
      break;
    default:
      console.log('Sorry, this operator is not supported');
      break;
  }

  return result;
};

export const formatString = value =>
  value
    .toString()
    .toLowerCase()
    .trim();
