/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 就是变形的3sum
    nums.sort((a,b)=>a-b);
    let index1 = 0;
    let minDiff = Infinity;
    let cloestVal = null;
    while(index1<nums.length-2){
        let index2 = index1+1;
        let index3 = nums.length-1;
        while(index2<index3){
            const sum = nums[index1]+nums[index2]+nums[index3];
            if(sum === target){
                return sum;
            }else if(sum>target){
                const diff = sum-target;
                if(diff<minDiff){
                    minDiff = diff;
                    cloestVal = sum;
                }
                index3--;
            }else{
                const diff = target-sum;
                if(diff<minDiff){
                    minDiff = diff;
                    cloestVal = sum;
                }
                index2++;
            }
            
        }
        index1++;
    }
    return cloestVal;
};