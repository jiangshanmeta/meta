/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    const arr = S.split("");
    let left = 0;
    let right = S.length-1;
    while(left<right){
        // 跳过非单词
        while(left<right && !isLetter(S.charCodeAt(left))){
            left++;
        }
        while(left<right && !isLetter(S.charCodeAt(right))){
            right--;
        }

        if(left<right){
            const tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
            left++;
            right--;
        }
    }
    
    return arr.join("");
};
// 判断是否是英文字母
function isLetter(code){
    if((code>64 && code<91) || (code>96 && code<123)){
        return true;
    }
    return false;
}