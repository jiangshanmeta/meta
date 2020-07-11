/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const map = {};
    for(let i=0;i<=s.length-k;i++){
        map[s.substring(i,i+k)] = true;
    }

    return helper(map,new Array(k).fill(0),0,k);
};

function helper(map,candidate,index,k){
    if(index === k){
        return map[candidate.join('')] === true;
    }
    const result1 = helper(map,candidate,index+1,k)
    if(!result1){
        return false;
    }
    candidate[index] = 1;
    const result2 = helper(map,candidate,index+1,k);
    candidate[index] = 0;
    if(!result2){
        return false;
    }
    return true;
}

