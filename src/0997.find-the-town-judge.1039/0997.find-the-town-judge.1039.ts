function findJudge(N: number, trust: number[][]): number {
    const counts:number[] = new Array(N+1).fill(0);
    for(let i=0;i<trust.length;i++){
        counts[trust[i][1]]++;
        counts[trust[i][0]]--;
    }
    for(let i=1;i<counts.length;i++){
        if(counts[i] === N-1){
            return i;
        }
    }
    return -1;
};