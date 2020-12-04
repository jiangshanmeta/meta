/**
 Do not return anything, modify A in-place instead.
 */
function merge(A: number[], m: number, B: number[], n: number): void {
    let index1:number = m-1;
    let index2:number = A.length-1;
    while(index1>-1){
        A[index2--] = A[index1--];
    }
    index1 = A.length-m;
    index2 = 0;
    let index = 0;
    while(index1<A.length && index2<B.length){
        if(B[index2]<A[index1]){
            A[index++] = B[index2++];
        }else{
            A[index++] = A[index1++];
        }
    }
    while(index2<B.length){
        A[index++] = B[index2++];
    }
};