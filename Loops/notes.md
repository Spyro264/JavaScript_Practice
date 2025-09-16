# For Loop

- The classic loop. You control the start, condition, and increment manually.
- Good for when you know how many times you want to loop.
- Full control (you can skip indexes, break, etc.)

```
for (let i = 0; i < 5; i++) {
  console.log(i);
}


```

# ForEach()

- An array method, not a language loop. Runs a callback for each element in an array.
- ❌ Can’t `break` or `return` early (it always goes through all items).
- ❌ Works only on `arrays`, not `objects`

```
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((item, index) => {
  console.log(item);
});


```

## Try to return and see the output

```
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((item, index) => {
  if (item === 2) {
    return;
  }
  console.log(item);
});


```

## Output

```
1
3
4
5
5
6
```

# Explaination

- in the above code snippet i used return if it finds item === 2 .
- but in the ouput u cant see the 2 but still u are seeing 3 , 4 , 5 , 6 why.
- this proves that return wont work as expected in forEach
- While using foreach we dont have control to return or break.

# For...in Loop

- Loops through keys (property names) of an object.
- Good for objects.
- Gives property names.
- ❌ Not recommended for arrays (order is not guaranteed).

```
const obj = {
  name: "nagaraj",
  age: 20,
  address: "koppal",
};

for (let key in obj) {
  console.log(key + ":" + obj[key]);
}

```

# For...OF Loop

- Loops through values of an iterable (arrays, strings, maps, sets).
- Works on arrays, strings, sets, maps.
- Cleaner for values than for...in.
- ❌ Doesn’t directly give index (need entries() if you want index).

```
const arr = ["anmking", "bni", "c"];
for (let value of arr) {
  console.log(arr);
}

```

# Map

- Array method that transforms each element and returns a new array.
- Best for creating a new transformed array.
- ❌ Doesn’t break early.
-

```
const nums = [1, 2, 3, 4];
const result = nums.map((item) => {
  return item;
});
console.log(result);


```
