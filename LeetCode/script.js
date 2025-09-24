const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 4;

function newArr(arr, target) {
  const res = [];
  for (let i = 0; i < arr.length; i = i + target) {
    console.log({ tar: target });

    res.push(arr.slice(i, i + target));
  }
  return res;
}

console.log(newArr(arr, target));
