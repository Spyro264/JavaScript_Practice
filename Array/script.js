const arr = "ab3c2h";

const expandStringNumbers = (str) => {
  let newStr = "";
  let currentChar = "";

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (currentChar) {
        newStr = newStr + currentChar;
      }
      currentChar = char;
    } else if (/\d/.test(char)) {
      newStr += currentChar.repeat(Number(char));
    }
  }

  if (currentChar) {
    newStr = newStr + currentChar;
  }

  return newStr;
};

const res = expandStringNumbers(arr);
console.log(res);
