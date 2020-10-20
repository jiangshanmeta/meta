function combinationSum(candidates: number[], target: number): number[][] {
    const result:number[][] = [];
    backTracking(
        candidates,
        0,
        target,
        [] as number[],
        result
    );
    return result;
};

function backTracking(candidates:number[],index:number,rest:number,sequence:number[],result:number[][]){
    if(rest === 0){
        result.push(sequence.slice());
        return
    }
    if(rest<0 || index === candidates.length){
        return;
    }
    sequence.push(candidates[index]);
    backTracking(candidates,index,rest-candidates[index],sequence,result);
    sequence.pop();

    backTracking(candidates,index+1,rest,sequence,result);
}