// array, dp, lcs
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    nums1.unshift(0), nums2.unshift(0);
    const m = nums1.length, n = nums2.length;
    let res = 0;
    let dp = Array(m).fill(0).map(() => Array(n).fill(0)); // dp[i][j] means lcs that end at nums1[i] and nums2[j]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (nums1[i] === nums2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = 0;
            }
            res = Math.max(res, dp[i][j]);
        }
    }
    return res;
};