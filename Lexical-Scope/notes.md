# WHAT IS LEXICAL SCOPE ?

- Lexical scope is the set of rules that determines or tells which variables a function can access . based on where the function is defined (written).

## Example

Family Tree Analogy

1.  GrandFather (Global Scope) → has some properties.

2.  Father (Outer Function) → can access his own properties and GrandFather’s.

3.  Son (Inner Function) → can access his own properties and both Father’s and GrandFather’s.

```

let grand_father = "wisdom"; // global scope

function father() {
  let fatherTrait = "discipline"; // outer scope

  function son() {
    let sonTrait = "energy"; // inner scope
    console.log({ grand_father }); // son can access grand_father behaviour
    console.log({ fatherTrait }); // son can access father behaviour
    console.log({ sonTrait }); // son can access his own behaviour
  }
  son();
}

father();

```

# Question 1

```

function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const fun = outer();
console.log(fun());
console.log(fun());
console.log(fun());

```

## Output

- Here outer fun has `let` variable initialized with 0.
- In inner function we are incrementing count using `count++`.
- When you do `count++`, count will still be 0 at that moment.
- Because `count++` means: return the current value, then increment.
- So the first return will be 0, then it becomes 1.
- On next calls it returns 1, 2, 3, ... one by one.

```
1
2
3

```

# QUESTION 2

```


function outer() {
  const msg = "Hello";

  function inner() {
    return msg + " World";
  }
  return inner;
}

const fn = outer();
console.log(fn());

```

## OUTPUT

```
Hello World

```

# QUESTION 3

```
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },

    decrement: function () {
      count--;
      return count;
    },
  };
}

const counter1 = createCounter();

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.decrement()); // 1 latest value

const counter2 = createCounter();
console.log(counter1.increment()); // 2
console.log(counter2.decrement()); // -1


```

## OUTPUT

- here on this console.log console.log(counter1.increment()); its loggin 1 why ?
- here we created 2 closure `counter1` and `counter2`.
- in `counter2` we are using `counter1.increment()` and we are getting 2
- y bcoz counter1 holds latest value . latest value of `couter1` is 1 and you are incrementing it again so you are getting 2

```
1
2
1

2
-1

```

# QUESTION 4

```
function outer() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log({ i });

      return i;
    });
  }
  return arr;
}

const res = outer();
console.log(res[0]());
console.log(res[1]());
console.log(res[2]());

```

## OUTPUT

```
3
3
3

```

# EXPLANATION

- here we thought output will br 0 1 2 but we got 3 3 3.
- boz you are pushing an function inside an array
- remeber the fucntion you are pushing inside an array returning i .
- which means you are not pushing a value you are pushing an function
- until you call the function it will hold i
- as we are using var and it is function scoped . all the functions means u pushed a fun 3 times in an array
- all 3 function holds referecne of i
- when loop finishes i will be 3
- and all functions you have pushed have reference of i so output will become 3
