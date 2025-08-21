const arr = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  console.log({ res });
}

console.log(reverseArray(arr));
