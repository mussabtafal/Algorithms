function isAnagram(str1, str2) {
  let frequency1 = {};
  let frequency2 = {};

  for (const character of str1) {
    frequency1[character] = (frequency1[character] || 0) + 1;
  }
  for (const character of str2) {
    frequency2[character] = (frequency2[character] || 0) + 1;
  }

  for (const key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }
    if (frequency2[key] != frequency1[key]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("aa", "az"));
