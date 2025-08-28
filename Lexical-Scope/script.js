function timer() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

timer();
