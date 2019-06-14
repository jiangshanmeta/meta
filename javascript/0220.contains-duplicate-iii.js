/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(k>2*t){
        const map = new Map();
        map.set(nums[0],0);
        for(let i=1;i<nums.length;i++){
            for(let j=nums[i]-t;j<=nums[i]+t;j++){
                if(map.has(j) && Math.abs(map.get(j)-i)<=k ){
                    return true;
                }
            }
            map.set(nums[i],i);
        }
    }else{
        for(let i=1;i<nums.length;i++){
            for(let j=Math.max(0,i-k);j<i;j++){
                if(Math.abs(nums[i]-nums[j])<=t){
                    return true;
                }
            }
        }
    }

    return false;
};