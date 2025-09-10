const getData = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  console.log("Generate random number:", number);
  if (number > 5) {
    resolve({ number: number });
  } else {
    reject({ err: "Data is not available" });
  }
});

getData
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });
