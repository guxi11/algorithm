// str, dp, array
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    const number2charset = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    res = number2charset[digits[0]].split('');
    for (let i = 1; i < digits.length; i++) {
        const charset = number2charset[digits[i]];
        res = [].concat(...res.map(str => charset.split('').map(char => str + char)));
    }
    return res;
};