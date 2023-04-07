var twoSum = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(nums[i]);
        arr.push(nums[j]);
        return arr;
      } else {
        continue;
      }
    }
  }
};

twoSum([1, 2, 3, 4, 5, 6], 11);
console.log(twoSum([1, 2, 3, 4, 5, 6], 11));