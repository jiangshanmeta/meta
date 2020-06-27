/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    const diff = A.length-m;
    for(let i=m-1;i>-1;i--){
        A[i+diff] = A[i];
    }
    let index1 = A.length-m;
    let index2 = 0;
    let index = 0;
    while(index1<A.length && index2<B.length){
        if(A[index1]<B[index2]){
            A[index++] = A[index1++];
        }else{
            A[index++] = B[index2++];
        }
    }
    while(index2<B.length){
        A[index++] = B[index2++];
    }
    
};