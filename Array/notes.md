# What is Array ?

- `Array` is an `ordered` collection of `values`
- `Array` in js are `objects`.
- `Arrays` are used to store strings , objects , numbers or mixed values

# Creating an Array

## Array literal

```
const arr = [1, 2, 3, 4];
```

## Array Constructor

```
const arr = new Array(5); // created an array with length 5 but non values

const arr = new Array(1, 2, 3, 4, 5); // works like literal

```

## Array.of

- `Array.of()` is a static method on the Array `constructor`.
- It creates a new array instance with whatever arguments you pass in, treating each argument as an element.
- `Array.of(3) `→ makes an `array` with one element: 3 → `[3]`
- `Array.of(1,2,3)` → makes an array with three elements → `[1,2,3]`

```
console.log(Array.of(4)); // 4
console.log(Array.of(1, 2, 3, 4, 5)); // 1 2 3 4 5

```

## Array.from()

- `Array.from()` is a static method that creates a real `array` from:
- `Array-like `objects (anything with a `length` and `indexed` elements, like arguments or {length: 3}).
- Iterables (like strings, Sets, Maps).

```
console.log(Array.from("spyro")); // [ 's', 'p', 'y', 'r', 'o' ]
console.log(Array.from({ length: 5 })); // [ undefined, undefined, undefined, undefined, undefined ]
```

# Mutating vs Non-mutating Methods

- Mutating methods change the original array (be careful). Non-mutating return a new array or value.

## Mutating methods

- `push() `= add to end, returns new length.
- `pop()` = removes element from last
- `shift()` = remove first (O(n)), returns removed item.
- `unshift()` = add to front (O(n)).
- `splice()` = remove/insert at arbitrary position (O(n)).
- `sort()` = sorts in place.
- `reverse()` = reverses in place.

## Non-mutating methods

- `map()` = return new array
- `filter()` = returns new array with matching elements
- `slice()` = shallow copy portion.
- `concat()` = returns new array combining.
- `reduce()` = reduce to single value (sum, etc).
- `flat()` / `flatMap()` = flattening.

# Question 1

const arr = [1,,3,,5]; // note the holes

// Task:
// 1. Use forEach to log each element
// 2. Use map to double each element
// 3. Observe the difference in outputs

```
arr.forEach((item) => {
  console.log(item);  // 1 2 3
});

const res = arr.map((item) => {
  return item * item;
});
console.log(res);
[ 1, <1 empty item>, 4, <1 empty item>, 9 ]
```

## Explanation

- forEach skips the holes (doesn’t call the callback for empty slots.)
- same as forEach even map skips the whole but while returning new array it keeps the holes

# Question 2

```
const obj = { val: 1 };
const arr = [obj, obj, { val: 2 }];

obj.val = 10;
console.log(arr); //  const obj = { val: 1 };
const arr = [obj, obj, { val: 2 }];

obj.val = 10;
console.log(arr);


```

# Question 3

- Will original array change ?

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const res = arr
  .filter((item) => {
    return item % 2 === 0;
  })
  .map((item) => {
    return item * item;
  })
  .reverse();

console.log(res); //[ 64, 36, 16, 4 ]
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]


```

# Question 4

-const arr = [1, [2, 3], [4, [5, 6]], 7];
Task:

1.  Flatten only one level and remove any non-number elements.
2.  Then double all numbers.

```
const arr = [1, [2, 3], [4, [5, 6]], 7];

const flattenArray = (arr) => {
  const newArr = [];

  const flatten = arr.flat();

  flatten.forEach((item) => {
    if (Array.isArray(item)) {
      const res = flattenArray(item);
      newArr.push(...res);
    } else {
      newArr.push(item * 2);
    }
  });
  return newArr;
};

const result = flattenArray(arr);
console.log(result);

```

# Question 5

-const arr = [1,2,3,4,5,6,7,8];
// Task:
// 1. Double every alternate element starting from index 0
// 2. Keep other elements as-is
// 3. Return the new array
// Hint: Use map and index

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const result = arr.map((item, index) => {
  if (index % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});

console.log(result);


```

# Question 6

-const arr = [1,0,2,0,3,0,4];
// Task:
// 1. Move all zeros to the end of the array
// 2. Maintain the relative order of non-zero elements

```
const arr = [1, 0, 2, 0, 3, 0, 4];
const moveAllZeros = (arr) => {
  const nonZeros = arr.filter((item) => item !== 0);
  const zeros = arr.filter((item) => item === 0);
  const result = [...nonZeros, ...zeros];
  return result;
};

const result = moveAllZeros(arr);
console.log(result);


```

# Question 7

-const arr = [1,2,3,4,5];
// Task:
// 1. Create a new array where each element is the sum of all previous elements including itself
// 2. Result: [1,3,6,10,15]

```

const arr = [1, 2, 3, 4, 5];

const runningSum = (arr) => {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    const res = arr.slice(0, i);
    const add = res.reduce((acc, num) => {
      return (acc = acc + num);
    }, 0);

    newArr.push(arr[i] + add);
  }
  return newArr;
};

const res = runningSum(arr);
console.log(res);

```

# Question 8

-const arr = [1,2,3,2,4,5,1];
// Task:
// 1. Find all duplicate numbers
// 2. Return an array of duplicates without repeating duplicates

```
const list = [1, 2, 3, 2, 4, 5, 1];

const removeDuplicates = (list) => {
  const obj = {};

  list.forEach((item) => {
    console.log(obj[item]) || 0;
    obj[item] = (obj[item] || 0) + 1;
  });
  return obj;
};

const res = removeDuplicates(list);
console.log(res);


```

# Question 9

-const arr = ["apple", "banana", "cherry"];
// Task:
// 1. Capitalize first letter of each string
// 2. Reverse the string
// 3. Return new array

```

const arr = ["apple", "banana", "cherry"];

const reverseArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let reversed = "";
    const res = arr[i];
    const upperLetter = res[0].toUpperCase() + res.slice(1);

    for (let j = upperLetter.length - 1; j >= 0; j--) {
      reversed = reversed + upperLetter[j];
    }

    result.push(reversed);
  }
  return result;
};

const result = reverseArray(arr);
console.log(result);


```

# Question 10

-Take an array of numbers.
👉 Return a new array where:
All numbers are doubled
Only keep numbers greater than 10

```
const doubleAndReturn = (arr) => {
  const filteredArray = arr.map((item) => {
    const doubled = item * 2;
    return doubled;
  });

  return filteredArray.filter((item) => item > 10);
};

const result = doubleAndReturn(arr);
console.log(result);


```

# Question 11

- Given a nested array, flatten it one level only, and then return a new array with each value squared.

# Question 12

- CamelCAse

```
const testCase1 = "delay charges hi";

const camelCase = (testCase1) => {
  let finalResult = "";
  const splittedWords = testCase1.split(" ");

  for (let i = 0; i < splittedWords.length; i++) {
    const words = splittedWords[i];
    const result =
      i > 0 ? words[0].toUpperCase() + words.slice(1) : splittedWords[i];

    finalResult = finalResult + result;
  }
  return finalResult;
};

const result = camelCase(testCase1);
console.log(result);


```

# Question 13

- pascal Case

```

const testCase1 = "delay charges hi";


const pascalCase = (testCase1) => {
let finalResult = "";
const splittedWords = testCase1.split(" ");

for (let i = 0; i < splittedWords.length; i++) {
const words = splittedWords[i];
const result = words[0].toUpperCase() + words.slice(1);

    finalResult = finalResult + result;

}
return finalResult;
};

const result = pascalCase(testCase1);
console.log(result);

```

# Question 14

- kebab-case

```
const testCase1 = "delay charges hi";

const kebabCase = (testCase1) => {
  const str = testCase1.toLowerCase();

  return str.split(" ").join("-");
};

const result = kebabCase(testCase1);
console.log(result);


```

# Question 15

- sake_case

```
const testCase1 = "delay charges hi hello there spyro";

const snakeCase = (testCase1) => {
  const str = testCase1.toLowerCase();

  return str.split(" ").join("-");
};

const result = snakeCase(testCase1);
console.log(result);
```

# Question 16

- grpupBY

```

const employeeList = [
  { id: 1, name: "Arun", departmant: "Software" },
  { id: 2, name: "Pavani", departmant: "HR" },
  { id: 3, name: "Rutuja", departmant: "HR" },
  { id: 4, name: "Ammar", departmant: "Software" },
  { id: 5, name: "Meghna", departmant: "Marketing" },
  { id: 6, name: "Nagraj", departmant: "Software" },
];

const groupBy = (emp) => {
  const list = {};
  const res = emp.forEach((item) => {
    if (!list[item.departmant]) {
      list[item.departmant] = item;
    } else {
      list[item.departmant] = item;
    }
  });
  return list;
};

const result = groupBy(employeeList);
console.log(result);

```

# Question 17

-fibonacci

```

const fibonacci = (n) => {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  const res = result.toString();

  return res;
};

const res = fibonacci(n);
console.log(res);
```

```
const fibonacci = (n) => {
  let num1 = 0;
  let num2 = 1;

  for (let i = 0; i < n; i++) {
    console.log(num1);

    let temp;
    temp = num1;
    num1 = num2;
    num2 = num1 + temp;
  }
};

const res = fibonacci(5);
console.log(res);


```

# Question 18

- count the items

```
const items = ["car", "car", "bike", "bike", "plane", "plane"];

const countItems = (items) => {
  const res = {};
  items.forEach((item) => {
    if (!res[item]) {
      res[item] = 1;
    } else {
      res[item] = res[item] + 1;
    }
  });
  return res;
};

const res = countItems(items);
console.log(res);


```

# Question 19

-sum of array

```

```

# Question 20

- revers num

```
const num = 345;

const reverseInteger = (num) => {
  let n = num;
  let result = 0;
  while (n > 0) {
    const digit = n % 10;
    result = result * 10 + digit;
    n = Math.floor(n / 10);
  }
  return result;
};

const res = reverseInteger(num);
console.log(res);

```

# Question 21

- prime num

```

```

# Question 22

- group by length

```

const arr = ["hi", "sun", "cat", "apple", "dog", "banana"];

const groupByLength = (arr) => {
  const obj = {};

  arr.forEach((item) => {
    if (!obj[item.length]) {
      obj[item.length] = [];
    }
    obj[item.length].push(item);
  });
  return obj;
};

const res = groupByLength(arr);
console.log(res);

```

# Question 23

- foo-bar

```
const num = 15;

const findFooBar = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("foo-bar");
    } else if (i % 5 === 0) {
      console.log("bar");
    } else if (i % 3 === 0) {
      console.log("foo");
    } else {
      console.log(i);
    }
  }
};

const res = findFooBar(num);

```

# Question 24

- breaup Question

```
const str = "abcdefghijklmnopqrstuvwxyz";

const divideandrule = (str, breakup) => {
  if (breakup === 0 || !breakup) return;
  if (typeof str !== "string") return;

  let hey = str;

  while (hey.length > 0) {
    console.log(hey.slice(0, breakup));
    hey = hey.slice(breakup);
  }
};

const res = divideandrule(str, 4);

```

# Question 25

- Zig Zag Merge

```
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d"];

const zigZagMerge = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== undefined) newArr.push(arr1[i]);
    if (arr2[i] !== undefined) newArr.push(arr2[i]);
  }
  return newArr;
};

const res = zigZagMerge(arr1, arr2);
console.log(res);


```

# Question 26

- Number masking

```
const str = "1234567890123456";

const numberMasking = (str, breakup) => {
  const visibleNumber = str.slice(-breakup);
  let res = "";
  const maskedNumber = str.length - visibleNumber.length;

  for (let i = 0; i < maskedNumber; i++) {
    res = res + "*";
  }
  return res + visibleNumber;
};

const res = numberMasking(str, 8);
console.log(res);



```

# Question 27

- Input: "a3b2c"
  Output: "aaabbc"

```
const arr = "a3b2c6";

const expandStringNumbers = (arr) => {
  let str = arr;
  let newStr = "";
  while (str.length > 0) {
    const words = str.slice(0, 2);
    if (words.length === 2) {
      newStr = newStr + words[0].repeat(Number(words[1]));
    } else {
      newStr = newStr + words[0];
    }

    str = str.slice(2);
  }
  return newStr;
};

const res = expandStringNumbers(arr);
console.log(res);


```

```
const arr = "xyz";

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
    } else {
      newStr = newStr + char;
    }
  }

  if (currentChar) {
    newStr = newStr + currentChar;
  }

  return newStr;
};

const res = expandStringNumbers(arr);
console.log(res);

```

# Question 28

- Two Sum

```
const arr = [1, 2, 3, 4, 5, 6];
let target = 9;

const findTargetIndex = (arr, target) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        newArr.push([i, j]);
      }
    }
  }
  return newArr;
};

const res = findTargetIndex(arr, target);
console.log(res);

```

# Question 29

- Rotate Array

```
const arr = [1, 2, 3, 4, 5];
const steps = 2;

const rotateArray = (arr, steps) => {
  let newArr = [];
  const targetedElements = arr.slice(-steps);
  newArr.push(...targetedElements);

  for (let i = 0; i < arr.length - steps; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const res = rotateArray(arr, steps);
console.log(res);

```

# Question 30

- Missing Number

```
const arr = [1, 2, 3, 4, 7];

const missingNumber = (arr) => {
  let missedNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    missedNum = missedNum + 1;

    if (!arr.includes(missedNum)) {
      missedNum = missedNum;
      return missedNum;
    }
  }
};

const res = missingNumber(arr);
console.log(res);


```

# Question 31

- isSame

```
const str1 = "dog";
const str2 = "bod";

const isSame = (str1, str2) => {
  if (str1.length !== str2.length) return "str not equal";

  const sortedStr1 = str1.split("").sort();
  const sortedStr2 = str2.split("").sort();
  for (let i = 0; i < sortedStr1.length; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }
  return true;
};

const res = isSame(str1, str2);
console.log(res);


```
