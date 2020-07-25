/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
    const beforeIndexs = new Array(A.length);
    for(let i=0;i<beforeIndexs.length;i++){
        beforeIndexs[i] = i;
    }
    
    let result = 0;
    for(let i=1;i<A.length;i++){
        let j=i-1;
        while(j>-1){
            if(A[j]<=A[i]){
                while(beforeIndexs[j] !== j){
                    j = beforeIndexs[j];
                }
                beforeIndexs[i] = j;
            }
            j--;
        }
        result = Math.max(result,i-beforeIndexs[i]); 
    }
    return result;
};