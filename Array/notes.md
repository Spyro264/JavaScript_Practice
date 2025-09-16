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

```
