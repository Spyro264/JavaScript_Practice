function Welcome(name, callback) {
  console.log(callback() + " " + name);
}

function greet() {
  return "hello";
}

Welcome("nagaraj", greet);

console.log("start");

setTimeout(() => {
  console.log("middle");
}, 2000);

console.log("end");
