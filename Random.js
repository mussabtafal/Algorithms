// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// bubbleSort([9, 7, 11, 23, 1]);

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//     }
//     let temp = arr[lowest];
//     arr[lowest] = arr[i];
//     arr[i] = temp;
//   }
//   console.log(arr);
//   return arr;
// }

// selectionSort([9, 7, 11, 23, 1]);

// [9, 7, 11, 23, 1];

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   console.log(arr);
//   return arr;
// }

// insertionSort([9, 7, 11, 23, 1]);

// ********************** Merge Sort ***************************

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  console.log(results);
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// mergeSort([76, 33, 100, 110, 2, 89]);

// ******************* Quick Sort ***************************

function pivot(arr, start = 0, end = arr.length - 1) {
  let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  console.log(arr);
  return arr;
}
// quickSort([76, 33, 100, 110, 2, 89]);

// ******************* Radix Sort ***************************

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getDigitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMostDigitCount(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, getDigitCount(arr[i]));
  }
  return max;
}

function radixSort(arr) {
  let count = getMostDigitCount(arr);
  for (let k = 0; k < count; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let bucketIdx = getDigit(arr[i], k);
      digitBuckets[bucketIdx].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  console.log(arr);
  return arr;
}

radixSort([23, 345, 5476, 12, 2345, 9852]);
