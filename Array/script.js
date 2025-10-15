const numerator = 2;
const denominator = 1;

const findRepeatingOrNot = (value, initialNum) => {
  const arr = value.split("");
  const isAllSame = arr.every((item) => item === arr[0]);

  if (isAllSame) {
    return console.log(`${initialNum}.(${arr[0]})`);
  } else {
    for (let i = 1; i < arr.length / 2; i++) {
      const case1 = value.substring(0, i);

      const case2 = case1
        .repeat(Math.ceil(value.length / i))
        .substring(0, value.length);

      if (case2 === value) {
        return `${initialNum}.(${case1})`;
      }
    }
  }
  return `${initialNum}.${value}`;
};

const findRepetingVal = (numerator, denominator) => {
  const result = numerator / denominator;

  if (result.length < 2) {
    return result;
  }

  const initialNum = result.toString().split(".")[0];

  let output;

  // if value is 0.5 , 5 , 0.6 ut will return as it is
  if (result.toString().length <= 3) {
    output = result;
  }

  const isDecimal = result.toString().split(".")[1];
  const isReepeatingValues = findRepeatingOrNot(isDecimal, initialNum);

  output = isReepeatingValues;

  return output;
};

const res = findRepetingVal(numerator, denominator);
console.log(res);
