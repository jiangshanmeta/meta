/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    });
    var rst = [];
    var len = nums.length;
    var i = 0;
    var j;
    var k;
    var target;
    var tmp;
    while(i<len-2){
        target = 0 - nums[i];
        j = i + 1;
        k = len -1;
        while(j<k){
            if(nums[j]+nums[k] === target){
                rst.push([nums[i],nums[j],nums[k]]);
                tmp = nums[j];
                j++;
                while(nums[j] === tmp && j<k){
                    j++;
                }
                tmp = nums[k];
                while(nums[k] === tmp && j<k){
                    k--;
                }
                
            }else if(nums[j] + nums[k]<target){
                tmp = nums[j];
                j++;
                while(nums[j]===tmp && j<k){
                    j++;
                }
            }else{
                tmp = nums[k];
                k--;
                while(nums[k]===tmp && j<k){
                    k--;
                }
            }
        }
        tmp = nums[i];
        i++;
        while(nums[i] === tmp && i<len-2){
            i++;
        }
    }
    return rst;
};