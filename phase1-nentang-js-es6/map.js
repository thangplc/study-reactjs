const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 35, active: true },
  { id: 4, name: "David", age: 20, active: true },
  { name: "David", age: 20, active: true },
];

const rs = users?.map((item) => {
  return {
    idUser: item.id,
    nameUser: item.name,
    ageUser: item.age,
    active: item.active,
  };
});

console.log(rs);
