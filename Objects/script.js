const keys = ["name", "age", "country"];
const values = ["Alice", 25, "USA"];

const createObject = (keys, vlaues) => {
  const person = new Object();
  keys.map((item, index) => {
    person[item] = vlaues[index];
  });

  return person;
};

const user = createObject(keys, values);
console.log({ user });

// const { A: x, B: y } = { A: 1 };
// console.log(x, y);
