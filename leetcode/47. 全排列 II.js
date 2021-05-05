// array, permute, dfs
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let used = Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);

    function dfs(path) {
        if (path.length === nums.length) {
            res.push(path.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (used[i]) {
                continue;
            }
            if (i > 0 && !used[i - 1] && num === nums[i - 1]) {
                continue;
            }
            path.push(num);
            used[i] = true;
            dfs(path);
            path.pop();
            used[i] = false;
        }
    }

    dfs([]);
    return res;
};