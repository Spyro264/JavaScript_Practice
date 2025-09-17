# Question 1

- Revrse a String

```
const str = "nagaraj";

const reverseString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

const res = reverseString(str);
console.log(res);

```

# Question 2

- Count vowels in a String

```
const str = "nagaraj";

const findVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

const res = findVowels(str);
console.log(res);
```

# Question 3

- Check if a string is a palindrome

```
const str = "nagaraj";

const hi = Math.ceil(str.length / 2);
console.log({ hi });

const palindrome = (str) => {
  let newStr = "";
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    newStr = newStr + str[i];
  }
  if (newStr !== str) {
    return false;
  }
  return true;
};

const res = palindrome(str);
console.log(res);
```

# Question 4

-Find the first non-repeating character

```

```
