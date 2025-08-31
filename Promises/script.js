const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sucess");
  }, 1000);
});

promise
  .then((res) => {
    console.log({ res });
  })
  .catch((error) => {
    console.log({ error: error.message });
  });
