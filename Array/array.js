/* move zeros to end */

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

/* linear Search *
// let nums = [2, 3, 4, 5, 3];
// let target = 6;

// function LinerS(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) return 1;
//   }

//   return -1;
// }

// console.log(LinerS(nums, target));

/* union of two sorted arrays */
// let nums1 = [3, 4, 6, 7, 9, 9],
//   nums2 = [1, 5, 7, 8, 8];

// function unionArray(nums1, nums2) {
//   const set = new Set([...nums1, ...nums2]);
//   const unArr = [...set];

//   const n = unArr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (unArr[i] > unArr[j]) {
//         let temp = unArr[i];
//         unArr[i] = unArr[j];
//         unArr[j] = temp;
//       }
//     }
//   }

//   return unArr;
// }

// console.log(unionArray(nums1, nums2));

/*
* 
find missing number
*
*/
// let nums = [0, 1, 2, 4, 5, 6];
// function misNo(nums) {
//   const n = nums.length;

//   for (let i = 0; i <= n; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     }
//   }
// }
// console.log(misNo(nums));

/* max consecutive ones */
// let nums = [0];
// function findMaxConsecutiveOnes(nums) {
//   const n = nums.length;
//   let max = 0;
//   let count = 0;
//   let k = 0;
//   for (let i = 0; i < n; i++) {
//     if (nums[k] == nums[i] && nums[i] > 0) {
//       count++;
//     } else if (nums[k] != nums[i]) {
//       k = i;
//       max = Math.max(max, count);
//       count = 1;
//     }
//   }
//   max = Math.max(max, count);
//   return max;
// }

// console.log(findMaxConsecutiveOnes(nums));

/* single Number -1 */

// let nums = [4, 1, 2, 1, 2];

// function singleNumber(nums) {
//   const n = nums.length;

//   const map = new Map();

//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//       if (nums[j] == nums[i]) {
//         count++;
//       }
//     }
//     map.set(count, nums[i]);
//   }

//   return map.get(1);
// }

// console.log(singleNumber(nums));
