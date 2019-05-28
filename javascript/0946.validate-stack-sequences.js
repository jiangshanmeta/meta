/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let pushIndex = 0;
    for(let i=0;i<popped.length;i++){
        const popItem = popped[i];
        // 当栈顶元素不是要pop的元素时 push
        if(stack.length ===0 || stack[stack.length-1] !== popItem){
            while(pushIndex<pushed.length){
                const pushItem = pushed[pushIndex++];
                stack.push(pushItem);
                if(pushItem === popItem){
                    break;
                }
            }
        }
        if(stack[stack.length-1] === popItem){
            stack.pop();
        }else{
            return false;
        }

    }
    return true;
};