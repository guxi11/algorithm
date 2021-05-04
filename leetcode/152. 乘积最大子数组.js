// array, dp
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let preMultiMax = nums[0];
    let preMultiMin = nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const multiMax = Math.max(preMultiMax * nums[i], preMultiMin * nums[i], nums[i]);
        const multiMin = Math.min(preMultiMax * nums[i], preMultiMin * nums[i], nums[i]);
        res = Math.max(multiMax, res);
        preMultiMax = multiMax;
        preMultiMin = multiMin;
    }
    return res;
};