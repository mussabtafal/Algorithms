function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else if (arr[left] != arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  console.log(arr);
  return left + 1;
}

console.log(countUniqueValues([1, 1, 2, 2, 2, 3]));
