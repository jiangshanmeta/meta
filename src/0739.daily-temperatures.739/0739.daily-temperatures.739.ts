function dailyTemperatures(T: number[]): number[] {
    const result:number[] = new Array(T.length).fill(0);
    const stackT:number[] = [];
    const stackIndex:number[] = [];
    for(let i=0;i<T.length;i++){
        while(stackT.length && T[i]>stackT[stackT.length-1]){
            const index = stackIndex.pop();
            result[index] = i-index;
            stackT.pop();
        }
        stackT.push(T[i]);
        stackIndex.push(i);
    }
    return result;
};