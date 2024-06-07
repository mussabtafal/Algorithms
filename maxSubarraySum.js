function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    console.log("Array length is Insufficient");
  }
  max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 3, 5, 5, 3], 2));
