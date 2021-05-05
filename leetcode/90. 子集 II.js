// array, subsets, dfs
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [[]];
    nums.sort((a, b) => a - b);
    dfs(0, []);
    return res;

    function dfs(start, temp) {
        for (let i = start; i < nums.length; i++) {
            if (start < i && nums[i] === nums[i - 1]) {
                continue;
            }
            res.push(temp.concat([nums[i]]));
            dfs(i + 1, temp.concat([nums[i]]));
        }
    }
};