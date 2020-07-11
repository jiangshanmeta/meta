/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if(palindrome.length === 1){
        return '';
    }
    const strList = palindrome.split('');
    let index = 0;
    // 找到第一个不是a的改成a
    while(index<palindrome.length-1-index){
        if(palindrome[index]>'a'){
            strList[index] = 'a';
            return strList.join('');
        }
        index++;
    }
    // 全是a 最后一个改成b 字典序最小
    strList[strList.length-1] = 'b';
    return strList.join('');
};