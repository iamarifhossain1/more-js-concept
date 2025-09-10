const getData = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  console.log("Generate random number:", number);
  if (number > 5) {
    resolve({ number: number });
  } else {
    reject({ err: "Data is not available" });
  }
});

const getData2 = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  console.log("Generate random number2:", number);
  if (number > 5) {
    resolve({ number: number });
  } else {
    reject({ err: "Data is not available2" });
  }
});

const getData3 = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  console.log("Generate random number3:", number);
  if (number > 5) {
    resolve({ number: number });
  } else {
    reject({ err: "Data is not available3" });
  }
});

Promise.all([getData, getData2, getData3])
  .then((response) => {
    console.log(response);
  })

  .catch((error) => {
    console.log(error);
  });
