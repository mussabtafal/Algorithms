function areThereDuplicates() {
  let frequencyC1 = {};
  for (let character of arguments) {
    frequencyC1[character] = (frequencyC1[character] || 0) + 1;
  }
  for (const key in frequencyC1) {
    if (frequencyC1[key] > 1) {
      return false;
    }
  }
}

function areThereDuplicates() {
  let i = 0;
  let j = 1;
  let frequencyC1 = {};
  for (let character of arguments) {
    frequencyC1[character] = (frequencyC1[character] || 0) + 1;
  }
  for (const key in frequencyC1) {
    if (frequencyC1[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c"));
