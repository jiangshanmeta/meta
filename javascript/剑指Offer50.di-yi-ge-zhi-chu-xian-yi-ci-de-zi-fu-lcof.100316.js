/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const arr = new Array(26).fill(0);
 
    for (let c of s) {
        arr[c.charCodeAt() - 97] += 1;
    }
 
    for (let c of s) {
        if (arr[c.charCodeAt() - 97] == 1) {
            return c;
        }
    }
     return ' ';
 };