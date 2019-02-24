/**
 * @param {string} preorder
 * @return {boolean}
 */
// 可以证明 数字的个数比#的个数少一个
// 最后一个一定是#
// 除最后一个#外 数字数量和#数量一致
// 从头开始取子序列(不考虑最后一个) 数字的数量不应该小于#的数量
var isValidSerialization = function(preorder) {
    const arr = preorder.split(",");
    if(arr[arr.length-1] !== '#'){
        return false;
    }
    arr.pop();
    // 其实不用栈 用个计数器就行
    const stack = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] === '#'){
            if(stack.length>0){
                stack.pop();
            }else{
                return false;
            }
        }else{
            stack.push(arr[i]);
        }
    }
    
    if(stack.length>0){
        return false;
    }
    return true;
};