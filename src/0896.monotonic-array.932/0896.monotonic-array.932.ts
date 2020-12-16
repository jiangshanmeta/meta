function isMonotonic(A: number[]): boolean {
    const delta = A[A.length-1]-A[0];
    if(delta>0){
        for(let i=1;i<A.length;i++){
            if(A[i]<A[i-1]){
                return false;
            }
        }
    }else if(delta<0){
        for(let i=1;i<A.length;i++){
            if(A[i]>A[i-1]){
                return false;
            }
        }
    }else{
        for(let i=1;i<A.length;i++){
            if(A[i] !== A[i-1]){
                return false;
            }
        }
    }
    return true;
};