// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= 1;
//   }
//   return total;
// }

function factorial(num) {
  let total = num;
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return (total *= factorial(num - 1));
}

console.log(factorial(4));
