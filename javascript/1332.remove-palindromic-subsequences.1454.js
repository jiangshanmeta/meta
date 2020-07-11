/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if(s.length === 0){
        return 0;
    }
    let left = 0;
    let right = s.length-1;
    let isPalindrome = true;
    while(left<right){
        if(s[left] !== s[right]){
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }
    // 是回文 一次性全干掉
    if(isPalindrome){
        return 1;
    }
    // 不是回文 先干掉所有的a 再干掉所有的b 两次即可
    return 2;
};