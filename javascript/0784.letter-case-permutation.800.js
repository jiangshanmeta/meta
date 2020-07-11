/**
 * @param {string} S
 * @return {string[]}
 */

const numbers = {
    0:true,
    1:true,
    2:true,
    3:true,
    4:true,
    5:true,
    6:true,
    7:true,
    8:true,
    9:true,
}

// 回溯
var letterCasePermutation = function(S) {
    S = S.toLowerCase();
    function backTracking(str,sequence){
        if(str.length === S.length){
            return sequence.push(str);
        }
        
        const letter = S[str.length];
        
        if(numbers[letter]){
            return backTracking(str+letter,sequence);
        }
        
        backTracking(str+letter,sequence);
        backTracking(str+letter.toUpperCase(),sequence);
    }
    
    const sequence = [];
    backTracking("",sequence);
    
    return sequence;
};