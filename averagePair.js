function averagePair(arr, avg) {
  if (arr.length === 0) {
    return false;
  }
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if ((arr[start] + arr[end]) / 2 < avg) {
      start++;
    } else if ((arr[start] + arr[end]) / 2 > avg) {
      end--;
    } else {
      return [arr[start], arr[end]];
    }
  }
}

console.log(averagePair([1, 2, 3, 4, 10], 3.5));
