# What is Object ?

- Object is a collection of `key-value` pairs
- KEY : name of the `property`
- VALUE : The `data` or `information` associated with the property

# Creating Objects

## Using Object Literal

```
const person = {
    name:"spyro",
    age:25,
    address: "koppal"
}
```

## Using new Object() syntax

```
const student = new Object();
student.name = "nagaraj",
student.class = "10th",
student.age = 18

```

# Accessing Objects

- Dot Notation
- Bracket Notation

```
console.log(person.age) // 25
consloe.log(stident[name]) // nagaraj

```

# Deleting Object props

```
const person = [
  { nane: "nagaraj", age: 20 },
  { nane: "spyro", age: 20 },
];

delete person[0].nane;
console.log({ person });

```

# Object Methods

```
const person = {
  name: "spyro",
  greet: () => {
    console.log("hi");
  },
};
const { greet } = person;
greet();

```

# Object.keys()

```
const person = {
  name: "nagaraj",
  age: 20,
};

console.log(Object.keys(person));
```

# Object.values()

```
const person = {
  name: "nagaraj",
  age: 20,
};

console.log(Object.values(person));

```

# Object.entries()

- Returns an array of `key - value` pairs

```
const person = {
  name: "nagaraj",
  age: 20,
};

const arr = Object.entries(person).map(([key, value]) => {
  return { key, value };
});
console.log(arr);
```

# Object.freeze()

`Object.freeze()` makes an object immutable, meaning that its properties cannot be added, removed, or modified.

```
const person = {
  name: "nagaraj",
  age: 20,
};

Object.freeze(person);
person.name = "spyro";

```

# Object.assign()

```
const person = {
  name: "nagaraj",
  age: 20,
};

const student = {};

Object.assign(student, person);

console.log({ student });

```

# Prototypes and Inheritance

- Objects in JavaScript can inherit properties and methods from another object via prototypes. All JavaScript objects have an internal prototype ([[Prototype]]), which is a reference to another object.

- Prototype Chain: When you access a property or method of an object, JavaScript checks if the property exists in that object. If it doesn't, it looks up the prototype chain to find it.

- We can inherit properties and methods `Object.create` and `Object.setPrototypeOf`

```
const person = {
  name: "nagaraj",
  age: 20,
  greet: () => {
    console.log("hello");
  },
};

const student = Object.create(person);
console.log(student.age); // 20
```

```
const person = {
  name: "nagaraj",
  age: 20,
  greet: () => {
    console.log("hello");
  },
};

const student = {
  village: "koopal",
};

Object.setPrototypeOf(student, person);
student.greet(); // hello

```

# Question 1

```
const person = {
  name: "nagaraj",
  age: 20,
  greet() {
    console.log(`hello ${this.name}`);
  },
};

const student = Object.create(person);
student.name = "spyro";
student.greet(); /// hello spyro


```

# Question 2

```
const person = {
  name: "nagaraj",
  age: 20,
  greet() {
    console.log(`hello ${this.name}`);
  },
};

const student = person;

student.age = 30;
console.log(person.age); //30
console.log(student.age); // 30

```

# Question 3

```
const person = {
  name: "nagaraj",
  age: 20,
  numbers: [1, 2, 3, 4],
};

const copiedPerson = Object.assign({}, person);
copiedPerson.numbers.push(5);
console.log(copiedPerson); // [1,2,3,4,5]
console.log(person); // [1,2,3,4,5]

```

# Question 4

```
const app = {
  age: 20,
  hello: () => {
    console.log(`age ${this.age}`);
  },
};

app.hello(); // age undefined

```

# Question 5

You have two objects: one with user settings and another with default settings. You need to merge them, where the user’s settings should take priority over the default settings.

```
Approach 1

const defaultSettings = {
  theme: "light",
  notifications: true,
  language: "en",
};

const userSettings = {
  theme: "dark",
  language: "fr",
};

Object.keys(defaultSettings).forEach((key) => {
  if (!(key in userSettings)) {
    userSettings[key] = defaultSettings[key];
  } else {
    userSettings[key] = defaultSettings[key];
  }
});

const finalSettings = { ...userSettings, ...defaultSettings };
console.log(finalSettings);


```

# Question 6

```
Approach 2

const defaultSettings = {
  theme: "light",
  notifications: true,
  language: "en",
};

const userSettings = {
  theme: "dark",
  language: "fr",
};

Object.keys(defaultSettings).forEach((key) => {
  userSettings[key] = defaultSettings[key];
});

const finalSettings = userSettings;
console.log(finalSettings);


```

# Question 7

```
Approach 3

const defaultSettings = {
  theme: "light",
  notifications: true,
  language: "en",
};

const userSettings = {
  theme: "dark",
  language: "fr",
};

const finalSettings = { ...userSettings, ...defaultSettings };
console.log(finalSettings);


```

# Question 8

Given an object that contains both primitive values and nested objects, write a function to deep clone this object so that changes to the clone won’t affect the original object.

## First Approach

```
const original = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const cloned = structuredClone(original);
cloned.address.city = "koppal";
console.log(cloned);
console.log(original);

```

## Second Approach

```
const original = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const cloned = JSON.parse(JSON.stringify(original));
cloned.address.zip = 900;
console.log(original);
console.log(cloned);


```

# Question 9

You have a Car object and a ElectricCar object. The ElectricCar should inherit the properties of Car but have an additional method called charge(). Use Object.create() or Object.setPrototypeOf() to establish inheritance.

## Approach 1

```
const car = {
  brand: "Toyota",
  model: "Corolla",
  drive() {
    console.log("Driving the car...");
  },
};

const electricCar = {
  charge() {
    console.log("Charging the electric car...");
  },
};

const hi = Object.setPrototypeOf(electricCar, car);
hi.charge(); // Charging the electric car...
console.log(hi.brand); // Toyota
console.log(hi.model); // Corolla
hi.drive(); // Charging the electric car...

```

## Approach 2

```
const car = {
  brand: "Toyota",
  model: "Corolla",
  drive() {
    console.log("Driving the car...");
  },
};

const electricCar = {
  charge() {
    console.log("Charging the electric car...");
  },
};

const SuperCar = Object.create(car);

Object.assign(SuperCar, electricCar);

console.log(SuperCar.brand);
console.log(SuperCar.model);
SuperCar.drive();
SuperCar.charge();

```

# Question 10

You need to create an object dynamically based on user input, where the property names come from an array. Write a function that takes an array of strings and an array of corresponding values and creates an object.

## Approach 1

```
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

```

## Approach 2

```
const keys = ["name", "age", "country", "Position"];
const values = ["Alice", 25, "USA"];

let obj = {};
for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}

console.log(obj);

```

# Question 11

Group by age

```
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];

const groupByAge = (people) => {
  const group = {};
  people.map((item) => {
    if (!group[item.age]) {
      group[item.age] = [];
    }
    group[item.age].push(item);
  });
  return group;
};

console.log(groupByAge(people));


```

# Question 12

-Function to create a obj dynamically

```
const key = ["name", "address", "age"];
const value = ["nagaraj", "koppal", 20];

const createObject = (key, value, objName) => {
  const result = {};
  key.map((item, index) => {
    result[item] = value[index];
  });

  return { [objName]: result };
};

const obj = createObject(key, value, "person");
const obj1 = createObject(key, value, "student");
console.log(obj);
console.log(obj1);


```

# Question 13

-Write code to check if the property email exists in the object without throwing an error.

## APPROACH 1

```
const user = {
  name: "Alice",
  age: 25,
  city: "Bangalore",
};

const findProperty = (obj, propName) => {
  return Object.keys(obj).includes(propName);
};

const result = findProperty(user, "age");
console.log(result);

```

## APPROACH 2

```
const findProperty = (obj, propName) => propName in obj;

```

## APPROACH 3

```
const findProperty = (obj, propName) => obj.hasOwnProperty(propName);

```

# Question 14

```
const scores = {
  math: 90,
  english: 85,
  science: 92,
};

const sumOfValues = (obj) => {
  return Object.values(obj).reduce((acc, curr) => {
    let res = acc + curr;
    return res;
  });
};

const result = sumOfValues(scores);
console.log({ result });


```

# Question 15

-Convert it into an array of key-value pairs (like [["firstName", "John"], ...]).

```
const scores = {
  math: 90,
  english: 85,
  science: 92,
};

const hi = Object.entries(scores);
console.log(hi);

```

# Question 16

-Write a function getMarks(obj, subject) that returns the mark for a given subject dynamically.

```
const student = {
  name: "Ravi",
  marks: {
    math: 95,
    science: 88,
    english: 92,
  },
};

const getMarks = (student, sub) => {
  const { marks } = student || {};
  return marks[sub];
};
const res = getMarks(student, "math");
console.log(res);

```

# Question 17

- Flatten the obj

```
const user = {
  name: "Alice",
  address: {
    city: "Bangalore",
    pincode: {
      main: 560001,
      extra: 560002,
    },
  },
};

const flattenObject = (obj, parentKey = "", result = {}) => {
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  });
  return result;
};

const result = flattenObject(user);
console.log(result);


```

# Question 18

- Deep Equality Check

```
const a = { x: 1, y: { z: 2 } };
const b = { x: 1, y: { z: 2 }, d: 9 };

const isDeepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (obj1 === null || obj2 === null) return false;
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const firstObjKeys = Object.keys(obj1);
  const secondObjKeys = Object.keys(obj2);
  if (firstObjKeys.length !== secondObjKeys.length) return false;

  for (const key of firstObjKeys) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    const val1 = obj1[key];
    const val2 = obj2[key];

    if (typeof val1 === "object" && val1 !== null) {
      if (!isDeepEqual(val1, val2)) return false;
    } else {
      if (val1 !== val2) {
        return false;
      }
    }
  }

  return true;
};

const res = isDeepEqual(a, b);
console.log(res);


```

# Question 19

-Write a function to group students by grade:

```
const students = [
  { name: "Ravi", grade: "A" },
  { name: "Anu", grade: "B" },
  { name: "John", grade: "A" },
  { name: "Meena", grade: "C" },
];

const groupByGrade = (students) => {
  const group = {};
  students.forEach((item) => {
    if (!group[item.grade]) {
      group[item.grade] = [];
    }
    group[item.grade].push(item);
  });
  return group;
};

const result = groupByGrade(students);
console.log(result);


```

# Question 20

- rempove falsy values

```
const obj = {
  name: "Raj",
  age: 0,
  email: "",
  active: false,
  city: "Koppal",
};

const removeFAlsyValues = (obj) => {
  const res = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      res[key] = value;
    }
  });
  return res;
};

const result = removeFAlsyValues(obj);
console.log(result);

```

# Question 21

- Dynamic obj builder

```
const keys = ["id", "name", "age"];
const values = [1, "Ravi", 22];

const dynamicObjBuilder = (keys, values) => {
  const obj = {};
  keys.forEach((item, index) => {
    obj[item] = values[index];
  });
  return obj;
};

const result = dynamicObjBuilder(keys, values);
console.log(result);


```

# Question 22

Write a function countKeys(obj) that counts all keys in a nested object, no matter how deep.

```
const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
};

let count = 0;
const getAllKeys = (obj) => {
  if (typeof obj !== "object") return console.log("not an obj");

  Object.entries(obj).forEach(([key]) => {
    if (typeof obj[key] === "object") {
      count++;
      getAllKeys(obj[key]);
    } else {
      count++;
    }
  });
  return count;
};

const result = getAllKeys(obj);
console.log(result);


```

# Question 23

-Write a function deepMerge(obj1, obj2) that merges two objects recursively.

```
const obj1 = { a: 1, b: { x: 1 } };
const obj2 = { b: { y: 2 }, c: 3 };

const deepMerge = (obj1, obj2) => {
  const newObj = { ...obj1 }; // start with obj1’s keys

  Object.entries(obj2).forEach(([key, value]) => {
    if (
      typeof value === "object" &&
      value !== null &&
      typeof newObj[key] === "object" &&
      newObj[key] !== null
    ) {
      newObj[key] = deepMerge(newObj[key], value);
    } else {
      newObj[key] = value;
    }
  });

  return newObj;
};
const result = deepMerge(obj1, obj2);
console.log(result);


```
