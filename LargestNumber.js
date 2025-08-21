const ele = [1, 45, 6, 7, 8, 99];
console.log(ele.length - 1);

function findLargest(ele) {
  let biggest = ele[0];
  for (let i = 1; i <= ele.length - 1; i++) {
    if (ele[i] > biggest) {
      biggest = ele[i];
    }
  }
  console.log({ biggest });
}

findLargest(ele);
