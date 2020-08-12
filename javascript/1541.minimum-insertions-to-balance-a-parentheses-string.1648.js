/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const stack = [];
    let index = 0;
    let result = 0;
    while(index<s.length){
        if(s[index] === '('){
            stack.push(s[index++]);
            continue;
        }
        index++;
        if(index<s.length && s[index] === ')'){
            index++;
        }else{
            result++;
        }
        
        if(stack.length && stack[stack.length-1] === '('){
            stack.pop();
        }else{
            result++;
        }
    }
    result += stack.length*2;
    return result;
};