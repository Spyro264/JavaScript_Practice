const nums = [1, 1, 2, 2, 3, 4, 5, 4];

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 0; // pointer for unique position

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i]; // overwrite in place
    }
  }

  return k + 1; // number of unique elements
};

console.log(removeDuplicates(nums));
