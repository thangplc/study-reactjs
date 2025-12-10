const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 35, active: true },
  { id: 4, name: "David", age: 20, active: true },
  { name: "David", age: 20, active: true },
];

// accumulator biến tích lũy, được trả về sau mỗi lần gọi hàm callback.
// currentValue phần tử của mảng đang được xử lý.
// index (Optional) chỉ số của phần tử trong mảng đang được xử lý.
// array (Optional) mảng hiện tại gọi hàm reduce().

const rs = users?.reduce((accumulator, currentValue) => {
  return accumulator + currentValue?.age;
}, []);

console.log(rs);

const pounds = [11, 21, 16, 19, 46, 29, 46, 19, 21];

const count = pounds.reduce( (data, pound) => {
  data[pound] = (data[pound] || 0) + 1 ;
  return data;
} , {})

console.log(count); // { '11': 1, '16': 1, '19': 2, '21': 2, '29': 1, '46': 2 }

