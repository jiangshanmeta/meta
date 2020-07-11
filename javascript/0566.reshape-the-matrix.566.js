/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if(r*c !== nums.length*nums[0].length){
        return nums;
    }
    
    const matrix = Array.apply(null,{length:r}).map(()=>new Array(c));
    
    let count = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums[0].length;j++){
            matrix[(count/c)|0][count%c] = nums[i][j];
            count++;
        }
    }
    return matrix;
};