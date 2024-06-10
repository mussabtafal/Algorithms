function findLongestSubstring(str) {
  let start = 0;
  let longest = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(seen[char], start);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}
