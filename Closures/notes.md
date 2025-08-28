## WHAT IS CLOSURE ?

- A closure is a concept in JavaScript where an inner function remembers and can access variables from its outer function’s lexical scope, even after the outer function has finished executing.

```
function outer() {
  let a = 100;

  function inner() {
    return a;
  }
  return inner();
}

const res = outer();
console.log({ res });

```
