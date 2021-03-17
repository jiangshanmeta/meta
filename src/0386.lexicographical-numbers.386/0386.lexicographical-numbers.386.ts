function lexicalOrder(n: number): number[] {
    const result:number[] = [];
    dfs(0,n,result);
    return result
};

function dfs(base:number,n:number,result:number[]){
    base *= 10;
    for(let i=base===0?1:0;i<10;i++){
        const sum = base+i;
        if(sum>n){
            break;
        }
        result.push(sum);
        dfs(sum,n,result);
    }
}