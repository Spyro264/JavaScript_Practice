async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(millis);
      resolve();
    }, millis);
  });
}

sleep(200);
