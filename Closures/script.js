function outer() {
  let a = 100;

  function inner() {
    return a;
  }
  return inner();
}

const res = outer();
console.log({ res });
