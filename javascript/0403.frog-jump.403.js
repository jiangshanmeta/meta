/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    if(stones[1] !== 1){
        return false;
    }
    const target = stones[stones.length-1];
    const stoneMap = {};
    for(let i=0;i<stones.length;i++){
        // stones[i] 最大值是stones[i-1]+i 所以一旦超了就return false
        if(i>0 && stones[i]>stones[i-1]+i){
            return false;
        }
        stoneMap[stones[i]] = true;
    }
    
    const map = {};
    map[`1,1`] = true;
    const positions = [1];
    const jumps = [1];
    while(positions.length){
        const pos = positions.pop();
        const k = jumps.pop();
        // 看能否到达目标
        if(pos+k === target || pos+k+1===target || pos+k-1 === target){
            return true;
        }
        // 可选 k k+1 k-1三种状态
        if(stoneMap[pos+k+1] && !map[`${pos+k+1},${k+1}`]){
            map[`${pos+k+1},${k+1}`] = true;
            positions.push(pos+k+1);
            jumps.push(k+1);
        }
        if(stoneMap[pos+k] && !map[`${pos+k},${k}`]){
            map[`${pos+k},${k}`] = true;
            positions.push(pos+k);
            jumps.push(k);
        }
        if(k>1 && stoneMap[pos+k-1] && !map[`${pos+k-1},${k-1}`]){
            map[`${pos+k-1},${k-1}`] = true;
            positions.push(pos+k-1);
            jumps.push(k-1);
        }
    }
    return false;
};