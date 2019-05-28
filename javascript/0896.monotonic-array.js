/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    const length = A.length
    if(A[length-1]-A[0]>0){
        // 单调递增
        for(let i=1;i<length;i++){
            if(A[i]<A[i-1]){
                return false
            }
        }
        return true;
    }else{
        // 单调递减
        for(let i=1;i<length;i++){
            if(A[i]>A[i-1]){
                return false;
            }
        }
        return true;
    }
};