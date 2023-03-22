const printStringAsync1 = async (string) => {
  const executer = (resolve, reject) => {
    setTimeout(() => {
      if (typeof string === "string") {
        resolve(string);
      } else {
        reject("스트링이 아닙니다.");
      }
    }, 1000);
  };
  const result = new Promise(executer);
  const output = await result;
  console.log(output);
};
printStringAsync1("a");
printStringAsync1("b");
printStringAsync1("c");

const printStringAsync2 = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(string);
    }, 1000);
  });
};

// printStringAsync2("Hello, world!!!!!!!!!!!!!!!!!!!")

const printAll = async () => {
  await printStringAsync2("A");
  await printStringAsync2("B");
  await printStringAsync2("C");
};
printAll();
