const sumOfNumbers = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum);
};

sumOfNumbers([1, 2, 3, 4, 5]);
