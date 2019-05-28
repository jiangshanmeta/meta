/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    const stack = [];
    for(let i=0;i<S.length;i++){
        if(S[i] === '('){
            stack.push('(');
        }else{
            if(stack[stack.length-1] === '('){
                stack[stack.length-1] = 1;
            }else{
                let count = 0;
                while(stack[stack.length-1] !== '(' ){
                    count += stack.pop();
                }
                stack[stack.length-1] = count << 1;
            }
        }
    }
    
    return stack.reduce((sum,item)=>{
        sum += item;
        return sum;
    },0);
};