// string, palindrome, expand center
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        let res1 = expandCenter(s, i, i);
        let res2 = expandCenter(s, i, i + 1);
        if (res1.length > res.length) {
            res = res1;
        }
        if (res2.length > res.length) {
            res = res2;
        }
    }
    return res;
};

function expandCenter(s, left, right) {
    let res = '';
    while (0 <= left && right < s.length && s[left] === s[right]) {
        res = s.substring(left, right + 1);
        left--, right++;
    }
    return res;
}