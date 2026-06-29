// move zeros to end

// const nums = [0, 1, 4, 0, 5, 2];

// function moveZeros(nums) {
//   let n = nums.length;
//   let k = 0;
//   for (let i = 0; i < n; i++) {
//     if (nums[i] !== 0) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   console.log(k);

//   while (k < n) {
//     nums[k] = 0;
//     k++;
//   }

//   return nums;
// }

// linear Search
// let nums = [2, 3, 4, 5, 3];
// let target = 6;

// function LinerS(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) return 1;
//   }

//   return -1;
// }

// console.log(LinerS(nums, target));

// union of two sorted arrays
let nums1 = [3, 4, 6, 7, 9, 9],
  nums2 = [1, 5, 7, 8, 8];

function unionArray(nums1, nums2) {
  const set = new Set([...nums1, ...nums2]);
  const unArr = [...set];

  const n = unArr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (unArr[i] > unArr[j]) {
        let temp = unArr[i];
        unArr[i] = unArr[j];
        unArr[j] = temp;
      }
    }
  }

  return unArr;
}

console.log(unionArray(nums1, nums2));
