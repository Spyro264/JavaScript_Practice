console.log("start");

async function Hello() {
  console.log("one");
  await Promise.resolve("hi").then((res) => {
    console.log(res);
  });

  await new Promise((resolve) => {
    console.log("im inside");
    resolve();
  });

  console.log("100");
}

Hello();

console.log("end");

// start
// one
// end
// hi
// im inside
// 100
