/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    // 大于8=>1 小于等于8=>-1
    // 即一个由-1和1构成的数组 求满足和为正数的子数组的最大长度
    // 转化为前缀和数组 S 求满足 i<j且S[i]<S[j]的 j-i的最大值
    const sums = [0];
    for(let i=0;i<hours.length;i++){
        sums[i+1] = sums[i]+(hours[i]>8?1:-1);
    }
    // 对于i1<i2 若i2想取代i1作为跨度更大区间的开始 则 S[i2]<S[i1]
    // 因而stack[i]对应在S的值 作为开始的候选项集合，要递减
    const stack = [0];
    for(let i=1;i<sums.length;i++){
        if(sums[i]<sums[stack[stack.length-1]]){
            stack.push(i);
        }
    }
    let result = 0;
    // i是区间终止的位置
    for(let i=sums.length-1;i>0;i--){
        // 处理掉无效起点
        while(stack.length && stack[stack.length-1]>=i){
            stack.pop();
        }
        while(stack.length && sums[stack[stack.length-1]]<sums[i]){
            // 找到满足的区间 然后看前一个元素
            result = Math.max(result,i-stack.pop());
        }
    }
    
    return result;
};