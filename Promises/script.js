console.log("start");

async function taskA() {
  console.log("taskA start");

  await taskB();
  console.log("taskA after await 1");

  await Promise.resolve();
  console.log("taskA after await 2");
}

async function taskB() {
  console.log("taskB start");

  setTimeout(() => {
    console.log("timeout inside taskB");
    Promise.resolve().then(() => console.log("microtask inside timeout B"));
  }, 0);

  await new Promise((resolve) => {
    console.log("creating promise in taskB");
    resolve();
  });

  console.log("taskB after await");
}

taskA();

Promise.resolve().then(() => console.log("promise 1"));

setTimeout(() => console.log("timeout 1"), 0);

console.log("end");

// start
// taskA started
// taskB started
// creatig promise in taskB
// taskB after await
// taskA after await 1
// end
// taskA after await 2
// promise 1
// timeout inside taskB"
// microtask inside timeout B"
// timeout 1
