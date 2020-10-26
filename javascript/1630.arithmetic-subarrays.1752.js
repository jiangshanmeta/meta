/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const result = new Array(l.length);
    for(let i=0;i<l.length;i++){
        result[i] = check(nums.slice(l[i],r[i]+1).sort((a,b)=>a-b))
    }
    return result;
};

function check(sub){
    if(sub.length<2){
        return false;
    }
    const diff = sub[1]-sub[0];
    for(let j=2;j<sub.length;j++){
        if(sub[j]-sub[j-1] !== diff){
            return false;
        }
    }
    return true;
}