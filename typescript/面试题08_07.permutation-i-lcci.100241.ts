function permutation(S: string): string[] {
    const used:boolean[] = new Array(S.length).fill(false);
    const result:string[] = [];
    const sequence:string[] = [];
    backTracking(S,used,sequence,result);
    return result;
};

function backTracking(S:string,used:boolean[],sequence:string[],result:string[]){
    if(sequence.length === S.length){
        result.push(sequence.join(''));
        return result;
    }
    for(let i=0;i<S.length;i++){
        if(used[i]){
            continue;
        }
        sequence.push(S[i]);
        used[i] = true;
        backTracking(S,used,sequence,result);
        used[i] = false;
        sequence.pop();
    }
}