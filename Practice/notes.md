# 1. Write a function that takes 2 numbers as input and prints their sum

```
const CalcuateSum = (a = 0, b = 0) => {
  return Math.abs(a) + Math.abs(b);
};

console.log(CalcuateSum(-10, -10));

```

# 2. Wriate an function that calculates and prints area of a rectangle given its length and width

```
const CalculateAreaOfRectangle = (length = 0, width = 0) => {
  if (length < 0 || width < 0) {
    throw new Error("Length and Width must be non-negative");
  }

  const area = length * width;
  return area;
};

console.log(CalculateAreaOfRectangle(10, -5));

```

# 3. Write an Function TO Identify Even or Odd

```
const IdentifyEvenorOdd = (number) => {
  if (number < 0 || !Number.isInteger(number)) {
    throw new Error("Input Should Be Positive Integer");
  }

  if (number % 2 === 0) {
    return `${number} is Even Number`;
  } else {
    return `${number} is Odd Number`;
  }
};

console.log(IdentifyEvenorOdd(0));

```

# 4. Write a Fucntion To Identify The Smallest NUmber Among Three NUmbers

```
 M1. const findSmallest = (a, b, c) => {
  if (a <= b && a <= c) {
    return "a is smallest";
  } else if (b <= c && b <= a) {
    return "b is smallest";
  } else {
    return "c is smallest";
  }
};

console.log(findSmallest(-10, -2, -3));


 M2. const findSmallest = (a, b, c) => {
  return Math.min(a, b, c);
};

console.log(findSmallest(-10, -20, -32));

M3. const findSmallest = (a, b, c) => {
  let smallest = a;

  if (b < smallest) {
    smallest = b;
  }

  if (c < smallest) {
    smallest = c;
  }

  return smallest;
};

console.log(findSmallest(3, 3, 3));

```

# 5. Reverse a String

```
M1.const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new Error("Invalid input, please provide a string");
  }

  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
};

console.log(reverseString("hello"));
console.log(reverseString("nagaraj"));
console.log(reverseString("spyro"));
console.log(reverseString("hima"));

M2. const reverseString = (str) => {
  console.log(str.split("").reverse().join(""));
};

console.log(reverseString("hello"));
console.log(reverseString("nagaraj"));
console.log(reverseString("spyro"));
console.log(reverseString("hima"));

```
