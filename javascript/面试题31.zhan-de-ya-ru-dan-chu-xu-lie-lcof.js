/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let pushIndex = 0;
    let popIndex = 0;
    while(pushIndex<pushed.length && popIndex<popped.length){
        while( pushIndex<pushed.length &&  (stack.length === 0 || stack[stack.length-1] !== popped[popIndex])  ){
            stack.push(pushed[pushIndex++]);
        }

        if(stack[stack.length-1] !== popped[popIndex]){
            return false;
        }
        stack.pop();
        popIndex++;
    }
    while(popIndex<popped.length){
        if(stack.length && stack[stack.length-1] === popped[popIndex]){
            popIndex++;
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
};