const fibonacci = function (num) {
  let fib = 1;
  let firstPrev = 1;
  let secondPrev = 0;
  if (num == 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }
  let a = "asd";

  if (typeof num == "String") {
    Number(num);
  }
  for (let i = 2; i <= num; i++) {
    let cur = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = cur;

    // [1,1,2,3,5,8,13]
  }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
