const items = ["car", "car", "bike", "bike", "plane", "plane"];

const countItems = (items) => {
  const res = {};
  items.forEach((item) => {
    if (!res[item]) {
      res[item] = 1;
    } else {
      res[item] = res[item] + 1;
    }
  });
  return res;
};

const res = countItems(items);
console.log(res);
