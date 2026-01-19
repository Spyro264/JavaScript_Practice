// console.log("0" == false); // true
// console.log("0" === false); // false

// console.log([null] == 0); // true
// console.log([undefined] == 0); // true

// console.log([undefined].toString()); // empty
// console.log([null].toString()); // empty
// console.log([0].toString()); //

// console.log([1, 2] == "1,2"); // true
// console.log([] == ![]); // true
// console.log([[]] == ""); // true
// console.log([,] == 0); // true

// console.log(null == false); // false
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(undefined == false); // false

// console.log(null < 1); // true
// console.log(null > -1); // true
// console.log(undefined < 1); // false
// console.log(undefined > -1); // false

// console.log("0" == false); // true
// console.log("0" == true); // false
// console.log("" == false); // true
// console.log(" " == false); // true

const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new Error("Invalid input, please provide a string");
  }

  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};
console.log(reverseString(908));
console.log(reverseString("nagaraj"));
console.log(reverseString("spyro"));
console.log(reverseString("hima"));
