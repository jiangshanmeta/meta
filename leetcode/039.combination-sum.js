/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    function backTracking(list,sequence,candidates,sum,index){
        if(sum === target){
            return sequence.push(list.slice());
        }
        if(sum>target){
            return false;
        }
        
        for(let i=index;i<candidates.length;i++){
            list.push(candidates[i]);
            backTracking(list,sequence,candidates,sum+candidates[i],i);
            list.pop();
        }
        
    }
    const sequence = [];
    backTracking([],sequence,candidates,0,0);
    return sequence;
};