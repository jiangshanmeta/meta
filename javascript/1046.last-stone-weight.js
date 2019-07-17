/**
 * @param {number[]} stones
 * @return {number}
 */
// 时间复杂度O(NlogN)
var lastStoneWeight = function(stones) {
    // 按重量从小到大排列
    stones.sort((a,b)=>a-b);
    while(stones.length>1){
        // 拿出最重的两块石头
        const delta = Math.abs(stones.pop()-stones.pop());
        // 二分法把处理过后的石头插入到序列中
        if(delta>0){
            let low = 0;
            let high = stones.length-1;
            let index = stones.length;
            while(low<=high){
                const mid = (low+high) >> 1;
                if(stones[mid]>delta){
                    index = Math.min(index,mid);
                    high = mid-1;
                }else{
                    low = mid+1;
                }
            }
            stones.splice(index,0,delta);
        }
    }
    return stones.length === 1?stones[0]:0;
};