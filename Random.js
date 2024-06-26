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

// radixSort([23, 345, 5476, 12, 2345, 9852]);

// *********************************************************************************
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(arr);
  return arr;
}

// bubble([23, 345, 5476, 12, 2345, 1]);

function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    swap(arr, lowest, i);
  }
  console.log(arr);
  return arr;
}

// selection([23, 345, 5476, 12, 2345, 1]);

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = current;
  }
  return arr;
}

// insertion([23, 345, 5476, 12, 2345, 1]);

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// console.log(mergeSort([23, 345, 5476, 12, 2345, 1]));

function testPivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, swapIdx, start);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  while (left < right) {
    let pivot = testPivot(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);

    return arr;
  }
}

// console.log(quickSort([23, 345, 5476, 12, 2345, 1]));

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getDigitCount(num) {
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
  let maxCount = getMostDigitCount(arr);
  for (let k = 0; k < maxCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  console.log(arr);
  return arr;
}

// radixSort([23, 345, 5476, 12, 2345, 1]);

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bts {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        } else if (val > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      if (current.value === val) return current;
      if (current.value > val) {
        if (!current.left) return;
        current = current.left;
      } else {
        if (!current.right) return;
        current = current.right;
      }
    }
  }

  bfs() {
    if (!this.root) return undefined;
    var q = [],
      data = [],
      node = this.root;
    q.push(node);
    while (q.length) {
      let node = q.shift();
      data.push(node.value);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return data;
  }

  dfs() {
    if (!this.root) return undefined;
    let values = [];
    let current = this.root;

    function traverse(node) {
      values.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(current);
    return values;
  }

  bf() {
    if (!this.root) return undefined;
    var node = this.root,
      q = [],
      data = [];

    q.push(node);
    while (q.length) {
      let node = q.shift();
      data.push(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return data;
  }

  df() {
    if (!this.root) return undefined;
    let current = this.root;
    let values = [];

    function traverse(node) {
      values.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.rights);
      }
    }

    traverse(current);
    return values;
  }
}

let rr = new Bts();

rr.insert(10);
rr.insert(5);
rr.insert(16);
console.log(rr.bf());
console.log(rr.df());
