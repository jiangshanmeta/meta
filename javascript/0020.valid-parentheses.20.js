/**
 * @param {string} s
 * @return {boolean}
 */
const leftParentheses = {
    '(':true,
    '{':true,
    '[':true,
}

const rightPair = {
    '}':'{',
    ']':'[',
    ')':'(',
}

var isValid = function(S) {
    const stack = [];
    for(let i=0;i<S.length;i++){
        if(leftParentheses[S[i]]){
            stack.push(S[i]);
        }else if(stack.length && stack[stack.length-1] === rightPair[S[i]]){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
};