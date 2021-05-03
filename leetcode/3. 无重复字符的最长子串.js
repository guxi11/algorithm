// array, string, sliding window
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = right = 0, window = new Set(s[0] || null);
    let max = window.size;
    while (++right < s.length) {
        let cr = s[right];
        while (window.has(cr)) {
            window.delete(s[left++]);
        }
        window.add(cr);

        max = Math.max(window.size, max);
    }
    return max;
};