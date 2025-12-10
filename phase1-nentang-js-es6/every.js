const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 35, active: true },
  { id: 4, name: "David", age: 20, active: true },
  { name: "David", age: 20, active: true },
];

// check all item map the condition
const rs = users?.every((item) => item.id);

console.log(rs);
