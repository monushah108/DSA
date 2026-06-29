// move zeros to end

const nums = [0, 1, 4, 0, 5, 2];

function moveZeros(nums) {
  let n = nums.length;
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }

  console.log(k);

  while (k < n) {
    nums[k] = 0;
    k++;
  }

  return nums;
}

console.log(moveZeros(nums));
