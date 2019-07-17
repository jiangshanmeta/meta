/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const stack = [];
    for(let i=0;i<S.length;i++){
        // 当前元素和栈顶元素相同 出栈 否则 入栈
        if(stack.length && stack[stack.length-1] === S[i]){
            stack.pop();
        }else{
            stack.push(S[i]);
        }
    }
    return stack.join("");
};