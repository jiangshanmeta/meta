/**
 * @param {string} s
 * @return {string}
 */

function isDigit(char){
    const code = char.charCodeAt(0);
    return code>47 && code<58;
}

var reformat = function(s) {
    const chars = [];
    const digits = [];
    for(let i=0;i<s.length;i++){
        if(isDigit(s[i])){
            digits.push(s[i]);
        }else{
            chars.push(s[i]);
        }
    }
    const diff = Math.abs(chars.length-digits.length);
    if(diff>1){
        return '';
    }
    const result = [];
    let indexChars = 0;
    let indexDigits = 0;
    if(chars.length>digits.length){
        result.push(chars[indexChars++]);
        while(indexDigits<digits.length){
            result.push(digits[indexDigits++]);
            result.push(chars[indexChars++]);
        }
    }else{
        result.push(digits[indexDigits++]);
        while(indexChars<chars.length){
            result.push(chars[indexChars++]);
            result.push(digits[indexDigits++]);
        }
    }
    return result.join('');
};