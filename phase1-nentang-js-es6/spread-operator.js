const a1 = [1, 2, 3];
const a2 = ["5", "6", "7"];
const a3 = [
  {
    id: 1,
    username: "thangplc",
  },
  {
    id: 2,
    username: "thangplc2",
  },
];

console.log(...a1);
console.log(...a2);
console.log(...a3);

console.log([...a1, ...a2, ...a3]);
