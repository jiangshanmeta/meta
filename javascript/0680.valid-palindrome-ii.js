/**
 * @param {string} s
 * @return {boolean}
 */


var validPalindrome = function(s) {
    // 判断剩余子串是否是回文
    function isValidPalindrome(low,high){
        while(low<high){
            if(s[low++] !== s[high--]){
                return false;
            }
        }
        return true;
    }
    let low = 0;
    let high = s.length-1;
    while(low<high){
        // 尝试删一次
        if(s[low] !== s[high]){
            return isValidPalindrome(low+1,high) || isValidPalindrome(low,high-1);
        }
        low++;
        high--;
    }
    return true;
};