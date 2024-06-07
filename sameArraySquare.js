// function same(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex == -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

function same(arr1, arr2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
  }
  for (let j = 0; j < arr2.length; j++) {
    frequencyCounter2[arr2[j]] = (frequencyCounter2[arr2[j]] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] != frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 1, 3, 2], [4, 9, 1]));
