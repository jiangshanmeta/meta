/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA = 0;
    for(let i=0;i<A.length;i++){
        sumA += A[i];
    }
    
    let sumB = 0;
    for(let i=0;i<B.length;i++){
        sumB += B[i];
    }
    
    const setB = new Set(B);
    
    const delta = (sumA-sumB)/2;
    
    for(let i=0;i<A.length;i++){
        if(setB.has(A[i]-delta)){
            return [A[i],A[i]-delta];
        }
    }
    
};