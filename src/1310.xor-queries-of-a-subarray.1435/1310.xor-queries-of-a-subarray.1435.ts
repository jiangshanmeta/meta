function xorQueries(arr: number[], queries: number[][]): number[] {
    const xors:number[] = new Array(arr.length+1);
    xors[0] = 0;
    for(let i=0;i<arr.length;i++){
        xors[i+1] = xors[i]^arr[i];
    }
    const result:number[] = new Array(queries.length);
    for(let i=0;i<queries.length;i++){
        const [l,r] = queries[i];
        result[i] = xors[l]^xors[r+1];
    }
    return result
};