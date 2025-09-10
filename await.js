const loadData = async () => {
  console.log("One");
  console.log("Two");
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((data) => console.log("Data Got:", data));

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("Data Got:", data);

  console.log("Four");
  console.log("Five");
  console.log("Six");
};

// loadData();

const loadData2 = async () => {
  console.log("One");
  console.log("Two");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.m/todos/1");
    const data = await response.json();
    console.log("Data Got");
  } catch (error) {
    console.log("Error Happend");
  }

  console.log("Four");
  console.log("Five");
  console.log("Six");
};

loadData2();
