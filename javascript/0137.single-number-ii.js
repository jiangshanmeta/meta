/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const counts = new Array(32).fill(0);
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        for(let j=0;j<32;j++){
            if(num&1){
                counts[31-j]++;
            }
            num >>= 1;
        }
    }
    let result = 0;
    for(let i=0;i<32;i++){
        result = (result<<1) + (counts[i]%3 !== 0 ? 1:0 );
    }

    return result;
};