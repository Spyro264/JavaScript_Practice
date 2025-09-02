# WHAT IS PROMISE ?

- Promise is an object that represents a value that will be availaibale in the future ( either success or failure).
- in simpler words promise is like a real word promise made by people either they will fullfill the promise or may not . but definetly we will recieve somwthing if priomise is made.
- once you use a prmoise definetly you are getting something in return either success or failure .

## Example

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sucess");
  }, 1000);
});
```

# states of Promise

- `Pending` = initial state ( waiting )
- `Fullfilled` = operation completed successfully (resolved called)
- `reject` = operation failed (reject called)

# Problems Before Promise

- Java Script is a `single threaded` . only one task runs at a time.
- when we do something that takes time ( fetching api etc ) . if js waits it woul lead to freeze in ui/ browser.
- Before `promises` we have `callbacks` , they are hard read and understandable.

## Callback Hell

```
getUser(1, () => {
  getProduct(2, () => {
    getFormControlLabelUtilityClasses(300, () => {
      console.log("paid");
    });
  });
});
```

# Promise Chaining

- `Promise Chaining` is the process of executing multiple `asynchronous` operations one after the other.
- Where each `operation` starts after the completion of pervious operation.
- We can achieve `promise chaining` by `.then()` and `.catch()`.
- Each `.then()` returns a `new promise` allowing for chaining.

## Example

```
const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ user_name: "nagaraj", id: 264 });
    }, 1000);
  });
};

const getPosts = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3"]);
    }, 2000);
  });
};

const getComments = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["comment1", "comment2"]);
    }, 3000);
  });
};

getUser()
  .then((user) => {
    console.log({ user });
    return getPosts(user);
  })
  .then((post) => {
    console.log({ post });
    return getComments(post);
  })
  .then((comnt) => {
    console.log({ comnt });
  });

```

# Promise.all()

- `promise.all `is an method on `Promise` object
- `promise.all` is used to handle multiple asynchronous task together.
- Takes an array of `promises`
- Returns single array
- Resolves only when all `promises` succeed
- if one promise rejects whole `promise.all` rejects immediatetly

## Example

```
const p1 = Promise.resolve(10);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log({ res });
  })
  .catch((err) => {
    console.log({ err });
  });

```

# Promise.race()

- `Promise.race` is a method of `promise` object
- which takes array of `promises`
- returns a `promise` that resolves or rejects with the first promise to settle.
- In simpler words it will return the first `resolved` or `rejected` promise.

## Example 1

```
const p1 = Promise.resolve(10);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(90);
  }, 3000);
});
const p3 = Promise.resolve(30);

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log({ res });
  })
  .catch((err) => {
    console.log({ err });
  });

```

## output

- In the above code it will return `10` as output
-

## Example 2

```
const p1 = Promise.reject(10);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(90);
  }, 3000);
});
const p3 = Promise.resolve(30);

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log({ res });
  })
  .catch((err) => {
    console.log({ err });
  });

```

## Output

- In the above code output will be `10`
- `promise.race()` just cares the first setteled `promise`

# Promise.allSetteled()

- Takes an `array` of `promises`.
- waits for all `promises` to retrun.
- Returns Promise with `status` + `value` for each promise

## Example 3

```
const p1 = Promise.resolve(10);
const p2 = Promise.reject("something wrong");
const p3 = Promise.resolve(200);
const p4 = Promise.reject(200);

Promise.allSettled([p1, p2, p3, p4])
  .then((res) => console.log({ res }))
  .catch((err) => console.log({ err }));
```

## Output

```
0: {status: 'fulfilled', value: 10}
1: {status: 'rejected', value: "something wrong}
2: {status: 'fulfilled', value: 200}
3: {status: 'fulfilled', value: 200}


```

# Promise.any()

- Takes an array of `promises`
- Resolves with the first `promise` that fulfills.
- if All promises rejects returns `AggregateError`

## Example 4

```
const p1 = Promise.reject("something wrong");
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(200);

Promise.any([p1, p2, p3])
  .then((res) => console.log({ res }))
  .catch((err) => console.log({ err }));

```

## Output

```
res:20
```

## Example 4

```
const p1 = Promise.reject("something wrong");
const p2 = Promise.reject(20);
const p3 = Promise.reject(200);

Promise.any([p1, p2, p3])
  .then((res) => console.log({ res }))
  .catch((err) => console.log({ err }));

```

# Output

```
AggregateError: All promises were rejected
```

## Example 5

```
Promise.resolve(5)
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num + 3;
  })
  .then((ouput) => {
    console.log({ ouput });
  })
  .catch((err) => {
    console.log({ err });
  });


```

## output

```
13
```

## Example 6

```
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hiii");
  }, 300);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("bye");
  }, 100);
});

Promise.race([p1, p2]).then((res) => {
  console.log({ res });
});

```

## Output

```
bye
```

## Explaination

- above snippets output will by `bye` coz
- p1 resolves `Hi` after 300ms
- p2 resolves `bye` after 100ms
- we already know race will return first setteled promise
- so we will get `bye` as output.

## Example 7

```
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("❌ Error from p1"), 200);
});

const p2 = new Promise(function (resolve) {
  setTimeout(() => resolve("✅ Success from p2"), 400);
});

Promise.race([p1, p2])
  .then(function (result) {
    console.log("Winner:", result);
  })
  .catch(function (err) {
    console.log("Error:", err);
  });
```

## output

```
"❌ Error from p1"
```

## Example 8

```
Promise.resolve(42)
  .then(function (val) {
    console.log("Step 1:", val);
    throw new Error("Something went wrong!");
  })
  .then(function (val) {
    console.log("Step 2:", val);
  })
  .catch(function (err) {
    console.log("Caught:", err.message);
  })
  .then(function () {
    console.log("Step 3: Finished");
  });
```

## output

```
Step 1: 42
Caught: Something went wrong!
Step 3: Finished
```

## Example 9

```
const p1 = Promise.resolve("A");
const p2 = Promise.reject("B");
const p3 = Promise.resolve("C");

Promise.allSettled([p1, p2, p3]).then(function (results) {
  console.log(results);
});
```

## output

```
0: {status: 'fulfilled', value: "A"}
1: {status: 'rejected', value: "B"}
2: {status: 'fulfilled', value: "C}

```

## Example 10

```
console.log("hii");

setTimeout(() => console.log("settime"), 0);

Promise.resolve()
  .then(() => {
    console.log("promise");
    return Promise.resolve("inner");
  })
  .then((val) => {
    console.log({ val });
  });

console.log("end");

```

## output

```
hi
end
promise
inner
settime

```

## Question 10

```
async function test() {
  return 123;
}

test().then((val) => console.log("Value:", val));

console.log("Outside");

```

## output

```
Outside
Value: 123
```

## Example 11

```
console.log("start");

setTimeout(() => {
  console.log("timeout 1");
  Promise.resolve().then(() => console.log("promise inside timeout 1"));
}, 0);

setTimeout(() => {
  console.log("timeout 2");
}, 0);

Promise.resolve().then(() => console.log("promise 1"));

Promise.resolve().then(() => {
  console.log("promise 2");
  setTimeout(() => console.log("timeout 3"), 0);
});

console.log("end");

```

## output

```
start
end
promise 1
promise 2
timeout 1
promise inside timeout 1
timeout 2
timeout 3

```

## Example 12

```
console.log("start");

setTimeout(() => {
  console.log("timeout 1");
}, 0);

async function foo() {
  console.log("foo start");
  await Promise.resolve();
  console.log("foo after await");
}

foo();

Promise.resolve().then(() => console.log("promise 1"));

setTimeout(() => {
  console.log("timeout 2");
}, 0);

console.log("end");


```

## output

```
start
foo start
end
foo after await
promise 1
timeout 1
timeout 2
```

## Example 13

```
console.log("start");

async function demo() {
  console.log("demo start");

  await Promise.resolve();
  console.log("after microtask await");

  await new Promise((resolve) => setTimeout(resolve, 0));
  console.log("after macrotask await");
}

demo();

Promise.resolve().then(() => console.log("promise 1"));

setTimeout(() => console.log("timeout 1"), 0);

console.log("end");
```

## output

```
start
demo start
end
after microtask await
promise 1
after macrotask await
timeout 1
```

## example 15

```
console.log("start");

async function alpha() {
  console.log("alpha start");

  await beta();
  console.log("alpha after await 1");

  await Promise.resolve();
  console.log("alpha after await 2");
}

async function beta() {
  console.log("beta start");

  setTimeout(() => console.log("timeout inside beta"), 0);

  await Promise.resolve();
  console.log("beta after await");
}

alpha();

Promise.resolve().then(() => console.log("promise 1"));

setTimeout(() => console.log("timeout 1"), 0);

console.log("end");
```

## output

```
start
alpha start
beta start
end
beta after await
promise 1
alpha after await 1
alpha after await 2
timeout inside beta
timeout 1
```
