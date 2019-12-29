/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if(nums.length%k !== 0){
        return false;
    }
    const maxNum = nums.length/k;
    const map = {};
    const uniqueNums = [];
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]] === undefined){
            uniqueNums.push(nums[i]);
            map[nums[i]] = 1;
        }else{
            map[nums[i]] += 1;
        }
        if(map[nums[i]]>maxNum){
            return false;
        }
    }
    
    uniqueNums.sort((a,b)=>a-b);
    for(let i=0;i<uniqueNums.length;i++){
        if(map[uniqueNums[i]] === 0){
            continue;
        }
        const count = map[uniqueNums[i]];
        for(let j=0;j<k;j++){
            if(map[uniqueNums[i]+j] === undefined || map[uniqueNums[i]+j]<count){
                return false;
            }
            map[uniqueNums[i]+j] -= count;
        }
    }
    
    return true;
};