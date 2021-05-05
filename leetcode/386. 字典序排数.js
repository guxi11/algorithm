// array, dfs
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let res = [];
    function dfs(root) {
        if (root > n) return;
        res.push(root);
        root *= 10;
        for (let i = 0; i < 10; i++) {
            dfs(root + i);
        }
    }
    for (let i = 1; i < 10; i++) {
        dfs(i);
    }
    return res;
};