function stringSearch(str1, str2) {
  let matches = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] != str2[j]) {
        break;
      }
      if (j == str2.length - 1) {
        matches++;
      }
    }
  }
  return matches;
}

// console.log(stringSearch("hahaha", "ha"));
console.log(stringSearch("lorie loled", "lol"));
