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
