# Question 1

```
console.log("start");

async function foo() {
  console.log("foo start");
  return 42;
}

foo().then((val) => console.log("foo resolved:", val));

console.log("end");
```

## output

```
start
foo start
end
 foo resolved 42
```

# Question 2

```
console.log("start");

async function bar() {
  console.log("bar start");
  await 1;
  console.log("bar after await");
}

bar();

console.log("end");
```

## output

```
start
 barstart
 end
 bar after await
```

# Question 3

```
console.log("start");

async function baz() {
  console.log("baz start");

  await Promise.resolve();
  console.log("baz after await");

  await Promise.resolve();
  console.log("baz after second await");
}

baz();

Promise.resolve().then(() => console.log("promise 1"));

console.log("end");
```

# output

```
start
baz start
end
baz after await
promise 1
baz after second await
```

# Question 4

```
async function a() {
  console.log("a start");
  await b();
  console.log("a after await");
}

async function b() {
  console.log("b start");
  await Promise.resolve();
  console.log("b after await");
}

a();
console.log("end of script");
```

## Output

````
a start
b start
end of script
b after await
a after awaut
```k
````

# Question 5

```
console.log("start");

async function taskA() {
  console.log("taskA start");

  await new Promise((resolve) => {
    console.log("creating promise in taskA");
    resolve();
  });

  console.log("taskA after await");
}

taskA();

Promise.resolve().then(() => console.log("promise 1"));

console.log("end");

```

## output

```

start
taskA start
creating promise in taskA
end
taskA after await
promise 1

```

# Question 6

```
console.log("start");

async function foo() {
  console.log("foo start");

  await Promise.resolve().then(() => console.log("promise inside await"));

  console.log("foo after await");

  setTimeout(() => console.log("timeout inside foo"), 0);
}

foo();

Promise.resolve().then(() => console.log("promise 1"));

setTimeout(() => console.log("timeout 1"), 0);

console.log("end");
```

## output

```
start
foo start
 end
 promise inside await
 promise 1
 foo after await
 timoeout 1
 "timeout inside foo
```

# Exmaple 7

```
async function hii() {
  console.log("one");
  await new Promise((resolve) => {
    console.log("two");
  });

  Promise.resolve(() => {
    console.log("three");
  });

  console.log("four");
}

hii();

```

## output

```
one
two
```

# Question 8

```
console.log("start");

async function bar() {
  console.log("bar start");
  await new Promise((resolve) => {
    console.log("creating promise in bar");
    setTimeout(() => {
      console.log("timeout in bar");
      resolve();
    }, 0);
  });
  console.log("bar after await");
}

bar();

console.log("end");


```

## output

```
start
bar start
creating promise in bar
end
timeout in bar
bar afetr await


```

# Question 9

```
console.log("start");

async function baz() {
  console.log("baz start");
  await Promise.resolve().then(() => console.log("promise inside await"));
  console.log("baz after await");
}

baz();

Promise.resolve().then(() => console.log("promise 1"));

console.log("end");
```

## output

```
start
baz start
end
promise inside await
promise 1
baz after await

```
