// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     console.log("Array length is Insufficient");
//   }
//   max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

function maxSubarraySum(arr, num) {
  let max = 0;
  let tempMax = 0;
  if (num > arr.length) {
    console.log("Array length is Insufficient");
  }
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  tempMax = max;
  for (let j = num; j < arr.length; j++) {
    tempMax = tempMax - arr[j - num] + arr[j];
    max = Math.max(max, tempMax);
  }
  return max;
}

console.log(maxSubarraySum([1, 3, 5, 5, 3], 2));
