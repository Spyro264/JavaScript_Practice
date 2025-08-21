const elements = [1, 2, 3, 45, 6, 7];

function sumOfAllElements(elements) {
  const length = elements.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + elements[i];
  }
  console.log({ sum });
}

sumOfAllElements(elements);

// here instead of using elements.length i used a seprate variable why coz instead of recalculating the length on every loop i saved it seperately
// this optimizes a prgm little bit.
