function minSubarrayLen(arr, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));

[1, 4, 16, 22, 5, 7, 8, 9, 10];
