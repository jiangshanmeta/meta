/**
 * @param {string} S
 * @return {number[]}
 */
// 我的最初实现，思路是这样的
// 先把N+1个数从小到大排列
// 如果是I就正好
// 如果是D就调整，有几个连续的D就把之前几个后移，空出来的位置填入当前最大值
// 时间复杂度看S，在O(n)和O(n^2)之间都可能
var diStringMatch = function(S) {
    let dCount = 0;
    let result = new Array(S.length+1);
    result[0] = 0;
    for(let i=0;i<S.length;i++){
        if(S[i] === 'I'){
            dCount = 0;
            result[i+1] = i+1;
        }else{
            dCount++;
            // 有几个D就向后移动几个
            for(let j=0;j<dCount;j++){
                result[i+1-j] = result[i-j];
            }
            result[i-dCount+1] = i+1;
        }
    }
    return result;
};

// 这是答案给出的方案
// 遇到I，我们使用掉一个尽可能小的数
// 遇到D，我们使用掉一个尽可能大的数
var diStringMatch = function(S) {
    let low = 0;
    let high = S.length;
    let result = new Array(S.length+1);
    for(let i=0;i<S.length;i++){
        if(S[i] === 'I'){
            result[i] = low++;
        }else{
            result[i] = high--;
        }
    }
    result[S.length] = low;
    return result;
};