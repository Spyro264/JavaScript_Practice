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
