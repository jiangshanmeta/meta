function combine(n: number, k: number): number[][] {
    const candidate = <number[]>new Array(n);
    for(let i=0;i<n;i++){
        candidate[i] = i+1; 
    }
    const result:number[][] = [];
    backTracking(
        candidate,
        0,
        k,
        [] as number[],
        result
    );
    return result
};

function backTracking(candidate:number[],index:number,k:number,sequence:number[],result:number[][]){
    if(sequence.length === k){
        result.push(sequence.slice());
        return;
    }
    if(index === candidate.length){
        return;
    }
    sequence.push(candidate[index]);
    backTracking(candidate,index+1,k,sequence,result);
    sequence.pop();

    backTracking(candidate,index+1,k,sequence,result);
}