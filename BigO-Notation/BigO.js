function addUpTo(no) {
  let total = 0;
  for (let i = 0; i <= no; i++) {
    total += i;
  }
  return total;
}
function addUpToV2(n) {
  let total = (n * (n + 1)) / 2;
  return total;
}

let t1 = performance.now();
// addUpTo(6);
addUpToV2(6);
let t2 = performance.now();

console.log("Time elapsed is " + (t2 - t1));
