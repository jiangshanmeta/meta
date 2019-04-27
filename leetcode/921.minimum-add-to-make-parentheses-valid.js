/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    const stack = [];
    for(let i=0;i<S.length;i++){
        // 当且仅当栈顶元素为 '(' 且当前元素为 ')' 时配对成功
        if(stack.length && S[i] === ')' && stack[stack.length-1] === '('){
            stack.pop();
        }else{
            stack.push(S[i])
        }
    }
    return stack.length;
};