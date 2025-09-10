console.log(1);
console.log(2);

const timeOutId = setTimeout(() => {
  console.log(3);
}, 4000);
const timeOutId2 = setTimeout(() => {
  console.log(33);
}, 4000);

console.log("Timeout Id:", timeOutId);

console.log(4);
console.log(5);
