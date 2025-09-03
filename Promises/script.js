console.log("start");

async function baz() {
  console.log("baz start");
  await Promise.resolve().then(() => console.log("promise inside await"));
  console.log("baz after await");
}

baz();

Promise.resolve().then(() => console.log("promise 1"));

console.log("end");

// start
// baz start
// end
// promise inside await
// promise 1
// baz after await
