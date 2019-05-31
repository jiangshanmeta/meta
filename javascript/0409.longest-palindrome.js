/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // 统计数量 注意大小写敏感
    const arr = new Array(52).fill(0);
    for(let i=0;i<s.length;i++){
        const code = s.charCodeAt(i);
        arr[code-(code<97?65:71)]++;
    }
    
    let count = 0;
    let odd = 0;
    for(let i=0;i<arr.length;i++){
        const charCount = arr[i];
        if(charCount%2 === 0){
            count += charCount;
        }else{
            count += (charCount-1);
            // 最多有一个单独的可以加入到结果字符串中
            odd = 1;
        }
    }
    
    return count+odd;
};