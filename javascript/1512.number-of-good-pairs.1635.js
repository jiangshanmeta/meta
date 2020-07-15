/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const groupBy = nums.reduce((obj,item)=>{
        if(!obj[item]){
            obj[item] = 1;
        }else{
            obj[item]++;
        }
        return obj;
    },Object.create(null));
    
    let result = 0;
    const counts = Object.values(groupBy);
    for(let i=0;i<counts.length;i++){
        if(counts[i]<2){
            continue;
        }
        result += counts[i]*(counts[i]-1)/2;
    }
    
    return result;
};