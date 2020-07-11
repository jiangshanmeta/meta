/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let xorRst = 0;
    for(let i=0;i<nums.length;i++){
        xorRst ^= nums[i];
    }
    let mask = 1;
    while( (xorRst & mask) === 0){
        mask <<= 1;
    }
    let a = 0;
    let b = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]&mask){
            a ^= nums[i];
        }else{
            b ^= nums[i]
        }
    }
    return [a,b];
};