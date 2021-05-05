// array, string, dfs, permutation
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = [];
    dfs('', s);
    return res;

    function dfs(pre, rest) {
        if (rest === '') {
            res.push(pre);
            return;
        }
        let seen = new Set();
        for (let i = 0; i < rest.length; i++) {
            if (seen.has(rest[i])) {
                continue;
            }
            seen.add(rest[i]);

            dfs(pre + rest[i], rest.slice(0, i).concat(rest.slice(i + 1)));
        }
    }
};