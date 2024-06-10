// Solution 1
function sameFrequency(num1, num2) {
  let first = String(num1);
  let second = String(num2);
  let frequencyC1 = {};
  let frequencyC2 = {};

  for (const character of first) {
    frequencyC1[character] = (frequencyC1[character] || 0) + 1;
  }
  for (const character of second) {
    frequencyC2[character] = (frequencyC2[character] || 0) + 1;
  }

  for (const key in frequencyC1) {
    if (!(key in frequencyC2)) {
      return false;
    } else if (frequencyC1[key] != frequencyC2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(11182, 18211));
