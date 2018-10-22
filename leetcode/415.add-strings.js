/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 老老实实做就行
var addStrings = function(num1, num2) {
    let jinwei = 0;
    const maxLen = Math.max(num1.length,num2.length);
    num1 = num1.padStart(maxLen);
    num2 = num2.padStart(maxLen);
    
    let str = '';
    for(let i=maxLen-1;i>-1;i--){
        let sum = jinwei + (+num1[i])+ (+num2[i]);
        str = `${sum%10}${str}`;
        jinwei = sum/10 | 0;
    }
    
    if(jinwei>0){
        str = `${jinwei}${str}`;
    }
    return str;
};