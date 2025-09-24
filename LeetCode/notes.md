# 1) Array Prototype Last

-Write code that enhances all `arrays` such that you can call the `array.last()` `method` on any array and it will `return` the `last element`. If there are no `elements` in the `array`, it should return `-1`.

You may assume the `array` is the output of JSON.parse.

-Example 1:

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.

Constraints:

arr is a valid `JSON array`
0 <= arr.length <= 1000

## Solution

```
Array.prototype.last = function() {

 const length = this.length;
  return length > 0 ? this[length - 1] : -1;
};

```

# 2) Counter

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns `1` more than the `previous` value every subsequent time it is called `(n, n + 1, n + 2, etc).`

Example 1:

Input:
n = 10
["call","call","call"]
Output: [10,11,12]
Explanation:
counter() = 10 // The first time counter() is called, it returns `n`.
counter() = 11 // Returns `1` more than the previous time.
counter() = 12 // Returns `1` more than the previous time.
Example 2:

Input:
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.

## Solution 1

```
var createCounter = function(n) {

    return function() {

        return n++;
    };
};

```

## Solution 2

```
var createCounter = function(n) {
    let count = n
    return function() {

        return count++;
    };
};

```

# 3) Sleep

Given a positive integer `millis`, write an `asynchronous` function that `sleeps` for millis `milliseconds`. It can `resolve` any value.

Note that minor `deviation` from `millis` in the actual sleep `duration` is acceptable.

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a `promise` that `resolves` after `200ms`.

## Solution

```
async function sleep(millis) {
   return new Promise((resolve)=>{
     setTimeout(()=>{
        console.log(millis);
        resolve();
     },millis)
   })

}

```

# 4) Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

Example 1:

Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr _ curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] _ nums[0] = 101
(101) + nums[1] _ nums[1] = 105
(105) + nums[2] _ nums[2] = 114
(114) + nums[3] \* nums[3] = 130
The final answer is 130.
Example 3:

Input:
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.

## Solution

```
var reduce = function(nums, fn, init) {
     let length = nums.length;
     let val = init;
    for(let i=0 ; i<length ; i++){
         val = fn(val , nums[i])
    }
    return val
};

```

# 5) Filter Elements from Array

Given an `integer` `array` arr and a filtering function `fn`, return a `filtered` array filteredArr.

The fn function takes `one` or `two` arguments:

`arr[i]` - number from the arr
i - index of `arr[i]`
`filteredArr` should only contain the `elements` from the `arr` for which the `expression` fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in `Array.filter method.`

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out

## Solution

```
var filter = function(arr, fn) {
    let length = arr.length;
     let newArr = [];
     for(let i=0 ; i<length ; i++){
         if(fn(arr[i] , i)) {
             newArr.push(arr[i])
         }
     }
     return newArr
};

```

# 6) Memoized Function

## Solution

```
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const memoizedFunction = (fn) => {
  let cache = {};

  return (...args) => {
    const key = args;

    if (cache[key]) {
      console.log("comming from cache memory");
      return cache[key];
    }

    const result = fn(...args);

    cache[key] = result;
    return result;
  };
};

const memo1 = memoizedFunction(add);
console.log(memo1(1, 3));
console.log(memo1(3, 1));
console.log(memo1(1, 3));
const memo2 = memoizedFunction(sub);
console.log(memo2(1, 3));
console.log(memo2(1, 3));
console.log(memo2(1, 3));
console.log(memo2(1, 3));


```

# 7) Apply Transform Over Each Element in Array

- Given an integer array `arr` and a mapping function `fn`, return a `new array `with a `transformation` applied to each element.

The returned `array` should be `created` such that r`eturnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

## Solution

```
var map = function(arr, fn) {
    let newArr = []
    for(let i=0 ; i<arr.length ; i++){
         const res = fn(arr[i],i);
         newArr.push(res)
    }
    return newArr
};

```

# 8) Counter II

-Write a function `createCounter`. It should accept an initial `integer` `init`. It should return an `object` with `three` functions.

The three functions are:

`increment`() increases the current value by `1` and then returns it.
`decrement`() reduces the current value by `1` and then returns it.
`reset`() sets the current value to init and then returns it.

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0

## Solution

```
var createCounter = function(init) {
    let initialVal = init
    const obj = {
          increment : function (){
            return  initialVal = initialVal + 1;
        },
        decrement : function (){
            return  initialVal = initialVal - 1
        },
        reset : function (){
            return  initialVal = init ;
        }
    }
    return obj;




};

```

# 9) Allow One Function Call

-Given a function `fn`, return a `new` `function` that is `identical` to the `original` function except that it ensures `fn` is called at `most once`.

The `first` time the returned `function` is called, it should return the same `result` as fn.
Every `subsequent` time it is called, it should return `undefined`.

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a _ b _ c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called

## Solution

```
var once = function(fn) {
    let called = false;
    return function(...args){
        if(!called){
            const res = fn(...args);
            called = true
            return res;
        }else{
            return undefined
        }
    }
};


```

# 10) Chunk Array

- Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's \_.chunk function.

Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
Example 2:

Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
Example 3:

Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.
Example 4:

Input: arr = [], size = 1
Output: []
Explanation: There are no elements to be chunked so an empty array is returned.

## Solution

```

var chunk = function(arr, size) {
    let result = [];
    for(let i = 0 ; i< arr.length ; i=i+size){
        result.push(arr.slice(i , i+size));
    }
    return result;
};

```
