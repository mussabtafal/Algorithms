function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (val < arr[middle]) {
      max = middle + 1;
    } else if (val > arr[middle]) {
      min = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([10, 15, 22, 39, 48, 55, 100], 100));
