/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const half = s.length>>1;
    let left = 0;
    for(let i=0;i<half;i++){
        if(set.has(s[i])){
            left++;
        }
    }
    let right = 0;
    for(let i=half;i<s.length;i++){
        if(set.has(s[i])){
            right++;
        }
    }
    return left === right;
};