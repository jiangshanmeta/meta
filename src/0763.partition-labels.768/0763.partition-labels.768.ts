function partitionLabels(S: string): number[] {
    const ends:number[] = new Array(26).fill(-1);
    for(let i=0;i<S.length;i++){
        ends[S.charCodeAt(i)-97] = i;
    }
    const result:number[] = [];
    let index = 0;
    while(index<S.length){
        let start = index;
        let end = index;
        while(index<=end){
            end = Math.max(end,ends[S.charCodeAt(index++)-97]);
        }
        result.push(index-start);
    }

    return result
};