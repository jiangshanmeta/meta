/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    const leftCharCounts = new Array(26).fill(0);
    const rightCharCounts = new Array(26).fill(0);
    leftCharCounts[s.charCodeAt(0)-97]++;
    let left = 1;
    let right = 0;
    for(let i=1;i<s.length;i++){
        const code = s.charCodeAt(i)-97;
        if(rightCharCounts[code] === 0){
            right++;
        }
        rightCharCounts[code]++;
    }
    let result = 0;
    for(let i=1;i<s.length;i++){
        if(left === right){
            result++;
        }
        const code = s.charCodeAt(i)-97;
        rightCharCounts[code]--;
        if(rightCharCounts[code] === 0){
            right--;
        }
        if(leftCharCounts[code] === 0){
            left++;
        }
        leftCharCounts[code]++;
    }
    return result;
};