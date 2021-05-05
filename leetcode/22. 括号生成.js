/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let remain = { '(': n, ')': n };
    let res = [];
    function dfs(path) {
        if (path.length === n * 2) {
            res.push(path.join(''));
            return;
        }
        for (const p of ['(', ')']) {
            if (p === ')' && remain['('] >= remain[')']) continue;
            if (remain[p] === 0) continue;
            path.push(p);
            remain[p]--;
            dfs(path);
            path.pop();
            remain[p]++;
        }
    }
    dfs([]);
    return res;
};