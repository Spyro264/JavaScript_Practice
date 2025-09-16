const arr = ["apple", "banana", "cherry"];

const reverseArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let reversed = "";
    const res = arr[i];
    const upperLetter = res[0].toUpperCase() + res.slice(1);

    for (let j = upperLetter.length - 1; j >= 0; j--) {
      reversed = reversed + upperLetter[j];
    }

    result.push(reversed);
  }
  return result;
};

const result = reverseArray(arr);
console.log(result);
