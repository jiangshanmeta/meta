/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    const stack = [];
    // 一个chunk要满足后面的元素都不小于这个chunk的最大值
    for(let i=0;i<arr.length;i++){
        let min = arr[i];
        let max = arr[i];
        // 如果当前值小于前面一组值的最大值 则当前值应该和前一组合并
        while(stack.length && min<stack[stack.length-1].max  ){
            // 合并的方式是删掉前一个 后面补上一个新的
            const node = stack.pop();
            // 更新最小值和最大值
            min = Math.min(node.min,min);
            max = Math.max(node.max,max);
        }
        stack.push({
            min,
            max,
        })
    }
    
    return stack.length;
};