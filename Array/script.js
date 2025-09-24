const arr = [1, 2, 3, 4, 7];

const missingNumber = (arr) => {
  let missedNum = arr[0];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    missedNum = missedNum + 1;

    if (!arr.includes(missedNum)) {
      console.log(missedNum);
      newArr.push(missedNum);
      missedNum = missedNum;
      return missedNum;
    }
  }
};

const res = missingNumber(arr);
console.log(res);
