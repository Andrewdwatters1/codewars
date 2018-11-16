// Product of consecutive Fib numbers 
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(prod) {
  let fibArray = [0];
  const phi = (1 + Math.sqrt(5)) / 2;
  for (let i = 2; Math.pow(fibArray[fibArray.length - 1], 2) / phi <= prod; i++) {
    fibArray = createBoundedFibArray(i);
    if (fibArray[fibArray.length - 1] * fibArray[fibArray.length - 2] === prod) {
      return [fibArray[fibArray.length - 2], fibArray[fibArray.length - 1], true];
    }
  }
  return [fibArray[fibArray.length - 2], fibArray[fibArray.length - 1], false];
}

function createBoundedFibArray(numValues) {
  const fibNums = [0, 1];
  for (let i = 0; i <= numValues; i++) {
    fibNums.push(fibNums
      .slice(i, i + 2)
      .reduce((a, b) => a + b));
  }
  return fibNums;
}