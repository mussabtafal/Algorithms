function charFrequency(str) {
  let charObj = {};
  let lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (charObj.hasOwnProperty(lowerCaseStr[i])) {
      charObj[lowerCaseStr[i]]++;
    } else {
      charObj[lowerCaseStr[i]] = 1;
    }
  }
  return charObj;
}

console.log(charFrequency("bla blab bal !!"));
