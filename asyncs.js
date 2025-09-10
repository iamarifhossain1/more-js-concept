//synchronous

console.log("one");
console.log("two");

// setTimeout(callThree, 5000);

setTimeout(() => {
  console.log("this is new three inside set time out");
}, 4000);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

console.log("four");
console.log("five");

function callThree() {
  console.log("three");
}
