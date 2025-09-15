const obj = { a: 1, b: 2, c: 1, a: 3 };

const invertObject = (obj) => {
  const newObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (!newObj[key]) {
      newObj[key] = value;
    } else {
      newObj[key] = value;
    }
  });
  return newObj;
};

const res = invertObject(obj);
console.log(res);
