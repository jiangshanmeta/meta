/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    function backTracking(list,index,sequence){
        if(list.length === k){
            return sequence.push(list.slice());
        }
        
        for(let i=index;i<=n;i++){
            list.push(i);
            backTracking(list,i+1,sequence);
            list.pop();
        }
    }
    
    const sequence = [];
    backTracking([],1,sequence);
    return sequence;
};