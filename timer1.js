let args = process.argv.slice(2);
console.log(args);

const timer = (args) => {
  for (const number of args) {
    let newNum = Number(number);
    if (!isNaN(newNum) && newNum > 0) {
      setTimeout(() => {
        process.stdout.write(".");
      }, newNum * 1000);
    }
  }
};

timer(args);
