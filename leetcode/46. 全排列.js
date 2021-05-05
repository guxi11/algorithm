// array, permute, dfs
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let used = new Set();

    function dfs(path) {
        if (path.length === nums.length) {
            res.push(path.slice());
            return;
        }
        for (const num of nums) {
            if (used.has(num)) { // 不要用 path.contains，会增加O（n）时间复杂度
                continue;
            }
            path.push(num);
            used.add(num);
            dfs(path); // 基于当前选的数，递归
            path.pop();
            used.delete(num);
        }
    }

    dfs([]);
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    dfs([], nums);
    return res;

    function dfs(path, rest) {
        if (!rest.length) {
            res.push(path);
            return;
        }
        for (let i = 0; i < rest.length; i++) {
            dfs([...path, rest[i]], rest.slice(0, i).concat(rest.slice(i + 1)));
        }
    }
};