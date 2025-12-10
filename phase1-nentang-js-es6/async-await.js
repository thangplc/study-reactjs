const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 35, active: true },
  { id: 4, name: "David", age: 20, active: true },
  { id: 5, name: "David", age: 20, active: true },
];

const fetchUserId = (id) => {
    console.table(users.find(item => item.id === id).id);
}

const fetchUserName = (id) => {
    console.table(users.find(item => item.id === id).name);
}

const fetchUserAge= (id) => {
    console.table(users.find(item => item.id === id).age);
}

setTimeout(() => fetchUserId(1), 3000)
setTimeout(() => fetchUserName(1), 1000)
setTimeout(() => fetchUserAge(1), 1000)


// console.log(fetchUser(1));
