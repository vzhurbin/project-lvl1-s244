export const getRandomInt = (min = 0, max = 10) =>
  // max is exclusive and min is inclusive
  Math.floor(Math.random() * (max - min)) + min;

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomInt(0, operators.length);
  return operators[index];
};

export const generateNumArray = (length = 2, arr = []) => {
  if (arr.length === length) return arr;
  return generateNumArray(length, [...arr, getRandomInt()]);
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
