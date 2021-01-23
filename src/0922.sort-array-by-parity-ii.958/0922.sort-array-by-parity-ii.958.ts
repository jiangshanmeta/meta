function sortArrayByParityII(A: number[]): number[] {
    const result:number[] = new Array(A.length);
    let odd = 1;
    let even = 0;
    for(let i=0;i<A.length;i++){
        if(A[i]&1){
            result[odd] = A[i];
            odd += 2;
        }else{
            result[even] = A[i];
            even += 2;
        }
    }
    return result
};