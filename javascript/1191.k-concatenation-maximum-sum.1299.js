/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
    const mod = 10**9+7;
    // k为1则退化为leetcode53最大子列和问题
    if(k === 1){
        let max = 0;
        let curSum = 0;
        for(let i=0;i<arr.length;i++){
            curSum += arr[i];
            max = Math.max(max,curSum);
            if(curSum<0){
                curSum = 0;
            }
        }
        return max%mod;
    }else{
        // 对于重复的多个序列，最大子列和出现的可能情况有：
        // 1. 在一个序列内部
        // 2. 一个序列尾部+下一个序列的头部
        // 3. 第一个尾部+中间所有+最后一个头部
        // 不可能出现第一个头部+部分中间的+下一个头部，考虑一个序列贡献为正，则应为3 贡献为负，则应为2
        // 前两种情况相当于一个二倍的序列的最大子列和问题
        // 第三种相当于在第二种基础上考虑一整个序列
        const L = arr.length;
        arr.push(...arr);
        // sum是一个序列的和
        let sum = 0;
        let max = 0;
        let curSum = 0;
        for(let i=0;i<arr.length;i++){
            i<L && (sum += arr[i]);
            curSum += arr[i];
            max = Math.max(max,curSum);
            if(curSum<0){
                curSum = 0;
            }
        }
        return (sum>0?max+(k-2)*sum:max)%mod;
    }
};