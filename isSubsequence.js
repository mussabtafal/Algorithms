function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }
    pointer2++;

    if (pointer1 === str1.length) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("sing", "sting")); // Output: true
console.log(isSubsequence("abc", "abracadabra")); // Output: true
console.log(isSubsequence("abc", "acb")); // Output: false
console.log(isSubsequence("hello", "hello world")); // Output: true
console.log(isSubsequence("abc", "abxabc")); // Output: true
