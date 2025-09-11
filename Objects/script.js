const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];

const groupByAge = (people) => {
  const group = {};
  people.map((item) => {
    if (!group[item.age]) {
      group[item.age] = [];
    }
    group[item.age].push(item);
  });
  return group;
};

console.log(groupByAge(people));
