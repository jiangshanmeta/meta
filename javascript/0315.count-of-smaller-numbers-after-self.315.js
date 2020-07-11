/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 线段树实现
var countSmaller = function(nums) {
    if(nums.length === 0){
        return [];
    }
    // 由于题目中没有给出数据范围，所以我们把数组转换为相对排名
    // 线段树的范围是[0,copy.length-1]
    // 线段树中节点的值是出现的次数

    const copy = [...new Set(nums)].sort((a,b)=>a-b);
    const numRankMap = {};
    for(let i=0;i<copy.length;i++){
        numRankMap[copy[i]] = i+1;
    }
    const segmentTree = new Array(4*(copy.length+1)).fill(0);
    const result = new Array(nums.length);
    for(let i=nums.length-1;i>-1;i--){
        result[i] = querySegmentTree(segmentTree,0,0,copy.length,0,numRankMap[nums[i]]-1);
        updateSegmentTree(segmentTree,0,0,copy.length,numRankMap[nums[i]]);
    }
    return result;
};

function updateSegmentTree(segmentTree,rootIndex,rangeL,rangeR,target){
    if(rangeL === rangeR && rangeL === target){
        segmentTree[rootIndex]++;
        return;
    }
    const mid = rangeL + ((rangeR-rangeL) >> 1);
    const leftIndex = 2*rootIndex+1;
    const rightIndex = 2*rootIndex+2;
    if(target>mid){
        updateSegmentTree(segmentTree,rightIndex,mid+1,rangeR,target);
    }else{
        updateSegmentTree(segmentTree,leftIndex,rangeL,mid,target);
    }
    segmentTree[rootIndex] = segmentTree[leftIndex]+segmentTree[rightIndex];
}

function querySegmentTree(segmentTree,rootIndex,rangeL,rangeR,queryL,queryR){
    if(rangeL === queryL && rangeR === queryR){
        return segmentTree[rootIndex];
    }
    const mid = rangeL + ( (rangeR-rangeL) >> 1);
    const leftIndex = 2*rootIndex+1;
    const rightIndex = 2*rootIndex+2;
    if(queryL>mid){
        return querySegmentTree(segmentTree,rightIndex,mid+1,rangeR,queryL,queryR);
    }else if(queryR<mid+1){
        return querySegmentTree(segmentTree,leftIndex,rangeL,mid,queryL,queryR);
    }else{
        return querySegmentTree(segmentTree,leftIndex,rangeL,mid,queryL,mid)+querySegmentTree(segmentTree,rightIndex,mid+1,rangeR,mid+1,queryR);
    }
}


// binary indexed tree (树状数组) 解法
var countSmaller = function(nums) {
    // 依然是搞成相对排名的形式
    const copy = [...new Set(nums)].sort((a,b)=>a-b);
    const numRankMap = {};
    for(let i=0;i<copy.length;i++){
        // 排名从1开始，上面线段树其实应该这样，只是对第0个特殊处理了
        numRankMap[copy[i]] = i+1;
    }
    // 树状数组 bit[i] 放的是排名i的有几个
    const BIT = new Array(copy.length+1).fill(0);
    const result = new Array(nums.length).fill(0);
    for(let i=nums.length-1;i>-1;i--){
        result[i] = queryBit(BIT,numRankMap[nums[i]]-1);
        updateBit(BIT,numRankMap[nums[i]]);
    }
    return result;
};

function lowbit(n){
    return n&(-n);
}

function queryBit(bit,n){
    let result = 0;
    while(n>0){
        result += bit[n];
        // 此时的n管理lowbit个数字
        // 要看之前的
        n -= lowbit(n);
    }
    return result;
}
function updateBit(bit,i){
    while(i<bit.length){
        bit[i]++;
        // 求出父节点坐标
        i += lowbit(i);
    }
}