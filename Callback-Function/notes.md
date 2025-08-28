# WHAT IS CALLBACK FUNCTION ?

- A callback fun is a fun which is passed as an argument to another fun later called in the outer function.
- Callbacks can be synchronous or asynchronous.
  1. Synchronous Callback.
  2. Asynchronous Callback.

# Example for Callback.

- You gave a friend a task.
- once food is ready call me ( task ).
- once food is ready he calls you that is calling back a `Callback`

## Synchronous Callback

```

function Welcome(name, callback) {
  console.log(callback() + " " + name);
}

function greet() {
  return "hello";
}

Welcome("nagaraj", greet);

```

## Asynchronous Callback

```
console.log("start");

setTimeout(() => {
  console.log("middle");
}, 2000);

console.log("end");

```

# QUESTION 1

```
function step1(cb) {
  setTimeout(function () {
    console.log("Step 1 done");
    cb();
  }, 500);
}

function step2(cb) {
  setTimeout(function () {
    console.log("Step 2 done");
    cb();
  }, 300);
}

function step3(cb) {
  setTimeout(function () {
    console.log("Step 3 done");
    cb();
  }, 100);
}

step1(function () {
  step2(function () {
    step3(function () {
      console.log("All steps completed");
    });
  });
});


```

## OUTPUT

```
- Step 1 `done`
- Step 2 `done`
- Step 3 `done`

 All Steps Completed
```
