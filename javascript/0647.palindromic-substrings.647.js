/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    // 这其实是个dp
    // 时间复杂度O(N^2) N为s的长度
    // 空间复杂度可以优化到O(N)
    const isPalindrome = new Array(s.length);
    let result = 0;
    for(let i=s.length-1;i>-1;i--){
        isPalindrome[i] = new Array(s.length).fill(true);
        result++;
        for(let j=i+1;j<s.length;j++){
            if(s[i] === s[j]){
                isPalindrome[i][j] = isPalindrome[i+1][j-1];
            }else{
                isPalindrome[i][j] = false;
            }
            if(isPalindrome[i][j]){
                result++;
            }
        }
    }
    return result;
};