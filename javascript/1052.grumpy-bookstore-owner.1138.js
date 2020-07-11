/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
// 滑动窗口 窗口大小为X
var maxSatisfied = function(customers, grumpy, X) {
    X = Math.min(X,customers.length);
    // normal 表示正常就能获得的
    // add 表示这个滑动窗口能添加的
    let add = 0;
    let normal = 0
    for(let i=0;i<X-1;i++){
        if(grumpy[i]){
            add += customers[i];
        }else{
            normal += customers[i];
        }
    }
    let maxAdd = add;
    for(let i=X-1;i<customers.length;i++){
        // 滑动窗口添加新元素
        if(grumpy[i]){
            add += customers[i];
            maxAdd = Math.max(add,maxAdd);
        }else{
            normal += customers[i];
        }
        // 滑动窗口右移 干掉头部元素
        if(grumpy[i+1-X]){
            add -= customers[i+1-X];
        }
    }

    return normal + maxAdd;
};