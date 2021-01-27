function numEquivDominoPairs(dominoes: number[][]): number {
    const map = new Map<number,number>();
    for(let i=0;i<dominoes.length;i++){
        const a = Math.min(dominoes[i][0],dominoes[i][1]);
        const b = Math.max(dominoes[i][0],dominoes[i][1]);
        const key = a*10+b;
        if(map.has(key)){
            map.set(key,map.get(key)!+1);
        }else{
            map.set(key,1);
        }
    }
    return [...map.values()].reduce((sum,item)=>{
        return sum+item*(item-1)/2;
    },0);
};