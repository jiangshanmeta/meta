/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    // 当遇到每个segment第一个字母时计数
    // 每个segment第一个字母标志是前面是空格
    let count = 0;
    let isLastSpace = true;
    for(let i=0;i<s.length;i++){
        if(s[i] === ' '){
            isLastSpace = true;
        }else if(isLastSpace){
            isLastSpace = false;
            count++;
        }
    }
    
    return count;
};